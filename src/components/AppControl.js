import React from "react";
import Store from "./Store";
import Restock from "./Restock";

const tempMasterItemList = [
  {
    itemName: "Way of Kings",
    description: "Stormlight Archive, book 1, hardback",
    price: 250.00,
    stock: 17
  },
  {
    itemName: "The Final Empire",
    description: "Mistborn era 1, book 1, paperback",
    price: 200.00,
    stock: 23
  },
  {
    itemName: "Oathbringer",
    description: "Stormlight Archive, book 3, hardback",
    price: 250.00,
    stock: 4
  },
  {
    itemName: "Warbreaker",
    description: "Warbreaker, book 1, paperback",
    price: 200.00,
    stock: 0
  }
]

class AppControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      pageName: "Store",
      masterItemList: []
    };
  }

  switchView = () => {
    let newValue = null;
    if(this.state.pageName !== "Store"){
      newValue = "Store";
    } else {
      newValue = "Restock";
    }
    this.setState(prevState => ({
      pageName: newValue
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.pageName === "Store"){
      currentlyVisibleState = <Store itemList={tempMasterItemList}/>;
      buttonText = "Change to Restock Page";
    } else if (this.state.pageName === "Restock") {
      currentlyVisibleState = <Restock itemList={tempMasterItemList}/>;
      buttonText = "Change to Store Page";
    } else {
      currentlyVisibleState = <h2>I am Broken</h2>;
      buttonText = "Change to Store Page";
    }
    return(
      <React.Fragment>
        <button onClick={this.switchView}>{buttonText}</button>
        {/* ^^^ button missing if second on restock page*/}
        {currentlyVisibleState}
      </React.Fragment>
    )
  }
}

export default AppControl;