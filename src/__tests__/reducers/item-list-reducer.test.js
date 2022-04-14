import itemListReducer from "../../reducers/item-list-reducer";

describe("itemListReducer", () => {

  const currentState = {
    1: {
      itemName: "Way of Kings",
      description: "Stormlight Archives, Book 1, Hardback",
      price: 200,
      stock: 4,
      id: 1
    },
    2: {
      itemName: "The Final Empire",
      description: "Mistborn Era 1, Book 1, LeatherBound",
      price: 250,
      stock: 2,
      id: 1
    }
  }
  let action;
  const itemData = {
    itemName: "Way of Kings",
    description: "Stormlight Archives, Book 1, Hardback",
    price: 200,
    stock: 4,
    id: 1
  }

  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(itemListReducer({}, { type: null })).toEqual({});
  });

  test("Should successfully add a new item to masterItemList", () => {
    const { itemName, description, price, stock, id } = itemData;
    action = {
      type: "ADD_ITEM",
      itemName: itemName,
      description: description,
      price: price,
      stock: stock,
      id: id
    };
    expect(itemListReducer({}, action)).toEqual({
      [id]: {
        itemName: itemName,
        description: description,
        price: price,
        stock: stock,
        id: id
      }
    });
  });

  test("Should successfully delete an item", () => {
    action = {
      type: "DELETE_ITEM",
      id: 1
    };
    expect(itemListReducer(currentState, action)).toEqual({
      2: {
        itemName: "The Final Empire",
        description: "Mistborn Era 1, Book 1, LeatherBound",
        price: 250,
        stock: 2,
        id: 1
      }
    });
  });

});