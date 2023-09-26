import React, { useState } from 'react'
import ProductItems from '../ProductItems';

const Filters = () => {
    let [counter, setCounter] = useState(0);
    let increment = () => setCounter(++counter);
  return (
    <div className='row g-2'>
        <div className="col-md-3">
                  <div className="price">
                  <div className="heading d-flex justify-content-between align-items-center">
                      <h6 className="text-uppercase">Price</h6>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                      <div className="form-check"> <input className="form-check-input" type="checkbox"  id="flexCheckDefault" onClick={increment}  /> <label className="form-check-label" htmlFor="flexCheckDefault"> 0-100$ </label> </div>
                      <span>3</span> 
                  </div>
                  {/* <div className="d-flex justify-content-between mt-2">
                      <div className="form-check"> <input className="form-check-input" type="checkbox"  id="flexCheckChecked" defaultChecked /> <label className="form-check-label" htmlFor="flexCheckChecked"> 100-200$ </label> </div>
                      <span>4</span> 
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                      <div className="form-check"> <input className="form-check-input" type="checkbox"  id="flexCheckChecked" defaultChecked /> <label className="form-check-label" htmlFor="flexCheckChecked"> 200-300$ </label> </div>
                      <span>14</span> 
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                      <div className="form-check"> <input className="form-check-input" type="checkbox"  id="flexCheckChecked" defaultChecked /> <label className="form-check-label" htmlFor="flexCheckChecked"> 300-400$ </label> </div>
                      <span>8</span> 
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                      <div className="form-check"> <input className="form-check-input" type="checkbox"  id="flexCheckChecked" defaultChecked /> <label className="form-check-label" htmlFor="flexCheckChecked"> 400-500$ </label> </div>
                      <span>14</span> 
                  </div> */}
                </div>

                <div className="brand p-2">
                  <div className="heading d-flex justify-content-between align-items-center">
                      <h6 className="text-uppercase">Brand</h6>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                      <div className="form-check"> <input className="form-check-input" type="checkbox"  id="flexCheckDefault" /> <label className="form-check-label" htmlFor="flexCheckDefault"> Nixon </label> </div>
                      <span>13</span> 
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                      <div className="form-check"> <input className="form-check-input" type="checkbox"  id="flexCheckChecked" defaultChecked /> <label className="form-check-label" htmlFor="flexCheckChecked"> Canon </label> </div>
                      <span>4</span> 
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                      <div className="form-check"> <input className="form-check-input" type="checkbox"  id="flexCheckChecked" defaultChecked /> <label className="form-check-label" htmlFor="flexCheckChecked"> Sony </label> </div>
                      <span>24</span> 
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                      <div className="form-check"> <input className="form-check-input" type="checkbox"  id="flexCheckChecked" defaultChecked /> <label className="form-check-label" htmlFor="flexCheckChecked"> Panasonic </label> </div>
                      <span>18</span> 
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                      <div className="form-check"> <input className="form-check-input" type="checkbox"  id="flexCheckChecked" defaultChecked /> <label className="form-check-label" htmlFor="flexCheckChecked"> Pentax </label> </div>
                      <span>44</span> 
                  </div>
                </div>
                <div className="type p-2 mb-2">
                  <div className="heading d-flex justify-content-between align-items-center">
                      <h6 className="text-uppercase">Type</h6>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                      <div className="form-check"> <input className="form-check-input" type="checkbox" id="flexCheckDefault" /> <label className="form-check-label" htmlFor="flexCheckDefault"> Digital SLR Cameras </label> </div>
                      <span>23</span> 
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                      <div className="form-check"> <input className="form-check-input" type="checkbox"  id="flexCheckChecked" defaultChecked /> <label className="form-check-label" htmlFor="flexCheckChecked"> Action Cameras </label> </div>
                      <span>24</span> 
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                      <div className="form-check"> <input className="form-check-input" type="checkbox"  id="flexCheckChecked" defaultChecked /> <label className="form-check-label" htmlFor="flexCheckChecked"> 360 Cameras </label> </div>
                      <span>14</span> 
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                      <div className="form-check"> <input className="form-check-input" type="checkbox"  id="flexCheckChecked" defaultChecked /> <label className="form-check-label" htmlFor="flexCheckChecked"> Instant Cameras </label> </div>
                      <span>28</span> 
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                      <div className="form-check"> <input className="form-check-input" type="checkbox"  id="flexCheckChecked" defaultChecked /> <label className="form-check-label" htmlFor="flexCheckChecked"> Rugged Cameras </label> </div>
                      <span>44</span> 
                  </div>
                </div>
        </div>
        <ProductItems counterValue={counter} />
    </div>
      
      
  )
}

export default Filters
