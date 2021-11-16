import React from "react";

function Form() {

  function handleNewItemSubmit(event) {
    event.preventDefault();
    console.log(event.target.itemName.value);
    console.log(event.target.description.value);
    console.log(event.target.price.value);
    console.log(event.target.stock.value);
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

export default Form;