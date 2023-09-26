import React from 'react'
// import Breadcrumb from '../Breadcrumb/Breadcrumb'
// import ProductsList from '../ProductsList'
import Products from '../Products'
import NavBar from '../layout/NavBar/navbar'
import Footer from '../layout/Footer'
// import ProductsAppliances from '../ProductsAppliances'

const Appliances = () => {
  return (
    // <div>
    //   <Breadcrumb/>
    //   <h2>Appliances</h2>
    //   {/* <ProductsAppliances /> */}
    //   <ProductsList />
    // </div>
    <div className='mt-0'>
      {/* <Breadcrumb/> */}
      <NavBar/>
      <div className='mt-3 ms-3'>
      <h3>Appliances</h3>
      </div>
      <Products />
      <Footer/>
    </div>
  )
}

export default Appliances
