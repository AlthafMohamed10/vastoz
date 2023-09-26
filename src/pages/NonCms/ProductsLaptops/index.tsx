import React, { useState } from 'react'
import ProductItems from './ProductItems'
import Products from 'src/pages/api/Products/Product';
import FiltersLaptops from './Filters';

const ProductsLaptops = () => {
  const [item, setItem] = useState(Products);

  const menuItems = [new Set(Products.map((Val) => Val.category))];
  console.log(menuItems);

  const filterItem = (curcat: any) => {
    const newItem = Products.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);

  };
  return (
    <div>
      <div className="container-fluid mt-5 mb-5">
        <div className="row g-2">
          <FiltersLaptops
            filterItem={filterItem}
          // setItem={setItem}
          // menuItems={menuItems}
          />
          <ProductItems item={item} />
        </div>
      </div>
    </div>
  )
}

export default ProductsLaptops
