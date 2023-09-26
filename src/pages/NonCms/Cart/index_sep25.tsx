import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../layout/NavBar/navbar';


const Cart = () => {

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const inputRef = useRef(null);
  const inputRef2 = useRef(null);

  function increment() {
    // 👇️ update input value
    
    const updatedCount = count + 1;

    console.log(count);
    console.log(updatedCount);

      setCount(updatedCount)
      inputRef.current.value = count + 1;
  }

  function decrement() {
    // 👇️ update input value
    const updatedCount = count - 1;

    console.log(count);
    console.log(updatedCount);

    if (count !=0) {
    setCount(updatedCount);

    inputRef.current.value = count;
  }
  else {
    setCount(1);
  }
  }

  function increment2() {
    // 👇️ update input value
    
    const updatedCount = count2 + 1;

    console.log(updatedCount);

      setCount2(updatedCount)
      inputRef2.current.value = count2 + 1;
  }

  function decrement2() {
    // 👇️ update input value
    const updatedCount = count2 - 1;

    if (count2 !=0) {
    setCount2(updatedCount);

    inputRef2.current.value = count2;
  }
  else {
    setCount(1);
  }
  }

  return (

<section className="h-100 gradient-custom">
<div>
  <NavBar/>
  </div>
    <div className="container py-5">
      <div className="row d-flex justify-content-center my-4">
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-header py-3">
              <h5 className="mb-0">Cart - 2 items</h5>
            </div>
            <div className="card-body">
              {/* Single item */}
              <div className="row">
                <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                  {/* Image */}
                  <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                    <img src="/assets/img/pages/cameras/camera-nikon-z24.jpg" className="w-100" alt="Nikon z 24" />
                    <a href="#!">
                      <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}} />
                    </a>
                  </div>
                  {/* Image */}
                </div>
                <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                  {/* Data */}
                  <p><strong>Nikon z 24</strong></p>
                  <p>Color: black</p>
                  <p>Size: M</p>
                  <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip" title="Remove item">
                    <i className="bi bi-trash" />
                  </button>
                  <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip" title="Move to the wish list">
                    <i className="bi bi-heart" />
                  </button>
                  {/* Data */}
                </div>
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                  {/* Quantity */}
                  <div className="d-flex mb-4" style={{maxWidth: 300, maxHeight: 38}}>
                    <button className="btn btn-primary px-3 me-2" onClick = {decrement}>
                    {/* onClick="this.parentNode.querySelector('input[type=number]').stepDown()"> */}
                    <i className="bis bi-dash" /> 
                    </button> 
                    <div className="form-outline">
                      <input id="form1" min={0} name="quantity" defaultValue={1} type="number" ref={inputRef}
                    className="form-control" />
                      <label className="form-label" htmlFor="form1">Quantity</label>
                    </div>
                    <button className="btn btn-primary px-3 ms-2" onClick = {increment}>
                      {/* //  onClick={this.parentNode.querySelector('input[type=number]').stepUp()}> + */}
                      <i className="bi bi-plus" />
                    </button>
                  </div>
                  {/* Quantity */}
                  {/* Price */}
                  <p className="text-start text-md-center">
                    <strong>$99</strong>
                  </p>
                  {/* Price */}
                </div>
              </div>
              {/* Single item */}
              <hr className="my-4" />
              {/* Single item */}
              <div className="row">
                <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                  {/* Image */}
                  <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                    <img src="/assets/img/pages/cameras/canon_powershot_v10.jpg" className="w-100" />
                    <a href="#!">
                      <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}} />
                    </a>
                  </div>
                  {/* Image */}
                </div>
                <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                  {/* Data */}
                  <p><strong>Canon Powershot V10</strong></p>
                  <p>Color: black</p>
                  <p>Size: M</p>
                  <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip" title="Remove item">
                    <i className="bi bi-trash" />
                  </button>
                  <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip" title="Move to the wish list">
                   <i className="bi bi-heart" /> 
                  </button>
                  {/* Data */}
                </div>
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                  {/* Quantity */}
                  <div className="d-flex mb-4" style={{maxWidth: 300, maxHeight: 38}}>
                    <button className="btn btn-primary px-3 me-2" onClick = {decrement2}>
                      {/* onClick="this.parentNode.querySelector('input[type=number]').stepDown()"> */}
                      <i className="bi bi-dash" /> 
                    </button>
                    <div className="form-outline">
                      <input id="form1" min={0} name="quantity" defaultValue={1} type="number" className="form-control" ref = {inputRef2}/>
                      <label className="form-label" htmlFor="form1">Quantity</label>
                    </div>
                    <button className="btn btn-primary px-3 ms-2" onClick = {increment2}>
                     {/* onClick="this.parentNode.querySelector('input[type=number]').stepUp()" */}
                      <i className="bi bi-plus" />
                    </button>
                  </div>
                  {/* Quantity */}
                  {/* Price */}
                  <p className="text-start text-md-center">
                    <strong>$1999.99</strong>
                  </p>
                  {/* Price */}
                </div>
              </div>
              {/* Single item */}
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-body">
              <p><strong>Expected shipping delivery</strong></p>
              <p className="mb-0">12.10.2023 - 14.10.2023</p>
            </div>
          </div>
          <div className="card mb-4 mb-lg-0">
            <div className="card-body">
              <p><strong>We accept</strong></p>
              <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg" alt="Visa" />
              <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg" alt="American Express" />
              <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg" alt="Mastercard" />
              <img className="me-2" width="45px" height="30px" src="https://toppng.com/uploads/preview/paypal-logo-vector-115742476164ihbermd1x.png" alt="PayPal acceptance mark" />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-header py-3">
              <h5 className="mb-0">Summary</h5>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products
                  <span>$53.98</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                  Shipping
                  <span>Gratis</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p className="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span><strong>$53.98</strong></span>
                </li>
              </ul>
            </div>
            <button type="button" className="btn btn-primary btn-sm btn-block"> 
              <h6>GO TO CHECKOUT</h6>
              </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Cart

