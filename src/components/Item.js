import React from "react";
import PropTypes from "prop-types";

function Item(props){
  let stockText = "";
  if(props.stock !== undefined){
    stockText = "Stock: " + props.stock;
  }
  return (
    <React.Fragment>
      <p><strong>{props.itemName}</strong></p>
      <p>{props.description}</p>
      <p>Price: {props.price}</p>
      <p>{stockText}</p>
    </React.Fragment>
  );
}

Item.propTypes ={
  itemName: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  stock: PropTypes.number
}

export default Item;