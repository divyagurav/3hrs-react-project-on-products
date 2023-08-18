import "./App.css";
import ProductsForm from "./Components/ProductsForm";

import Card from "./Components/Card";
import { useEffect, useState } from "react";
import ProductList from "./Components/ProductList";

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const keys = Object.keys(localStorage);
    let storedProductList = [];
    for (let i = 0; i < keys.length; i++) {
      storedProductList = [
        ...storedProductList,
        JSON.parse(localStorage.getItem(keys[i])),
      ];
    }
    console.log(storedProductList);
    setProductList(() => {
      return storedProductList;
    });
  }, []);

  const onProductDataHandler = (newProductData) => {
    setProductList((prevProductList) => {
      const updatedProductData = [
        ...prevProductList,
        {
          ID: newProductData.ID,
          Price: newProductData.Price,
          Name: newProductData.Name,
          Category: newProductData.Category,
        },
      ];
      return updatedProductData;
    });
  };

  const deleteBtnHandler = (btnID) => {
    localStorage.removeItem(btnID);
    setProductList((prevProductList) => {
      const updatedProductData = prevProductList.filter((item) => {
        return item.ID !== btnID;
      });
      return updatedProductData;
    });
  };

  return (
    <Card className="App">
      <ProductsForm onAddProductData={onProductDataHandler} />
      <ProductList
        productList={productList}
        deleteBtnHandler={deleteBtnHandler}
      />
    </Card>
  );
}

export default App;
