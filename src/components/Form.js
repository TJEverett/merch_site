import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function Form(props) {

  function handleNewItemSubmit(event) {
    event.preventDefault();
    props.onNewItemCreation({itemName: event.target.itemName.value, description: event.target.description.value, price: event.target.price.value, stock: event.target.stock.value, id: v4()});
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewItemSubmit}>
        <input
          type="text"
          name="itemName"
          placeholder="Book Name" />
        <br/>
        <textarea
          name="description"
          placeholder="Series, Book #, format" />
        <br />
        <input
          type="number"
          name="price"
          placeholder="$$$" />
        <br />
        <input
          type="number"
          name="stock"
          placeholder="###" />
        <br />
        <button type="submit">Add New Item</button>
      </form>
    </React.Fragment>
  );
}

Form.propTypes = {
  onNewItemCreation: PropTypes.func
}

export default Form;