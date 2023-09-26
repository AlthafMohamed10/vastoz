import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <footer className="row row-cols-1 row-cols-sm-12 row-cols-md-5 px-5 py-5 border-top footer-bg">
            <div className='col-md-9 mb-3'>
                <div className='row'>
                    <div className="col mb-3">
                        <h6 className='text-uppercase'>About</h6>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-white footer-link">About us</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-white footer-link">Careers</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-white footer-link">Contact us</Link></li>
                        </ul>
                    </div>
                    <div className="col mb-3">
                        <h6 className='text-uppercase'>Account</h6>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-white footer-link">Buyer</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-white footer-link">Seller</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-white footer-link">Become Seller</Link></li>
                        </ul>
                    </div>
                    <div className="col mb-3">
                        <h6 className='text-uppercase'>Privacy & Terms</h6>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-white footer-link">Privacy</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-white footer-link">Terms</Link></li>
                        </ul>
                    </div>
                    <div className="col mb-3">
                        <h6 className='text-uppercase'>Studios</h6>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-white footer-link">Studios</Link></li>
                        </ul>
                    </div>
                    <div className="col mb-3">
                        <h6 className='text-uppercase'>Shop</h6>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-white footer-link">Shop us</Link></li>
                        </ul>
                    </div>
                    <div className="col mb-3">
                        <h6 className='text-uppercase'>Help</h6>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-white footer-link">Customer 24/7 Support</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-md-3 mb-3'>
                <div className="row">
                    <div className='col mb-3'>
                    <div className="content">
                        <h4 className='mb-3'>SUBSCRIBE NOW</h4>
                        <h6 className="content-tuned">Send me exclusive offers, promotions, and tips for shopping and selling on Vastoz</h6>
                        <div className="input-group">
                            <input type="email" className="form-control footer-form" placeholder="Enter email to subscribe" />
                            <span className="input-group-btn">
                            <button className="btn btn-dark footer-btn" type="submit"><i className="bi bi-send"></i></button>
                            </span>
                        </div>
                        <div className="text-center">
                            <Link className="unsubscribe-link" href="#">Would you like to unsubscribe?</Link>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
            <div className='col-md-9'>
                <div className="row">
                    <div className="col mb-3">
                        <div className="me-5">
                            <span><i className="bi bi-c-square me-2 fs-5 position-relative copyrights"></i>2023 Vastoz</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-3'>
                <div className="row">
                    <div className="col mb-3">
                    <h6 className='text-uppercase'>Follow us</h6>
                        <Link href="#" className="text-white me-4">
                            <i className="bi bi-facebook social-link"></i>
                        </Link>
                        <Link href="#" className="text-white me-4">
                            <i className="bi bi-twitter-x social-link"></i>
                        </Link>
                        <Link href="#" className="text-white me-4">
                            <i className="bi bi-google social-link" />
                        </Link>
                        <Link href="#" className="text-white me-4">
                            <i className="bi bi-instagram social-link"></i>
                        </Link>
                        <Link href="#" className="text-white me-4">
                        <i className="bi bi-linkedin social-link"></i>
                        </Link>
                        <Link href="#" className="text-white me-4">
                            <i className="bi bi-github social-link"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    </>
  )
}

export default Footer
