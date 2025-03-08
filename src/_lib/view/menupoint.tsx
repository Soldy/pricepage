import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function MenuPoint(
  {menu, url}: {menu:string, url:string}
){
  return(
    <Link
      href={url}
      className={`link ${usePathname() === url ? 'active' : ''}`}
    >
      <div className="menuPoint">
        { menu }
      </div>
    </Link>
  );
};
