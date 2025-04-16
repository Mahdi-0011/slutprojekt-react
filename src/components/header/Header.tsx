import { Link } from "react-router";
import Input from "../UI/Input/input"
import "./Header.scss"

const navLink = [
  {name:"home", url:"/", id:"1"},
  {name:"favorites", url:"/favorites", id:"2"},
];
export default function Header() {
  return (
    <>
    <div 
      className="header"> 
      header
      <nav>
        {navLink.map((link) => (<Link to={link.url} key={link.id} className="navlink">{link.name}</Link>))}
      </nav>
      <div 
      className="logo">
      logo
    </div>
      <Input />
    </div>
    </>
  )
}
