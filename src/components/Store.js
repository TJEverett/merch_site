import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import CustomButton from "./CustomButton";

function Store(props){
  const columnCount = 3;
  const rowCount = Math.ceil(Object.keys(props.itemList).length / columnCount);
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
        {Object.values(props.itemList).map((item) =>
          <div style={itemBoxStyle} key={item.id}>
            <Item itemName={item.itemName}
            price={item.price}
            key={item.id} />
            <CustomButton whenClicked={() => props.itemSelect(item.id)}
            disabledState={false}
            buttonText="View Details" />
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

Store.propTypes = {
  itemList: PropTypes.object,
  itemSelect: PropTypes.func
}

export default Store;