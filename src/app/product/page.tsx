'use client';
import { useSearchParams } from "next/navigation";
import ProductAsync from "@view/productasync";
 

export default function Product() : JSX.Element {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  return(
    <>
      <ProductAsync id={id} />
    </>
  );

};
