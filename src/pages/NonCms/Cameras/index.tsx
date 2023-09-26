import React from 'react'
// import Breadcrumb from '../Breadcrumb/Breadcrumb'
import Products from '../Products'
import NavBar from '../layout/NavBar/navbar'
import Footer from '../layout/Footer'

const Cameras = () => {
  return (
    <div className='mt-0'>
      {/* <Breadcrumb/> */}
      <NavBar/>
      <div className='mt-5 ms-3'>
      <h3> Cameras and Accessories</h3>
      </div>
      <Products />
      <Footer/>
    </div>
  )
}

export default Cameras
