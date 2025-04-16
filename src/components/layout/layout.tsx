import Footer from "../footer/footer";
import Header from "../header/Header";
import "./layout.scss"
type LayoutProps = {
  children: React.ReactNode;
}
export default function Layout({children} :LayoutProps) {
  return (
    <div>
      <Header />
      <main 
        className="main">
        {children}
    </main>
      <Footer />
    </div>
  )
}
