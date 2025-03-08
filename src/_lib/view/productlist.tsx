
import { useState } from 'react'
import Link from 'next/link';
import { requestGet } from "@model/request/get";
import Loading from "@view/loading";

export default function ProductList(
  {name} : {name:string}
) : JSX.Element {
  const query = {id:0,name:''};
  if(typeof name !== undefined){
     query.name = name;
  }
  const [last, setLast] = useState('');
  const [datas, setData] = useState(0);
  function ResultStat(){
    if( typeof name == 'undefined' ){
       return (<></>);
    }
    return(
      <div className="resultReport">
        <span>{datas.length} </span>
        results for &#34<span>{name}</span>&#34
      </div>
    );
  };
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
    <ResultStat />
    </div>
  );
};
