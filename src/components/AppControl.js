import React from "react";
import Store from "./Store";
import Details from "./Details";
import Restock from "./Restock";
import CustomButton from "./CustomButton";

class AppControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      pageName: "Store",
      masterItemList: [],
      selectedItem: null
    };
  }

  switchView = () => {
    let newValue = null;
    if(this.state.pageName !== "Store"){
      newValue = "Store";
    } else {
      newValue = "Restock";
    }
    this.setState({pageName: newValue});
  }

  viewDescend = (id) => {
    const selectedItem = this.state.masterItemList.filter(item => item.id === id)[0];
    this.setState({
      selectedItem: selectedItem
    });
  }

  viewAscend = () => {
    this.setState({
      selectedItem: null
    });
  }

  handleAddingItemToList = (newItem) => {
    const newMasterItemList = this.state.masterItemList.concat(newItem);
    this.setState({
      masterItemList: newMasterItemList,
      pageName: "Restock"
    });
  }

  decrementItemStock = (amountToDecrement, itemId) => {
    let tempMasterItemList = JSON.parse(JSON.stringify(this.state.masterItemList));
    const currentPosition = tempMasterItemList.findIndex(item => item.id === itemId);
    if(currentPosition === -1){
      console.log("ERROR: AppControl-decrementItemStock: Id not in masterItemList");
    }else{
      let currentItem = tempMasterItemList[currentPosition];
      if(currentItem.stock < amountToDecrement){
        console.log("ERROR: AppControl-decrementItemStock: Not enough stock for " + currentItem.itemName);
      }else{
        currentItem.stock = currentItem.stock - amountToDecrement;
        tempMasterItemList[currentPosition] = currentItem;
        this.setState({
          selectedItem: currentItem,
          masterItemList: tempMasterItemList
        });
      }
    }
  }

  render(){
    let currentlyVisibleState = null;
    let currentlyVisibleButton = <CustomButton whenClicked={this.switchView} disabledState={false} buttonText="Change to Store Page" />;
    if(this.state.pageName === "Store"){
      if(this.state.selectedItem === null) {
        currentlyVisibleState = <Store itemList={this.state.masterItemList} itemSelect={this.viewDescend}/>;
        currentlyVisibleButton = <CustomButton whenClicked={this.switchView} disabledState={false} buttonText="Change to Restock Page"/>;
      } else {
        currentlyVisibleState = <Details item={this.state.selectedItem} buttonOrder={this.decrementItemStock}/>;
        currentlyVisibleButton = <CustomButton whenClicked={this.viewAscend} disabledState={false} buttonText="Change to Store Page" />;
      }
    } else if (this.state.pageName === "Restock") {
      currentlyVisibleState = <Restock itemList={this.state.masterItemList} formFunction={this.handleAddingItemToList}/>;
    } else {
      currentlyVisibleState = <h2>I am Broken</h2>;
    }
    return(
      <React.Fragment>
        {currentlyVisibleButton}
        {currentlyVisibleState}
      </React.Fragment>
    )
  }
}

export default AppControl;