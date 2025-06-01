import React from "react";
import Product from "./Product";
import "./ProductList.css";

function ProductList() {
  return (
    <>
    
      <div className="ProductList">
        <Product title={"Logitech MX master"} idx={0} />
        <Product title={"Logitech MX master"} idx={1}/>
        <Product title={"Logitech MX master"} idx={2}/>
        <Product title={"Logitech MX master"} idx={3}/>
      </div>
    </>
  );
}

export default ProductList;
