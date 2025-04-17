// import { Link } from "react-router";
import Navbar from "../navbar/navbar"
import "./Header.scss"


export default function Header() {
  return (
    <>
    <header className="header">
    <div className="logo-container">
    <div className="logo">logo</div>
    </div>
    <nav className="navbar"><Navbar/></nav>
    </header>
    </>
  )
}
