
'use client'
import { Suspense } from 'react';
import AddEdit from "@view/addedit";

export default function Edit(): React.JSX.Element {


  return (
    <Suspense>
      <AddEdit
        title="Edit product details"
      />
    </Suspense>
  );
}
