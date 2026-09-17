import React from 'react'
import Hero from '../components/Hero'
import Drinks from '../components/Drinks'

export default function Home({ language }) {
  return (
    <div>
      <Hero language={language}/>
      <Drinks language={language}/>
    </div>
  )
}
