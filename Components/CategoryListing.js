import React from "react";
import Card from "./Card";

function CategoryListing(props) {
  const deleteBtnHandler = (e) => {
    props.deleteBtnHandler(e.target.id);
  };
  return (
    <Card className="card">
      <ul key={props.productData.Category}>
        <li key={props.productData.ID}>
          {`Name: ${props.productData.Name} Price: ${props.productData.Price} Category: ${props.productData.Category}`}
          <button onClick={deleteBtnHandler} id={props.productData.ID}>
            Delete
          </button>
        </li>
      </ul>
    </Card>
  );
}
export default CategoryListing;
