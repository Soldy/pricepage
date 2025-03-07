'use client'
import { useState } from 'react'
import Form from "next/form";
import Title from "../title.tsx";
import ProductList from "../productlist.tsx";

export default function Search() : JSX.Element {
  const [search, setSearch] = useState('');
  return (
    <div>
      <Title title="Search Product" />
      <Form action="/">
        <input 
          className="searhtag"
          type="text"
          name="search"
          onChange={e => setSearch(e.target.value)}
        />
      </Form>
        <ProductList name={search} />
    </div>
  );
}
