"use server";

import { revalidateTag } from "next/cache";

// import { revalidateTag } from "next/cache";

export async function getData(url,tags) {
  const res = await fetch(url, { next: { tags } });
  const data = await res.json();
  return data;
}

export async function patchData(url,data,tags) {
    await fetch(url, { method: "PATCH", body: JSON.stringify(data) });
    revalidateTag(tags[0]);
    return data;
  }
  
  export async function postData(url, data,tags) {
    await fetch(url, { method: "POST", body: JSON.stringify(data) });
    revalidateTag(tags[0]);
  }
  
  export async function deleteData(url,tags) {
    await fetch(url, { method: "DELETE" });
    revalidateTag(tags[0]);
  }
  