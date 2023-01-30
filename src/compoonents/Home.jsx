import React from 'react'
import Hero from './Hero'
import Cardsimg from './Cardsimg'
import Pricecards from './Pricecards'
import Card from './Card'
import Galary from './Galary'
import Footer from './Footer'
const Home = () => {
  return (
    <div>
        <Hero />
        <Card/>
        <Cardsimg />
        {/* <Planspricing /> */}
        <Pricecards />
        <Galary />
        <Footer />
        
    </div>
  )
}

export default Home