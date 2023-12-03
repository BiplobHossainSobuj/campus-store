import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/home/Header/Header'
import Hotdeal from './components/home/hotDeal/Hotdeal'
import PopularCategories from './components/home/popularCategory/PopularCategories'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <PopularCategories></PopularCategories>
      <Hotdeal></Hotdeal>
      <Footer></Footer>
    </>
  )
}

export default App
