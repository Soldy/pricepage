
import { product } from "./request.types.ts";
import { bearer } from "./request.tools.ts";

export async function requestPatch(
  data : product
) {
  const url = process.env.APIURL;
  const response = await fetch(
    url,
    {
      method: "PATCH", 
      headers: {
        "Authorization": bearer(),
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body:JSON.stringify(data)
    }
  );
  if (!response.ok){
     return [];
  }
  const datas = await response.json();
  return datas;
}
