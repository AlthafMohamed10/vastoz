import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Products from 'src/pages/api/Products/Product'

const ProductItems = () => {
    
  return (
      <div className="col-md-9">
                <div className="row g-2">
                    {Products.map((product,index) =>
                      <div className="col-md-4" key={index}>
                          <div className="product py-4">
                              <span className="off bg-success">{product.discount}</span> 
                              <Link href={product.link} className='text-decoration-none'>
                                <div className="text-center"> 
                                  <Image src={product.image} alt='Product Items' width={200} height={200} />
                                </div>
                                <div className="about text-center">
                                    <h5>{product.name}</h5>
                                    <span>${product.price}</span> 
                                </div>
                              </Link>
                            <div className="cart-button mt-3 px-2 d-flex justify-content-between align-items-center">
                                <button className="btn btn-primary text-uppercase">Add to cart</button> 
                                <div className="add"> <span className="product_fav"><i className="bi bi-heart" /></span> <span className="product_fav"><i className="bi bi-cart" /></span> </div>
                            </div>
                          </div> 
                      </div>
                    )}
                </div>
      </div>
    
  )
}

export default ProductItems
