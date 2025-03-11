'use client'
import { Suspense } from 'react';
import AddEdit from "@view/addedit";

export default function Add() {
  return (
    <Suspense>
     <AddEdit
       title="Add new product"
     />
    </Suspense>
  );
}
