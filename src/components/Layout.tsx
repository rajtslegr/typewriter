import React from 'react';
import Header from './Header';

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const Layout: React.FC<IProps> = ({ children }) => (
  <div className="flex flex-col items-center min-h-screen">
    <Header />
    <div className="flex-auto w-full pt-16 md:pt-24">
      <main className="container px-4 py-6 mx-auto my-4 md:py-12 xl:w-5/6 2xl:w-2/3">
        {children}
      </main>
    </div>
  </div>
);

export default Layout;
