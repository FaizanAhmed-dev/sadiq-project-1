'use client'

import { UserProvider } from '@/Context/AuthContext';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/core/Header';
import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <div className="flex">
        <div className="border-r-2 border-gray-300 hidden lg:block bg-sidebarColor h-[100vh] w-[400px]">
          <Sidebar />
        </div>
        <div className="bg-primary p-5 w-full ">
          <UserProvider>
            <Header />
            {children}
          </UserProvider>
        </div>
      </div>
    </div>
  );
}

export default Layout
