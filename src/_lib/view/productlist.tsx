
import { useState } from 'react'
import Link from 'next/link';
import { requestGet } from "@model/request/get";
import Loading from "@view/loading";
import "@css/list";

export default function ProductList(
  {name} : {name:string}
) : JSX.Element {
  const [last, setLast] = useState('');
  const [datas, setData] = useState(0);
  const query = {id:0,name:''};
  if(typeof name !== undefined){
     query.name = name;
  }


  function ResultStat(): JSX.Element {
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
       id : string,
       name : string,
       quantity : number,
       price : number,
       urls : string[]
     }
  ) : JSX.Element {
    console.log(urls);
    return (
      <div className="listLine">
        <Link
           href={{
             pathname: "/product",
             query: { id }
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
    requestGet(query).then((d)=>{
      setData(d)
    });
    return <><Loading /> </>;
  }
  console.log(datas);
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
