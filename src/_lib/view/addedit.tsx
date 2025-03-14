
'use client'
import { useState } from 'react'
import {
  redirect
} from "next/navigation";
import Form from "next/form"
import { productout, product } from "@tool/request/types";
import { requestGet } from "@model/request/get";
import { requestSave } from "@model/request/save";
import Title from "@view/title";
import Images from "@view/image";
import Loading from "@view/loading";
import useId from "@tool/getid";


export default function AddEdit(
  {title} : {title:string, id?:number}
): React.JSX.Element {

  const [first, setFirst] = useState<boolean>(false);
  const [fields, setFields] = useState<productout>({
    id : 0,
    name : '',
    quantity : 0.00,
    price : 0,
    image_urls : ['']
  });
  const id = useId();


 function imageCheck(urls: FormDataEntryValue[] | string[]): string[]{
    const out = []; 
    for(const url of urls){
      if (url !== ''){
        let noconflict = true;
        let url_b : string;
        for(url_b of out){
          if (url === url_b){
            noconflict = false;
            break;
          }
        }
        if( noconflict ){
          out.push(url.toString());
        }
      }
    }
    return out;
 };


 function fieldRead(event : React.ChangeEvent<HTMLFormElement>): productout{
   event.preventDefault()
   const formData = new FormData(event.currentTarget as HTMLFormElement);
   return {
     id : fields.id,
     name : `${formData.get('name')}`,
     quantity : parseInt(`${formData.get('quantity')}`),
     price : parseFloat(`${formData.get('price')}`),
     image_urls : imageCheck(formData.getAll('image_urls'))
    };
 };


 async function saveProduct(event: React.ChangeEvent<HTMLFormElement>) {
    const result = await requestSave(
        fieldRead(event)
    );
    if( result ){
      redirect('/list');
    }
  };


  function imageOnblur(event: React.ChangeEvent<HTMLFormElement>) {
    setFields(
      fieldRead(event)
    );
  };

  if (!first || id != fields.id){
    requestGet({id}).then((d:product[])=>{
      setFirst(true);
      setFields(d[0]);
    });
    return <Loading />;
  }


  function Line(
    {title, type, name, value}: {
      title:string,
      type:string,
      name:string,
      value:string | number
    }
  ): React.JSX.Element {
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
          />
        </div>
      </div>
    );
  };


  function ImageLines(
    {urls} : {urls:string[]}
  ): React.JSX.Element {
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
            value={src.toString()}
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
        action="/edit"
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
           value=""
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
