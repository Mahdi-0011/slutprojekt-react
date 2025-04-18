
import { Link } from "react-router-dom";
import "./navbar.scss"

type NavLinkType= {
    name: string;
    url: string;
    id:string;
  }

const navLink: NavLinkType[] = [
  {name:"Home", url:"/", id:"1"},
  {name:"Favorites", url:"/Favorites", id:"2"},
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
