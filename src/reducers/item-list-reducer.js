export default (state = {}, action) => {
  const { itemName, description, price, stock, id } = action;
  switch(action.type){
    case "ADD_ITEM":
      return Object.assign({}, state, {
        [id]: {
          itemName: itemName,
          description: description,
          price: price,
          stock: stock,
          id: id
        }
      });
    case "DELETE_ITEM":
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
}