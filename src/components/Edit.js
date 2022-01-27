import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import Form from "./Form";

function Edit(props) {
  const cellSpacing = "1fr ";
  const gridTwoOneStyle = {
    display: "grid",
    gridTemplateColumns: (cellSpacing.repeat(2)),
    gridTemplateRows: (cellSpacing.repeat(1))
  };
  const itemBoxStyle = {
    margin: "5px",
    borderRadius: "45px",
    padding: "20px",
    border: "5px solid goldenRod"
  };

  return (
    <React.Fragment>
      <h2>Edit View</h2>
      <div style={gridTwoOneStyle}>
        <div style={itemBoxStyle}>
          <Item itemName={props.item.itemName}
            description={props.item.description}
            price={props.item.price}
            stock={props.item.stock}/>
        </div>
        <div style={itemBoxStyle}>
          <Form itemName={props.item.itemName}
            description={props.item.description}
            price={props.item.price}
            stock={props.item.stock}
            id={props.item.id}
            submitText="Edit Item"
            onNewItemCreation={props.editFunction} /> 
        </div>
      </div>
    </React.Fragment>
  );
}

Edit.propTypes = {
  item: PropTypes.object,
  editFunction: PropTypes.func
}

export default Edit;