import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
// import ProductsDemo from '../ProductsDemo'
import ProductsList from '../ProductsList'
import Products from '../Products'
import NavBar from '../layout/NavBar/navbar'
import Footer from '../layout/Footer'
// import ProductsLaptops from '../ProductsLaptops'

const Laptops = () => {
  return (
    // <div>
    //   <Breadcrumb/>
    //   <h3>Laptops</h3>
    //   {/* <ProductsLaptops /> */}
    //   {/* <ProductsDemo/> */}
    //   <ProductsList />
    // </div>
    <div className='mt-0'>
      {/* <Breadcrumb/> */}
      <NavBar/>
      <div className='mt-3 ms-3'>
      <h3>Laptops</h3>
      </div>
      <Products />
      <Footer/>
    </div>
  )
}

export default Laptops
