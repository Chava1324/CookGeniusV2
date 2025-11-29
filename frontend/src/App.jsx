import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/custom.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuGenerator from './components/MenuGenerator'
import Footer from './components/Footer'
import DivisorElegante from './components/DivisorElegante.jsx'
import TipsDeCocina from './components/TipsDeCocina.jsx'
function App() {
  const [ingredientes, setIngredientes] = useState('')

  return (
    <>
      <Navbar />
      <Hero onGenerate={(ingredientes) => setIngredientes(ingredientes)} />
      <MenuGenerator ingredientes={ingredientes} />
      <DivisorElegante />
      <TipsDeCocina />

      <Footer />
    </>
  )
}

export default App
