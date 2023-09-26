import React from 'react'
import ProductsList from '../ProductsList'
// import Filters from './Filters'
// import ProductItems from './ProductItems'
// import ProductsDemo from '../ProductsDemo'

const Products = () => {
  return (
    <div>
      <div className="container-fluid mt-3 mb-5">
          <div className="row g-2">
            {/* <Filters/>
            <ProductItems/> */}
            <ProductsList/>
          </div>
      </div>
    </div>
  )
}

export default Products
