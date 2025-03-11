import Image from 'next/image';
import Link from 'next/link';
import Menu from "@view/menu";
import Back from "@view/back";
import "@css/globals";
import "@css/layout";
import "@css/input";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="sideMenu">
          <Menu />
        </div>
        <div className="workPlace">
          <div className="backMenu">
            <Back />
          </div>
          <div className="workFrame">
            {children}
          </div>
          <div className="buttom">
            <p>
              powered by:
            </p>
            <Link
              href="/"
            >
              <Image
                src='/smg-group-logo.webp'
                alt='missing logo missing love'
                width={176}
                height={60}
              />
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
