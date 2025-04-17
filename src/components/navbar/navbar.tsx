
import { Link } from "react-router-dom";
import "./navbar.scss"

type NavLinkType= {
    name: string;
    url: string;
    id:string;
  }

const navLink: NavLinkType[] = [
  {name:"home", url:"/", id:"1"},
  {name:"favorites", url:"/favorites", id:"2"},
  {name:"about", url:"/about", id:"3"},
];
export default function Navbar() {
  return (
    <>
    <nav>
      {navLink.map((link) => (<Link to={link.url} key={link.id} className="navlink">{link.name}</Link>))}
    </nav>
    </>
  )
}
