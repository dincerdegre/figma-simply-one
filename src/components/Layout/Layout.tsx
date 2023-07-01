import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className='flex m-auto w-[1440px] pb-0 flex-col items-center gap-[60px]'>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Layout