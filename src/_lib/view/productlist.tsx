
import { useState } from 'react'
import Link from 'next/link';
import { requestGet } from "@model/request/get";
import Loading from "@view/loading";
import { product } from "@tool/request/types";
import "@css/list";

export default function ProductList(
  {name} : {name:string}
): React.JSX.Element {
  const [last, setLast] = useState<string>('');
  const [datas, setData] = useState<product[]>([]);
  const query = {id:0,name:''};
  if(typeof name !== undefined){
     query.name = name;
  }


  function ResultStat(): React.JSX.Element {
    if( typeof name == 'undefined' ){
       return (<></>);
    }
    return(
      <div className="resultReport">
        <span>{datas.length} </span>
        results for <span>{name}</span>
      </div>
    );
  };


  function ListLine (
     {id, name, quantity, price, urls} : {
       id : number,
       name : string,
       quantity : number,
       price : number,
       urls : string[]
     }
  ): React.JSX.Element {
    return (
      <div className="listLine">
        <Link
           href={{
             pathname: "/product",
             query: { id : id.toString() }
           }}
        >
        <div
          className="listPicSide"
        >
          <div
            className="listPic"
            style={{
              backgroundImage:'url('+urls[0]+')'
            }}
          />
        </div>
        <div
          className="listTextSide"
        >
        <div
          className="listName"
        >{name}</div>
        <div
          className="listDetails"
        >
           <div
             className="listNumber"
           >{quantity}</div>
           <div
             className="listNumber"
           >{price}</div>
         </div>
       </div>
      </Link>
      </div>
    );
  };


  if(name !== last){
    setLast(query.name);
  }
  if (!datas || (query.name !== last)) {
    requestGet(query).then((d:product[])=>{
      setData(d as product[])
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
         urls={data.image_urls}
       />
    ))}
    </div>
    <ResultStat />
    </div>
  );
};
