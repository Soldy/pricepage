
'use client'
import { useSearchParams } from "next/navigation";
import { useState } from 'react'
import Form from "next/form"
import Title from "../title.tsx";
import { requestGet } from "../request.get.ts";
import { requestPatch } from "../request.patch.ts";
import Loading from "../loading.tsx";

export default function Edd() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [data, setData] = useState(0);
  const [changed, setChanged] = useState(0);
 function addProduct(event) {
    if(!changed)
       return;
    setChanged(false);
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    requestPatch({
      id : formData.get('id'),
      name : formData.get('name'),
      quantity : formData.get('quantity'),
      price : formData.get('price'),
      image_urls : formData.getAll('image_urls')
    });
  };
  function Line(
    {title, type, name, value}: {title:string, type:string, name:string, value: string}
  ){
    return(
      <div className="inputLine">
        <div className="inputTitle">
          {title}
        </div>
        <div className="inputInput">
          <input 
            placeholder={title}
            name={name}
            type={type}
            value={value}
            onChange={e => {setChanged(true)}}
          />
        </div>
      </div>
    );
  };
  if (!data){
    requestGet({id}).then((d)=>{
      setData(d[0])
    });
    return <><Loading /> </>;
  }
  return (
    <>
      <Title title="Add new product" />
      <Form onSubmit={addProduct}>
         <input
           type="hidden" 
           name="id"
           value={data.id}
        />
        <Line
           name="name"
           title="Product name"
           type="text"
           value={data.name}
        />
        <Line
           name="quantity"
           title="Product Quantity"
           type="number"
           value={data.quantity}
        />
        <Line
           name="price"
           title="Product price"
           type="text"
           value={data.price}
        />
        <Line
           name="image_urls"
           title="image"
           type="url"
           value={data.image_urls[0]}
        />
        <Line
           name="image_urls"
           title="image"
           type="url"
           value={data.image_urls[1]}
        />
        <button type="submit">Submit</button>
      </Form>
    </>
  );
}
