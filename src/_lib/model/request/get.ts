
import { searchquery, product } from "@tool/request/types";
import { apiUrl, apiHeader } from "@tool/request/tools";

export async function requestGet(
  query ? : searchquery
) : Promise<product[]> {
  const response = await fetch(
    apiUrl(query),
    {
      method: "GET",
      headers: apiHeader()
    }
  );
  if (!response.ok){
     return [];
  }
  const datas = await response.json();
  return datas;
}
