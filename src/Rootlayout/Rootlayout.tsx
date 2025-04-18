/** @format */

import { Outlet } from "react-router-dom";
import Footer from "../components/footer/footer";
import Header from "../components/header/Header";
import "./layout.scss";

export default function RootLayout() {
  return (
    <div>
      <Header />
      <main className='main'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
