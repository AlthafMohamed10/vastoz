import React from 'react'
import BrandFilter from 'src/pages/api/Products/Brand'
import PriceFilter from 'src/pages/api/Products/PriceFilter'
import TypeFilter from 'src/pages/api/Products/TypeFilter'

const Filters = () => {
  return (
      <div className="col-md-3">
                  <div className="price mb-2 p-2">
                  <div className="heading d-flex justify-content-between align-items-center">
                      <h6 className="text-uppercase">Price</h6>
                  </div>
                  {PriceFilter.map((pricefilter,index) => 
                  <div className="d-flex justify-content-between mt-2">
                      <div className="form-check"> <input className="form-check-input" type="checkbox"  id="flexCheckDefault" /> <label className="form-check-label" htmlFor="flexCheckDefault"> {pricefilter.pricerange} </label> </div>
                      <span>{pricefilter.filtercount}</span> 
                  </div>
                  
                  )}
                </div>

                <div className="brand p-2 mb-2">
                  <div className="heading d-flex justify-content-between align-items-center">
                      <h6 className="text-uppercase">Brand</h6>
                  </div>
                  {BrandFilter.map((brandfilter,index) => 
                  <div className="d-flex justify-content-between mt-2">
                      <div className="form-check"> <input className="form-check-input" type="checkbox"  id="flexCheckDefault" /> <label className="form-check-label" htmlFor="flexCheckDefault"> {brandfilter.name} </label> </div>
                      <span>{brandfilter.filtercount}</span> 
                  </div>
                  )}
                </div>

                <div className="type p-2 mb-2">
                  <div className="heading d-flex justify-content-between align-items-center">
                      <h6 className="text-uppercase">Type</h6>
                  </div>
                  {TypeFilter.map((typefilter,index) => 
                  <div className="d-flex justify-content-between mt-2">
                  <div className="form-check"> <input className="form-check-input" type="checkbox"  id="flexCheckChecked" /> <label className="form-check-label" htmlFor="flexCheckChecked"> {typefilter.name} </label> </div>
                  <span>{typefilter.filtercount}</span> 
                 </div>
                  )}
                </div>
      </div>
  )
}

export default Filters
