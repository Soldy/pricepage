
'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '@css/back';

export default function Menu() {
  if( usePathname() == '/'){
    return (<></>);
  }
  return (
    <div className="backMenu">
      <Link
        className="backMenuLink"
        href="/"
      >
       ← main menu
      </Link>
    </div>
  );
}
