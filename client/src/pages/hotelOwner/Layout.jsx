import React from 'react';
import Navbar from '../../components/hotelOwner/Navbar';
import SideBar from '../../components/hotelOwner/SideBar';
import Footer from '../../components/Footer'; // if you use a Footer
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <SideBar />
        <main className="flex-1 p-4 pt-10 md:px-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
