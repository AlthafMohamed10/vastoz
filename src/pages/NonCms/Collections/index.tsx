import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavBar from '../layout/NavBar/navbar'
import Slider from '../layout/Slider'
import Footer from '../layout/Footer'
import BestProducts from '../BestProducts'

const Collections = () => {
  return (
    <div>
      <NavBar/>
      <Slider/>
      <BestProducts/>
      {/* <Testimonial/> */}
      <Footer/>
    </div>
  )
}

export default Collections
