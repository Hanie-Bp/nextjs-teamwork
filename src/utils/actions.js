"use server";

import { revalidateTag } from "next/cache";

// Utility function to get base API URL for server-side requests
const getBaseUrl = () => {
  // For server-side requests, use relative URLs or construct from environment
  if (typeof window === "undefined") {
    // Server-side: use relative URL or construct from environment
    return (
      process.env.NEXTAUTH_URL ||
      process.env.VERCEL_URL ||
      "http://localhost:3000"
    );
  }
  // Client-side: use public URL
  return process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
};

export async function getData(url, tags) {
  try {
    // If URL is relative, construct full URL for server-side requests
    const fullUrl = url.startsWith("/") ? `${getBaseUrl()}${url}` : url;

    const res = await fetch(fullUrl, {
      next: { tags },
      cache: "no-store", // Ensure fresh data in production
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error in getData:", error);
    throw error;
  }
}

export async function patchData(url, data, tags) {
  try {
    const fullUrl = url.startsWith("/") ? `${getBaseUrl()}${url}` : url;

    const res = await fetch(fullUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    revalidateTag(tags[0]);
    return data;
  } catch (error) {
    console.error("Error in patchData:", error);
    throw error;
  }
}

export async function postData(url, data, tags) {
  try {
    const fullUrl = url.startsWith("/") ? `${getBaseUrl()}${url}` : url;

    const res = await fetch(fullUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    revalidateTag(tags[0]);
    return await res.json();
  } catch (error) {
    console.error("Error in postData:", error);
    throw error;
  }
}

export async function deleteData(url, tags) {
  try {
    const fullUrl = url.startsWith("/") ? `${getBaseUrl()}${url}` : url;

    const res = await fetch(fullUrl, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    revalidateTag(tags[0]);
    return true;
  } catch (error) {
    console.error("Error in deleteData:", error);
    throw error;
  }
}

// Export the utility function for use in components
export { getBaseUrl };
