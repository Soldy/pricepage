
'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Menu() {
  if( usePathname() == '/'){
    return (<></>);
  }
  return (
    <div className="backMenu">
      <Link
        href="/"
      >
       ← main menu
      </Link>
    </div>
  );
}
