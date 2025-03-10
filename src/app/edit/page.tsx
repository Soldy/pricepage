
'use client'
import { useSearchParams } from "next/navigation";
import { useState } from 'react'
import Loading from "@view/loading";
import { requestGet } from "@model/request/get";
import AddEdit from "@view/addedit";

export default function Edit() {
  const [data, setData] = useState(0);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  if (!data){
    requestGet({id}).then((d)=>{
      setData(d[0])
    });
    return <><Loading /> </>;
  }
  return (
     <AddEdit
       title="Edit product details"
       data={data}
     />
  );
}
