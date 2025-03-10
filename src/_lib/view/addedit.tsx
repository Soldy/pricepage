
'use client'
import { useState } from 'react'
import { redirect } from 'next/navigation';
import Form from "next/form"
import Title from "@view/title";
import Images from "@view/image";
import { product } from "@tool/request/type";
import { requestSave } from "@model/request/save";

export default function AddEdit(
  {title, data} : {title:string, data:product}
) {
  const [fields, setFields] = useState({
    id : 0,
    name : '',
    quantity : '',
    price : '',
    image_urls : []
  });
  if (typeof data !== 'undefined' && data.id != fields.id){
    setFields(data);
  }


 function imageCheck(urls:string[]): string[]{
    const out = []; 
    for(const url of urls){
      if (url !== ''){
        let noconflict = true;
        for(const url_b of out){
          if (url === url_b){
            noconflict = false;
            break;
          }
        }
        if( noconflict ){
          out.push(url);
        }
      }
    }
    return out;
 };


 function fieldRead(event): product{
   event.preventDefault()
   const formData = new FormData(event.currentTarget)
   return {
     id : fields.id,
     name : formData.get('name'),
     quantity : formData.get('quantity'),
     price : formData.get('price'),
     image_urls : imageCheck(formData.getAll('image_urls'))
    };
 };


 async function saveProduct(event) {
    const result = await requestSave(
        fieldRead(event)
    );
    if( result ){
      redirect('/list');
    }
  };


  function imageOnblur(event) {
    setFields(
      fieldRead(event)
    );
  };



  function Line(
    {title, type, name, value, onblur}: {
      title:string,
      type:string,
      name:string,
      value:string,
      onblur:(event: event) => void
    }
  ){
    return(
      <div className="inputLine">
        <div className="inputTitle">
          {title} :
        </div>
        <div className="inputInput">
          <input 
            placeholder={title}
            name={name}
            type={type}
            defaultValue={value}
            onBlur={onblur}
          />
        </div>
      </div>
    );
  };


  function ImageLines(
    {urls} : {urls:string[]}
  ){
    let imgi = 0;
    return (
      <>
      {urls.map((src) => {
        imgi++;
        return (
          <Line
            key={imgi}
            name="image_urls"
            title={`Image ${imgi}`}
            type="url"
            value={src}
          />
        );
      })}
      </> 
    );
  };



  return (
    <>
      <Title title={title} />
      <Form 
        onBlur={imageOnblur}
        onSubmit={saveProduct}>
        <Line
           name="name"
           title="Product name"
           type="text"
           value={fields.name}
        />
        <Line
           name="quantity"
           title="Product Quantity"
           type="number"
           value={fields.quantity}
        />
        <Line
           name="price"
           title="Product price"
           type="text"
           value={fields.price}
        />
        <Line
           name="image_urls"
           title="Image"
           type="url"
        />
        <ImageLines
           urls={fields.image_urls}
        />
        <div className="inputLine">
          <button
            className="middleButton"
            type="submit"
          >Submit</button>
       </div>
      </Form>
      <Images
        urls={fields.image_urls}
      />
    </>
  );
}
