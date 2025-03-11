
import { productout, searchquery } from "@tool/request/types";

export function bearer(): string {
  return `Bearer ${process.env.APIKEY}`
};

export function apiUrl(
  query ? :  searchquery
): string {
  let url = `${process.env.APIURL}`;
  if( typeof query == 'undefined'){
     return url;
  }
  if( query.name !== '' && typeof query.name !== 'undefined'){
     url = `${url}?name=${query.name}`;
  }else if( query.id !== 0 && typeof query.id !== 'undefined'){
     url = `${url}?id=${query.id}`;
  }
  return url
};

export function apiHeader(): HeadersInit {
  return {
    "Authorization": bearer(),
    "Content-Type": "application/json",
    "Accept": "application/json"
  };
};


export async function requestBool(
   method : string,
   data : string[] | number[] | productout
): Promise<boolean> {
  const response = await fetch(
    apiUrl(),
    {
      method: method,
      headers: apiHeader(),
      body:JSON.stringify(data)
    }
  );
  if (!response.ok){
     return false;
  }
  return true;
};
