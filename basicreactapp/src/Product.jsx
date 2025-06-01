import React from "react";
import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {
  let oldPrices = ["$100", "$200", "$300", "$400"];
  let newPrices = ["$800", "$900", "$700", "$400"];
  let descriptions = [
    ["this is first", "this is first"],
    ["this is first", "this is first"],
    ["this is first", "this is first"],
    ["this is first", "this is first"],
  ];
  return (
    <>
      <div className="Product">
        <p style={{ fontWeight: "bolder" }}>{title}</p>

        <p>{descriptions[idx][0]}</p>
        <p>{descriptions[idx][1]}</p>

        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
      </div>
    </>
  );
}

export default Product;
