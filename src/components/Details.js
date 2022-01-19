import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import CustomButton from "./CustomButton";

function Details(props){
  // button logic
  let currentButton = null;
  if(props.item.stock > 0){
    currentButton = <CustomButton whenClicked={() => props.buttonOrder(1, props.item.id)}
      disabledState={false}
      buttonText="Order 1" />;
  } else {
    currentButton = <CustomButton whenClicked={() => props.buttonOrder(0, props.item.id)}
      disabledState={true}
      buttonText="Out of Stock" />;
  }

  // CSS logic
  const itemBoxStyle = {
    margin: "5px",
    borderRadius: "45px",
    padding: "20px",
    border: "5px solid goldenRod"
  }

  return (
    <React.Fragment>
      <h2>Details View</h2>
      <div style={itemBoxStyle}>
        <Item itemName={props.item.itemName}
          price={props.item.price}
          description={props.item.description}
          key={props.item.id} />
        {currentButton}
      </div>
    </React.Fragment>
  );
}

Details.propTypes = {
  item: PropTypes.object,
  buttonOrder: PropTypes.func
}

export default Details;