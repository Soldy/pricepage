
import { useState } from 'react'
import Link from 'next/link';
import { requestGet } from "./request.get.ts";
import Loading from "./loading.tsx";

export default function ProductList(
  {id, name} : {id:number,name:string}
) : JSX.Element {
  const query = {id:0,name:''};
  if(typeof name !== undefined){
     query.name = name;
  }
  const [last, setLast] = useState('');
  const [datas, setData] = useState(0);
  function ListLine (
     {id, name, quantity, price} : {
       id : string,
       name : string,
       quantity : number,
       price : number
     }
  ) : JSX.Element {
    return (
      <div className="listLine">
        <Link
           href={{
             pathname: "/product",
             query: { id }
           }}
        >
        <div
          className="listNumber"
        >{quantity}</div>
        <div
          className="listNumber"
        >{price}</div>
        <div
          className="listName"
        >{name}</div>
      </Link>
      </div>
    );
  };
  if(name !== last){
    setLast(query.name);
  }
  if (!datas || (query.name !== last)) {
    requestGet(query).then((d)=>{
      setData(d)
    });
    return <><Loading /> </>;
  }
  return (
    <div>
    <div className="result">
    {datas.map((data) => (
       <ListLine
         key={data.id}
         id={data.id}
         name={data.name}
         quantity={data.quantity}
         price={data.price}
       />
    ))}
    </div>
    <div className="resultReport">
     {datas.length} results
    </div>
    </div>
  );
};
