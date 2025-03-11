"use client"; 
import Title from "@view/title";
import ProductList from "@view/productlist";

export default function List() : React.JSX.Element {
  return (
    <div>
        <Title title='Product List'/>
        <ProductList name='' />
    </div>
  );
};
