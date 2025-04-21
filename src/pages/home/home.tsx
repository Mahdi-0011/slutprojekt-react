import { useState } from "react";
import Card from "../../components/card/card"
import "./home.scss"


const Search = (e: { preventDefault: () => void; }) =>{
  e.preventDefault();
};


export default function Home() {
  const [searchText, setSearchText] = useState("");
  return (
    <>
    <div className="homepage">
      <form action="input" className="input-form">
        <input type="text" 
        placeholder="search your book ..."
        onChange={(e)=>{
          setSearchText(e.target.value)}}
        />
        <button onClick={Search}>search</button>
        <p>u wrote: {searchText}</p>
      </form>
    </div>
    <div className="card-show">
    <Card />
    <Card />
    <Card />
    <Card />
    </div>
    </>
  )
}
