import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BestProducts = () => {
  return (
    <div>
      <h2 className='m-3'>Best of Vastoz</h2>
      {/* <div className="row m-3 position-relative top-5">
        <div className="col-sm-4 mb-3 mb-sm-0">
          <div className="card">
            <Image src="/assets/img/pages/cameras-accesories.jpg" className="card-img-top img-fluid" alt="Camera" width={500} height={500}/>
            <div className="card-body">
              <h5 className="card-title">Cameras and Accessories</h5>
              <p className="card-text">Shop with us for the advanced cameras and accessories.</p>
              <Link href="/NonCms/Cameras" className="btn btn-primary">Shop Camera</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <Image src="/assets/img/pages/appliances.jpg" className="card-img-top img-fluid" alt="Appliances" width={500} height={500}/>
            <div className="card-body">
              <h5 className="card-title">Appliances</h5>
              <p className="card-text">Shop with us for the latest appliances.</p>
              <Link href="/NonCms/Appliances" className="btn btn-primary">Shop Appliance</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card"> 
              <Image src="/assets/img/pages/laptopscollections.jpg" className="card-img-top img-fluid" alt="Laptops" width={500} height={100}/>
              <div className="card-body">
                <h5 className="card-title">Laptops</h5>
                <p className="card-text">Shop with us for the advances cameras and accessories.</p>
                <Link href="/NonCms/Laptops" className="btn btn-primary">Shop Laptops</Link>
              </div>
            </div>
        </div>
      </div> */}
      <div className="wrapper">
        <div className='row'>
          <div className="col">
            <div className="card text-center product-card-view M">
              <div className="image"> <img src="/assets/img/pages/cameras/camera-canon-90D.png" width={300} /> </div>
                <div className="about-product text-center">
                  <h3>Canon 90D</h3>
                  <h4>$99.<small>00</small></h4> <button className="btn btn-success buy-now">Buy Now</button>
                </div>
              </div>
          </div>
          <div className="col">
            <div className="card text-center product-card-view M">
              <div className="image"> <img src="/assets/img/pages/cameras/camera-canon-R.png" width={300} /> </div>
                <div className="about-product text-center">
                  <h3>Canon R</h3>
                  <h4>$3999.<small>00</small></h4> <button className="btn btn-success buy-now">Buy Now</button>
                </div>
              </div>
          </div>
          <div className="col">
            <div className="card text-center product-card-view M">
              <div className="image"> <img src="/assets/img/pages/cameras/camera-canon-90D.png" width={300} /> </div>
                <div className="about-product text-center">
                  <h3>Canon 90D</h3>
                  <h4>$99.<small>00</small></h4> <button className="btn btn-success buy-now">Buy Now</button>
                </div>
              </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BestProducts
