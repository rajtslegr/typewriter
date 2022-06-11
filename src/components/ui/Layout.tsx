import { ReactNode } from 'react';

import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col items-center min-h-screen">
    <Header />
    <div className="flex-auto w-full">
      <main className="container py-6 px-4 my-4 mx-auto md:py-12 xl:w-5/6 2xl:w-2/3">
        {children}
      </main>
    </div>
  </div>
);

export default Layout;
