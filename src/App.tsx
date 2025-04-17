
import { BrowserRouter } from 'react-router-dom'
import './App.scss'
import Layout from './components/layout/layout'

function App() {

  return (
    <>
    <BrowserRouter>
      <Layout children={undefined}/>
      </BrowserRouter>
    </>
  )
}

export default App
