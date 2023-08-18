import React, { useRef } from "react";
import Card from "./Card";

function ProductsForm(props) {
  const productIDRef = useRef();
  const priceRef = useRef();
  const productNameRef = useRef();
  const categoryRef = useRef();

  const addProductBtnHandler = (e) => {
    e.preventDefault();
    const enteredID = productIDRef.current.value;
    const enteredPrice = priceRef.current.value;
    const enteredName = productNameRef.current.value;
    const enteredCategory = categoryRef.current.value;

    const newProductData = {
      ID: enteredID,
      Name: enteredName,
      Price: enteredPrice,
      Category: enteredCategory,
    };

    props.onAddProductData(newProductData);
    localStorage.setItem(enteredID, JSON.stringify(newProductData));

    productIDRef.current.value = "";
    priceRef.current.value = "";
    productNameRef.current.value = "";
    categoryRef.current.value = "";
  };
  return (
    <Card className="card">
      <form className="form">
        <label htmlFor="id">Product ID:</label>
        <input type="number" id="id" ref={productIDRef} />
        <label htmlFor="amt">Selling Price: Rs</label>
        <input type="number" id="amt" ref={priceRef} />
        <label htmlFor="productName">Product Name:</label>
        <input type="text" id="productName" ref={productNameRef} />
        <label htmlFor="category">Choose a Category:</label>
        <select id="category" ref={categoryRef}>
          <option>Electronics</option>
          <option>Food</option>
          <option>Skincare</option>
        </select>
        <button id="addBtn" onClick={addProductBtnHandler}>
          Add Product
        </button>
      </form>
    </Card>
  );
}

export default ProductsForm;
