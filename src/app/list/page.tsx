"use client"; 
import Title from "../title.tsx";
import ProductList from "../productlist.tsx";

export default function List() : JSX.Element {
  return (
    <div>
        <Title title='Product List'/>
        <ProductList />
    </div>
  );
};
