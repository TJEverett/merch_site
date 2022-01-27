import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import Form from "./Form";
import CustomButton from "./CustomButton";

function Restock(props) {
  const columnCount = 2;
  const rowCount = Math.ceil(props.itemList.length / columnCount);
  const cellSpacing = "1fr ";
  const gridTwoOneStyle = {
    display: "grid",
    gridTemplateColumns: (cellSpacing.repeat(2)),
    gridTemplateRows: (cellSpacing.repeat(1))
  };
  const itemGridStyle = {
    display: "grid",
    gridTemplateColumns: (cellSpacing.repeat(columnCount)),
    gridTemplateRows: (cellSpacing.repeat(rowCount))
  };
  const itemBoxStyle = {
    margin: "5px",
    borderRadius: "45px",
    padding: "20px",
    border: "5px solid goldenRod"
  };
  return (
    <React.Fragment>
      <h2>Restock Page</h2>
      <div style={gridTwoOneStyle}>
        <div style={itemGridStyle}>
          {props.itemList.map((item) =>
            <div style={itemBoxStyle} key={item.id}>
              <Item itemName={item.itemName}
                price={item.price}
                stock={item.stock} />
              <CustomButton whenClicked={() => props.itemSelect(item.id)}
                disabledState={false}
                buttonText="Edit Details" />
            </div>
          )}
        </div>
        <div style={itemBoxStyle}>
          <Form onNewItemCreation={props.formFunction}
            submitText="Add New Item"  />
        </div>
      </div>
    </React.Fragment>
  );
}

Restock.propTypes = {
  itemList: PropTypes.array,
  formFunction: PropTypes.func,
  itemSelect: PropTypes.func
}

export default Restock;