import Card from "../../components/card/card"
import "./home.scss"

export default function Home() {
  return (
    <>
    <div className="homepage">
      <form action="input" className="input-form">
        <input type="text" />
        <button>search</button>
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
