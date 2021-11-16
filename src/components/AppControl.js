import React from "react";
import Store from "./Store";
import Restock from "./Restock";

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

  handleAddingItemToList = (newItem) => {
    const newMasterItemList = this.state.masterItemList.concat(newItem);
    this.setState({
      masterItemList: newMasterItemList,
      pageName: "Restock"
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.pageName === "Store"){
      currentlyVisibleState = <Store itemList={this.state.masterItemList}/>;
      buttonText = "Change to Restock Page";
    } else if (this.state.pageName === "Restock") {
      currentlyVisibleState = <Restock itemList={this.state.masterItemList} formFunction={this.handleAddingItemToList}/>;
      buttonText = "Change to Store Page";
    } else {
      currentlyVisibleState = <h2>I am Broken</h2>;
      buttonText = "Change to Store Page";
    }
    return(
      <React.Fragment>
        <button onClick={this.switchView}>{buttonText}</button>
        {currentlyVisibleState}
      </React.Fragment>
    )
  }
}

export default AppControl;