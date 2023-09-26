import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Products from "src/pages/api/Products/Product";

export default function ProductsDemo() {
  const BrandFilter = [
    'Nikon',
    'Canon'
  ];
  const PriceFilter = [
    1999.99,
    123.43,
    75,
    3999.99,
    99.99,
    999.99
  ];
  const TypeFilter = [
    "Digital SLR Cameras",
    "Action Cameras"
  ]
  let [categoryFilters, setcategoryFilters] = useState(new Set<string>());
  let [priceFilters, setPriceFilters] = useState(new Set<string>());
  let [typeFilters, setTypeFilters] = useState(new Set<string>());

  const filteredProducts =
    categoryFilters.size || priceFilters.size || typeFilters.size
      ? Products.filter((product:any) => {
          console.log("filtering", product);
          return (
            (!categoryFilters.size || categoryFilters.has(product.category)) &&
            (!priceFilters.size || priceFilters.has(product.price)) &&
            (!typeFilters.size || typeFilters.has(product.subCategory))
          );
        })
      : Products;
  function updateFilters(checked:any, categoryFilter:any) {
    if (checked)
      setcategoryFilters((prev) => new Set(prev).add(categoryFilter));
    if (!checked)
      setcategoryFilters((prev) => {
        const next = new Set(prev);
        next.delete(categoryFilter);
        return next;
      });
  }
  function updateFiltersPrice(checked:any, priceFilters:any) {
    if (checked)
    setPriceFilters((prev) => new Set(prev).add(priceFilters));
    if (!checked)
    setPriceFilters((prev) => {
        const next = new Set(prev);
        next.delete(priceFilters);
        return next;
      });
  }
  function updateFiltersType(checked:any, typeFilters:any) {
    if (checked)
      setTypeFilters((prev) => new Set(prev).add(typeFilters));
    if (!checked)
      setTypeFilters((prev) => {
        const next = new Set(prev);
        next.delete(typeFilters);
        return next;
      });
  }
    
  // };
  return (
    <div>
      <div className="container-fluid mt-5 mb-5">
        <div className="row g-2">
            <div className="col-md-3">
              <div className="brand p-2">
                  <div className="heading d-flex justify-content-between align-items-center">
                    <h6 className="text-uppercase">Brand</h6>
                  </div>
                  {BrandFilter.map((elm, index) => {
                  return (
                  <div className="form-check ms-2" key={index}>
                    <label className="form-check-label">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        onChange={(e) => updateFilters(e.target.checked, elm)}
                    />
                    {elm}
                    </label>
                  </div>
                  );
                  })}
              </div>
              <div className="brand p-2">
                  <div className="heading d-flex justify-content-between align-items-center">
                    <h6 className="text-uppercase">Price</h6>
                  </div>
                  {PriceFilter.map((elm2:any, index) => {
                  return (
                  <div className="form-check ms-2" key={index}>
                    <label className="form-check-label">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        onChange={(e2) => updateFiltersPrice(e2.target.checked, elm2)}
                    />
                    ${elm2}
                    </label>
                  </div>
                  );
                  })}
              </div>
              <div className="brand p-2">
                  <div className="heading d-flex justify-content-between align-items-center">
                    <h6 className="text-uppercase">Type</h6>
                  </div>
                  {TypeFilter.map((elm:any, index) => {
                  return (
                  <div className="form-check ms-2" key={index}>
                    <label className="form-check-label">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        onChange={(e) => updateFiltersType(e.target.checked, elm)}
                    />
                    ${elm}
                    </label>
                  </div>
                  );
                  })}
              </div>
            </div>
        <div className="col-md-9">
            <div className="row g-2">
              {filteredProducts.map((brandfilter:any,index) => 
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
                        <button className="btn btn-primary text-uppercase">Add to cart</button> 
                        <div className="add"> <span className="product_fav"><i className="bi bi-heart" /></span> <span className="product_fav"><i className="bi bi-cart" /></span> </div>
                    </div>
                  </div>
              </div>
              )}
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}
