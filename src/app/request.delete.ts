

import { bearer } from "./request.tools.ts";

export async function requestDelete(
  id : number
) {
  const url = process.env.APIURL;
  const response = await fetch(
    url,
    {
      method: "DELETE", 
      headers: {
        "Authorization": bearer(),
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body:JSON.stringify([id])
    }
  );
  if (!response.ok){
     return [];
  }
  const datas = await response.json();
  return datas;
}
