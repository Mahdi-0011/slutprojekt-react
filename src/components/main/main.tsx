import { Outlet } from "react-router-dom";
import "./main.scss"

export default function Main() {
  return (
    <>
    <main className='main'>
    <Outlet />
    </main>
    </>
  )
}
