import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

function Store(props){
  const columnCount = 3;
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
  return(
    <React.Fragment>
      <h2>Store Page</h2>
      <div style={gridStyle}>
        {props.itemList.map((item, index) =>
          <div style={itemBoxStyle}>
            <Item itemName={item.itemName}
            description={item.description}
            price={item.price}
            stock={item.stock}
            key={item.id} />
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

Store.propTypes = {
  itemList: PropTypes.array
}

export default Store;