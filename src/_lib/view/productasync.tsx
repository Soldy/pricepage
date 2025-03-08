import { useState } from 'react'
import { redirect } from "next/navigation";
import Link from 'next/link';
import Image from "next/image"
import { requestGet } from "@model/request/get";
import { requestDelete } from "@model/request/delete";
import Loading from "@view/loading";


export default function ProductAsync( {id} : {id : number} ) : JSX.Element {
  function ProductBox(
    { title, value } : {
      title : string,
      value : number
    }
  ) : JSX.Element {
    return (
        <div className="productBox">
          <div className="productBoxTitle">
            {title}
          </div>
          <div>
            {value}
          </div>
        </div>

    );
  }
  function Delete(){
    requestDelete(data.id);
    setDeleted(true);
  }
  const [data, setData] = useState(0);
  const [deleted, setDeleted] = useState(false);

  if (deleted){
    redirect('/');
  }
  if (!data){
    requestGet({id}).then((d)=>{
      setData(d[0])
    });
    return <><Loading /> </>;
  }
  let imgi = 0;
  return(
    <div className="productShell">
      <div className="productData">
      <div className="productName">
        {data.name}
      </div>
      <div>
        <div>
          <ProductBox
            title="Quantity"
            value={data.quantity}
          />
          <ProductBox
            title="Price"
            value={data.price}
          />
        </div>
      </div>
      </div>
      <div className="productImages">
      {data.image_urls.map((img) => {
        imgi++;
        return (
          <Image 
            key={imgi}
            className="listImage"
            src={img}
            alt={data.name}
            width={200}
            height={200}
          />
      );})}
     </div>
     <div className="productControl">
       <Link
         href={`/edit?id=${data.id}`}
       >Edit</Link>
       <button
         onClick={Delete}
       >Delete</button>
     </div>
    </div>
  );
}
