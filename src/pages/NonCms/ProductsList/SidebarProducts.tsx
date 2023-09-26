import React from "react";
import BrandFilter from "src/pages/api/Products/Brand";
import PriceFilter from "src/pages/api/Products/PriceFilter";
import TypeFilter from "src/pages/api/Products/TypeFilter";

function Nav(props:any) {
  return (
    <div className="col-md-3 border-end">
      <div className="brand p-2">
          <div className="heading d-flex justify-content-between align-items-center">
            <h6 className="text-uppercase">Brand</h6>
          </div>
          {BrandFilter.map((elm:any, index) => {
                        
            return (
            <div className="form-check ms-2" key={index}>
              <label className="form-check-label cursor-pointer">
              <input
                  className="form-check-input cursor-pointer"
                  type="checkbox"
                  onChange={(e) => props.updateFilters(e.target.checked, elm.name)}
              />
              {elm.name}
              </label>
            </div>
            );
          })}
      </div>
      <div className="brand p-2">
          <div className="heading d-flex justify-content-between align-items-center">
            <h6 className="text-uppercase">Price</h6>
          </div>
          {PriceFilter.map((elm:any, index) => {
          return (
          <div className="form-check ms-2" key={index}>
            <label className="form-check-label cursor-pointer">
            <input
                className="form-check-input cursor-pointer"
                type="checkbox"
                onChange={(e) => props.updateFiltersPrice(e.target.checked, elm.pricerange)}
            />
            {elm.pricerange}
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
            <label className="form-check-label cursor-pointer">
            <input
                className="form-check-input cursor-pointer"
                type="checkbox"
                onChange={(e) => props.updateFiltersType(e.target.checked, elm.name)}
            />
            {elm.name}
            </label>
          </div>
          );
          })}
      </div>
    </div>
  );
}

export default Nav
