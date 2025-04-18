/** @format */

import Footer from "../components/footer/footer";
import Header from "../components/header/Header";
import Main from "../components/main/main";
import "./Rootlayout.scss"

export default function RootLayout() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
