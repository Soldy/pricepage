'use client'

import Image from 'next/image';
import { MenuPoint } from '@view/menupoint';

export default function Menu(): React.JSX.Element {
  return(
    <>
      <Image
        src="/smlogo.png"
        alt="logo"
        width={200}
        height={200}
        priority
      />
      <MenuPoint 
        url="/list"
        menu="list"
      />
      <MenuPoint 
        url="/search"
        menu="search"
      />
      <MenuPoint 
        url="/add"
        menu="add"
      />
    </>
  );
};
