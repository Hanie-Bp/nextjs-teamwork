"use server";

import { revalidateTag } from "next/cache";

// import { revalidateTag } from "next/cache";

export async function getData(url) {
  const res = await fetch(url, { next: { tags: ["questions"] } });
  const data = await res.json();
  return data;
}

export async function patchData(url,data) {
    await fetch(url, { method: "PATCH", body: JSON.stringify(data) });
    revalidateTag("questions");
    return data;
  }
  
  export async function postData(url, data) {
    await fetch(url, { method: "POST", body: JSON.stringify(data) });
    revalidateTag("questions");
  }
  
  export async function deleteData(url,) {
    await fetch(url, { method: "DELETE" });
    revalidateTag("questions");
  }
  