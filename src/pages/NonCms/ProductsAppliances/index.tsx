import React, { useState } from 'react'
import Filters from './Filters'
import ProductItems from './ProductItems'
import Products from 'src/pages/api/Products/Product'

const ProductsAppliances = () => {
  let [counter, setCounter] = useState(0);
  // let increment = () => setCounter(++counter);
  return (
    <div>
      <div className="container-fluid mt-5 mb-5">
      {/* <button onClick={increment}>Increment Counter</button> */}
          {/* <div className="row g-2"> */}
            {/* <Filters dataItems={Products} /> */}
            <Filters />
            {/* <ProductItems counterValue={counter} /> */}
          {/* </div> */}
      </div>
    </div>
  )
}

export default ProductsAppliances
