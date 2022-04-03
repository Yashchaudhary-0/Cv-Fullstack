import React from 'react'

import { About, Footer, Header, Testomonials, Skills, Work } from './Container'
import { Nevbar } from './Constants/Navbar'

const App = () => {
  return (
    <div className='app'>
        <Nevbar />
        <Header />
        <About />
        <Skills />
        <Work />
        <Testomonials />
        <Footer />
    </div>
  )
}

export default App