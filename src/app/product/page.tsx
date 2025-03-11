'use client';
import { Suspense } from 'react';
import ProductAsync from "@view/productasync";
 

export default function Product(): React.JSX.Element {

  return(
    <Suspense>
      <ProductAsync />
    </Suspense>
  );

};
