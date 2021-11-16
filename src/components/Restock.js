import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import Form from "./Form";

function Restock(props) {
  const columnCount = 2;
  const rowCount = Math.ceil(props.itemList.length / columnCount);
  const cellSpacing = "1fr ";
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: (cellSpacing.repeat(columnCount)),
    gridTemplateRows: (cellSpacing.repeat(rowCount))
  };
  const itemBoxStyle = {
    margin: "5px",
    borderRadius: "45px",
    padding: "20px",
    border: "5px solid goldenRod"
  }
  return (
    <React.Fragment>
      <h2>Restock Page</h2>
      <div style={gridStyle}>
        <div style={gridStyle}>
          {props.itemList.map((item, index) =>
            <div style={itemBoxStyle}>
              <Item itemName={item.itemName}
                description={item.description}
                price={item.price}
                stock={item.stock}
                key={index} />
            </div>
          )}
        </div>
        <div style={itemBoxStyle}>
          <Form />
        </div>
      </div>
    </React.Fragment>
  );
}

Restock.propTypes = {
  itemList: PropTypes.array
}

export default Restock;