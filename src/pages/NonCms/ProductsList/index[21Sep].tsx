import React, { useState } from "react";
import Products from "src/pages/api/Products/Product";
import Nav from "./SidebarProducts";
import FilterProduct from "./FilterProduct";

export default function ProductsList() {
  // Initializing the Filters
  let [categoryFilters, setcategoryFilters] = useState(new Set<string>());
  let [priceFilters, setPriceFilters] = useState(new Set<number>());
  let [typeFilters, setTypeFilters] = useState(new Set<string>());

  // Filterering Products
  const filteredProducts =
  
    categoryFilters.size || priceFilters.size || typeFilters.size
      ? Products.filter((product:any) => {
          return (
            (!categoryFilters.size || categoryFilters.has(product.category)) &&
            (!priceFilters.size || priceFilters.has(product.price)) &&
            (!typeFilters.size || typeFilters.has(product.subCategory))
          );
        })
      : Products;

  // Brand Filter
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

  // Price Filter
  function updateFiltersPrice(checked:any, priceFilters:any) {
    if (checked){
      // Price Under $500
      if(priceFilters === 'Under $500'){
        const filteredPrice1 = new Array(500).fill(0).map((_,i) => i );
        filteredPrice1.map((res1:any)=> {
        setPriceFilters((prev1) => new Set(prev1).add(res1));
      })
      }
      // Price $500-1000
      if(priceFilters === '$500-1000'){
        const filteredPrice2 = new Array(1000).fill(500).map((_,i) => i+500 );
      filteredPrice2.map((res2:any)=> {
        setPriceFilters((prev2) => new Set(prev2).add(res2));
      })
      }
      // Price $1000-5000
      if(priceFilters === '$1000-5000'){
        const filteredPrice3 = new Array(5000).fill(1000).map((_,i) => i+1000 );
      filteredPrice3.map((res3:any)=> {
        setPriceFilters((prev3) => new Set(prev3).add(res3));
      })
      }
      // Price $5000-10000
      if(priceFilters === '$5000-10000'){
        const filteredPrice4 = new Array(10000).fill(5000).map((_,i) => i+5000 );
      filteredPrice4.map((res4:any)=> {
        setPriceFilters((prev4) => new Set(prev4).add(res4));
      })
      }
      // Price Over $10000
      if(priceFilters === 'Over $10000'){
        const filteredPrice5 = new Array(15000).fill(10000).map((_,i) => i+10000 );
      filteredPrice5.map((res5:any)=> {
        setPriceFilters((prev5) => new Set(prev5).add(res5));
      })
      }
    }

    
    if (!checked){
      // Price Under $500
      if(priceFilters === 'Under $500'){
      const filteredPrice1 = new Array(500).fill(0).map((_,i) => i );
      filteredPrice1.map((res1:any)=> {
        setPriceFilters((prev1) => {
          const next1 = new Set(prev1);
          next1.delete(res1);
          return next1;
        });
      })
      }
      // Price $500-1000
      if(priceFilters === '$500-1000'){
        const filteredPrice2 = new Array(1000).fill(501).map((_,i) => i+500 );
      filteredPrice2.map((res2:any)=> {
        setPriceFilters((prev2) => {
          const next2 = new Set(prev2);
          next2.delete(res2);
          return next2;
        });
      })
      }
      // Price $1000-5000
      if(priceFilters === '$1000-5000'){
        const filteredPrice3 = new Array(5000).fill(1000).map((_,i) => i+1000 );
      filteredPrice3.map((res3:any)=> {
        setPriceFilters((prev3) => {
          const next3 = new Set(prev3);
          next3.delete(res3);
          return next3;
        });
      })
      }
      // Price $5000-10000
      if(priceFilters === '$5000-10000'){
        const filteredPrice4 = new Array(10000).fill(5000).map((_,i) => i+5000 );
      filteredPrice4.map((res4:any)=> {
        setPriceFilters((prev4) => {
          const next4 = new Set(prev4);
          next4.delete(res4);
          return next4;
        });
      })
      }
      // Price Over $10000
      if(priceFilters === 'Over $10000'){
        const filteredPrice5 = new Array(15000).fill(10000).map((_,i) => i+10000 );
      filteredPrice5.map((res5:any)=> {
        setPriceFilters((prev5) => {
          const next5 = new Set(prev5);
          next5.delete(res5);
          return next5;
        });
      })
      }
    }
   
  }

  // Type Filter
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
    
  return (
    <div>
      <div className="container-fluid mt-1 mb-2">
        <div className="row g-2">
            <Nav updateFilters={updateFilters} updateFiltersPrice={updateFiltersPrice} updateFiltersType={updateFiltersType}/>
            <FilterProduct filteredProducts={filteredProducts}/>
        </div>
      </div>
    </div>
  );
}
