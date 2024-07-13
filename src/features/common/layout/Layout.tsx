import BottomNav from '@/features/common/nav/BottomNav';
import Footer from '@/features/common/nav/Footer';
import Navbar from '@/features/common/nav/Navbar';

import Head from 'next/head';

import { Inter } from 'next/font/google';
import { Roboto } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });
const inter = Roboto({  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'], });
const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Head>
      <title>DMV Veteran Soccer League</title>
      <meta
        name="description"
        content="Track scores and fixtures for the DMVVL: A Summer soccer league for veteran teams in the DMV area"
      />
      <meta name="charset" content="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Navbar />
    <div className={inter.className}>
      <main className="flex min-h-screen flex-col bg-gray-100 md:px-8 xl:px-44  2xl:px-72">
        {children}
      </main>
    </div>
    <BottomNav className="md:hidden" />
    <Footer />
  </>
);

export default Layout;
