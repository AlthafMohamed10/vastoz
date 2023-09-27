import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function FilterProduct(props: any) {
    return (
        <div className="col-md-9">
            <div className="row g-2">
                {props?.filteredProducts?.length === 0 ?
                    <div className="position-fixed text-center top-50 start-50 translate-middle-products fs-4"><i className="bi bi-emoji-frown fs-2"></i><p>Sorry,we could'nt find any results</p></div>
                    :
                    props?.filteredProducts?.map((brandfilter: any, index: any) =>
                        <div className="col-md-4" key={index}>
                            <div className="product py-4">
                                <span className="off bg-success">{brandfilter.discount}</span>
                                <Link href={brandfilter.link} className='text-decoration-none'>
                                    <div className="text-center">
                                        <Image src={brandfilter.image} alt='Product Items' width={200} height={200} />
                                    </div>
                                    <div className="about text-center">
                                        <h5>{brandfilter.name}</h5>
                                        <span>${brandfilter.price}</span>
                                    </div>
                                </Link>
                                <div className="cart-button mt-3 px-2 d-flex justify-content-between align-items-center">
                                    <button className="btn btn-primary text-uppercase add-cart">Add to cart</button>
                                    <div className="add"> <span className="product_fav"><i className="bi bi-heart" /></span> <span className="product_fav"><i className="bi bi-cart" /></span> </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}

export default FilterProduct
