import React, { useEffect, useState } from "react";
import Products from "src/pages/api/Products/Product";
import Nav from "./SidebarProducts";
import FilterProduct from "./FilterProduct";
import { ProgressBar } from "@components/ProgressBar";
import { faker } from "@faker-js/faker";

export default function ProductsList() {
  // Initializing the Filters
  let [categoryFilters, setcategoryFilters] = useState(new Set<string>());
  let [priceFilters, setPriceFilters] = useState(new Set<number>());
  let [typeFilters, setTypeFilters] = useState(new Set<string>());

  useEffect(() => {
    setTimeout(() => {
      <ProgressBar />
    }, 1000);
  }, [updateFiltersPrice])

  // Filterering Products
  const filteredProducts =

    categoryFilters.size || priceFilters.size || typeFilters.size
      ? Products.filter((product: any) => {
        return (
          (!categoryFilters.size || categoryFilters.has(product.category)) &&
          (!priceFilters.size || priceFilters.has(product.price)) &&
          (!typeFilters.size || typeFilters.has(product.subCategory))
        );
      })
      : Products;


  // Brand Filter
  function updateFilters(checked: any, categoryFilter: any) {
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
  async function updateFiltersPrice(checked: any, priceFilters: any) {
    if (checked) {
      // const data = new Array(10000).fill().map((value, index) => ({ id: index, title: faker.lorem.words(5), body: faker.lorem.sentences(4) }));
      // console.log(data);

      if (priceFilters === 'Under $500') {
        const filteredPrice = new Array(500).fill(0).map((_, i) => i);
        filteredPrice.map((res: any) => {
          setPriceFilters((prev) => new Set(prev).add(res));
        })
        await Promise.all(filteredPrice);
      }
      if (priceFilters === '$500-1000') {
        const filteredPrice = new Array(1000).fill(500).map((_, i) => i + 500);
        filteredPrice.map((res: any) => {
          setPriceFilters((prev) => new Set(prev).add(res));
        })
        await Promise.all(filteredPrice);
      }
      if (priceFilters === '$1000-5000') {
        //   const data = new Array(1000).fill(0).map((value, index) => ({ id: index, title: faker.lorem.words(5), body: faker.lorem.sentences(4) }));
        // console.log(data);
        const filteredPrice = new Array(2000).fill(1000).map((_, i) => i + 1000);

        filteredPrice.map((res: any) => {
          setPriceFilters((prev) => new Set(prev).add(res));
        })
        await Promise.all(filteredPrice);

      }
      if (priceFilters === '$5000-10000') {
        const filteredPrice = new Array(10000).fill(5000).map((_, i) => i + 5000);
        filteredPrice.map((res: any) => {
          setPriceFilters((prev) => new Set(prev).add(res));
        })
        await Promise.all(filteredPrice);
      }
      if (priceFilters === 'Over $10000') {
        const filteredPrice = new Array(10500).fill(10000).map((_, i) => i + 10000);
        filteredPrice.map((res: any) => {
          setPriceFilters((prev) => new Set(prev).add(res));
        })
        await Promise.all(filteredPrice);
      }
      // priceFilters = filteredPrice
    }


    if (!checked) {
      if (priceFilters === 'Under $500') {
        const filteredPrice = new Array(500).fill(0).map((_, i) => i);
        filteredPrice.map((res: any) => {
          setPriceFilters((prev) => {
            const next = new Set(prev);
            next.delete(res);
            return next;
          });
        })
        await Promise.all(filteredPrice);
      }
      if (priceFilters === '$500-1000') {
        const filteredPrice = new Array(1000).fill(501).map((_, i) => i + 500);
        filteredPrice.map((res: any) => {
          setPriceFilters((prev) => {
            const next = new Set(prev);
            next.delete(res);
            return next;
          });
        })
        await Promise.all(filteredPrice);
      }
      if (priceFilters === '$1000-5000') {
        const filteredPrice = new Array(5000).fill(1000).map((_, i) => i + 1000);
        filteredPrice.map((res: any) => {
          setPriceFilters((prev) => {
            const next = new Set(prev);
            next.delete(res);
            return next;
          });
        })
        await Promise.all(filteredPrice);
      }
      if (priceFilters === '$5000-10000') {
        const filteredPrice = new Array(10000).fill(5000).map((_, i) => i + 5000);
        filteredPrice.map((res: any) => {
          setPriceFilters((prev) => {
            const next = new Set(prev);
            next.delete(res);
            return next;
          });
        })
        await Promise.all(filteredPrice);
      }
      if (priceFilters === 'Over $10000') {
        const filteredPrice = new Array(10500).fill(10000).map((_, i) => i + 10000);
        filteredPrice.map((res: any) => {
          setPriceFilters((prev) => {
            const next = new Set(prev);
            next.delete(res);
            return next;
          });
        })
        await Promise.all(filteredPrice);
      }
    }

  }

  // Type Filter
  function updateFiltersType(checked: any, typeFilters: any) {
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
          <Nav updateFilters={updateFilters} updateFiltersPrice={updateFiltersPrice} updateFiltersType={updateFiltersType} />
          {/* <FilterProduct filteredProducts={filteredProducts}/> */}
        </div>
      </div>
    </div>
  );
}
