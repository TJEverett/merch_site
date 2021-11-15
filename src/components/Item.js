import React from "react";
import PropTypes from "prop-types";

function Item(props){
  let button = <button disabled>Out of Stock</button>;
  if (props.stock > 0){
    button = <button>Order</button>;
  };
  return (
    <React.Fragment>
      <p><strong>{props.itemName}</strong></p>
      <p>{props.description}</p>
      <p>Price: {props.price}</p>
      {button}
    </React.Fragment>
  )
}

Item.propTypes ={
  itemName: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  stock: PropTypes.number
}

export default Item;