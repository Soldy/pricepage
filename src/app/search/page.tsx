'use client'
import { useState } from 'react'
import Form from "next/form";
import Title from "@view/title";
import ProductList from "@view/productlist";
import "@css/search";

export default function Search() : React.JSX.Element {
  const [search, setSearch] = useState('');

  function SearchZone(){
    if(search == '' ){
      return <></>;
    }
    return (
      <ProductList name={search} />
    );
  }
  return (
    <div>
      <Title title="Search Product" />
      <Form action="/search">
        <input
          className="searchtag"
          type="text"
          name="search"
          onChange={e =>{
            e.preventDefault();
           setSearch(e.target.value)
          }}
        />
      </Form>
      <SearchZone />
    </div>
  );
}
