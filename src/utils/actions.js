"use server";

import { revalidateTag } from "next/cache";

// Import API route handlers for direct calls during build
import { GET as getQuestions } from "@/app/api/v1/questions/route";
import { GET as getQuestion } from "@/app/api/v1/questions/[questionId]/route";

export async function getData(url, tags) {
  // During build time (static generation), call API functions directly
  if (process.env.NODE_ENV === 'production' || !process.env.NEXT_PUBLIC_API_URL) {
    try {
      // Parse the URL to determine which API function to call
      if (url.includes('/api/v1/questions/') && url.split('/').length > 6) {
        // Single question endpoint
        const questionId = url.split('/').pop();
        const response = await getQuestion(null, { params: { questionId } });
        const data = await response.json();
        return data;
      } else if (url.includes('/api/v1/questions')) {
        // All questions endpoint
        const response = await getQuestions();
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.error('Error calling API directly:', error);
      // Fallback to empty data
      return url.includes('/api/v1/questions/') ? {} : [];
    }
  }

  // During development, use fetch as normal
  try {
    const res = await fetch(url, { next: { tags } });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    // Return empty data instead of throwing
    return url.includes('/api/v1/questions/') ? {} : [];
  }
}

export async function patchData(url, data, tags) {
  await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  revalidateTag(tags[0]);
  return data;
}

export async function postData(url, data, tags) {
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  revalidateTag(tags[0]);
}

export async function deleteData(url, tags) {
  await fetch(url, { method: "DELETE" });
  revalidateTag(tags[0]);
}
