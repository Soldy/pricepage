
import { seachquery, product } from "./request.types.ts";
import { bearer } from "./request.tools.ts";

export async function requestGet(
  query = {id:0, name:''} : searchquery
) : product[] {
  let url = process.env.APIURL;
  if( query.name !== '' && typeof query.name !== 'undefined'){
     url = `${url}?name=${query.name}`;
  }else if( query.id !== 0){
     url = `${url}?id=${query.id}`;
  }
  const response = await fetch(
    url,
    {
      method: "GET", 
      headers: { 
        "Authorization": bearer(),
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }
  );
  if (!response.ok){
     return [];
  }
  const datas = await response.json();
  return datas;
}
