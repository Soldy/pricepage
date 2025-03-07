'use client'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Menu() {
  function MenuPoint(
    {menu, url}: {menu:string, url:string}
  ){
    return(
      <Link 
        href={url} 
        className={`link ${usePathname() === url ? 'active' : ''}`}
      >
        <div className="menuPoint">{ menu }</div>
      </Link>
    );
  };
  return(
     <div className="mainMenu">
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
     </div>
  );
};
