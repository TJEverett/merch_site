import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function Form(props) {

  function handleNewItemSubmit(event) {
    event.preventDefault();
    props.onNewItemCreation({itemName: event.target.itemName.value, description: event.target.description.value, price: parseInt(event.target.price.value), stock: parseInt(event.target.stock.value), id: (props.id || v4())});
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewItemSubmit}>
        <p>Book Name:</p>
        <input
          type="text"
          required
          name="itemName"
          placeholder="Book Name"
          defaultValue={props.itemName || ""} />
        <br/>
        <p>Description: Series, Book #, Format</p>
        <textarea
          name="description"
          required
          placeholder="Series, Book #, Format"
          defaultValue={props.description || ""} />
        <br/>
        <p>Price:</p>
        <input
          type="number"
          name="price"
          min={0}
          step={1}
          required
          placeholder="$$$"
          defaultValue={props.price || ""} />
        <br/>
        <p>Amount in Stock:</p>
        <input
          type="number"
          name="stock"
          min={0}
          step={1}
          required
          placeholder="###"
          defaultValue={props.stock || ""} />
        <br />
        <button type="submit">{props.submitText}</button>
      </form>
    </React.Fragment>
  );
}

Form.propTypes = {
  itemName: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  stock: PropTypes.number,
  id: PropTypes.string,
  submitText: PropTypes.string,
  onNewItemCreation: PropTypes.func
}

export default Form;