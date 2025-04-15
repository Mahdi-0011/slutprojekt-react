import Footer from "../footer/footer";
import Header from "../header/Header";
import "./layout.scss"

export default function Layout() {
  return (
    <div>
      <Header />
      <main 
        className="main">
        main
      </main>
      <Footer />
    </div>
  )
}
