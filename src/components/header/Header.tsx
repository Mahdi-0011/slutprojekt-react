// import { Link } from "react-router";
import "./Header.scss"

// const navLink = [
//   {name:"home", url:"/", id:"1"},
//   {name:"favorites", url:"/favorites", id:"2"},
// ];
{/* <nav>
      {navLink.map((link) => (<Link to={link.url} key={link.id} className="navlink">{link.name}</Link>))}
      </nav> */}
export default function Header() {
  return (
    <>
    <header className="header">
    <div className="logo">logo</div>
    <nav className="navbar">navbar</nav>
    </header>
    </>
  )
}
