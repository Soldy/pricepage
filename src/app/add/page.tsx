'use client'
import { redirect } from 'next/navigation';
import Form from "next/form"
import Title from "@view/title";
import { requestPost } from "@model/request/post";

export default function Add() {
 async function addProduct(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const result = await requestPost({
      name : formData.get('name'),
      quantity : formData.get('quantity'),
      price : formData.get('price'),
      image_urls : formData.getAll('image_urls')
    });
    if( result ){
      redirect('/list');
    }
  };
  function Line(
    {title, type, name}: {title:string, type:string, name:string}
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
          />
        </div>
      </div>
    );
  };
  return (
    <>
      <Title title="Add new product" />
      <Form onSubmit={addProduct}>
        <Line
           name="name"
           title="Product name"
           type="text"
        />
        <Line
           name="quantity"
           title="Product Quantity"
           type="number"
        />
        <Line
           name="price"
           title="Product price"
           type="text"
        />
        <Line
           name="image_urls"
           title="image"
           type="url"
        />
        <Line
           name="image_urls"
           title="image"
           type="url"
        />
        <div className="inputLine">
          <button
            className="middleButton"
            type="submit"
          >Submit</button>
       </div>
      </Form>
    </>
  );
}
