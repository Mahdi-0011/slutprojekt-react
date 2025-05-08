// import { Link } from "react-router";
import Navbar from "../navbar/navbar";
import "./Header.scss";
import logo from "../pictures/logo.jpg";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <nav className="navbar">
          <Navbar />
        </nav>
      </header>
    </>
  );
}
