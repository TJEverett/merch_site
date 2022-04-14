import React from "react";
import Store from "./Store";
import Details from "./Details";
import Restock from "./Restock";
import Edit from "./Edit";
import CustomButton from "./CustomButton";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AppControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      pageName: "Store",
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
    const selectedItem = this.props.masterItemList[id];
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
    const { dispatch } = this.props;
    const { itemName, description, price, stock, id } = newItem;
    const action = {
      type: "ADD_ITEM",
      itemName: itemName,
      description: description,
      price: price,
      stock: stock,
      id: id
    }
    dispatch(action);
    this.setState({
      pageName: "Restock"
    });
  }

  handleEditingItemInList = (updatedItem) => {
    const { dispatch } = this.props;
    const { itemName, description, price, stock, id } = updatedItem;
    const action = {
      type: "ADD_ITEM",
      itemName: itemName,
      description: description,
      price: price,
      stock: stock,
      id: id
    }
    dispatch(action);
    this.setState({
      selectedItem: updatedItem
    });
  }

  handleDeletingItemFromList = (itemId) => {
    const { dispatch } = this.props;
    const action = {
      type: "DELETE_ITEM",
      id: itemId
    }
    dispatch(action);
    this.setState({
      selectedItem: null
    })
  }

  decrementItemStock = (amountToDecrement, itemId) => { //update
    const { dispatch } = this.props;
    const { itemName, description, price, stock, id } = this.props.masterItemList[itemId];
    if(stock < amountToDecrement){
      console.log("ERROR: AppControl-decrementItemStock: Not enough stock for " + itemName);
    }else{
      const newStock = stock - amountToDecrement;
      const action = {
        type: "ADD_ITEM",
        itemName: itemName,
        description: description,
        price: price,
        stock: newStock,
        id: id
      }
      dispatch(action);
      this.setState({
        selectedItem: null
      });
    }
  }

  render(){
    let currentlyVisibleState = null;
    let currentlyVisibleButton = null;
    if(this.state.pageName === "Store"){
      if(this.state.selectedItem === null) {
        currentlyVisibleState = <Store itemList={this.props.masterItemList} itemSelect={this.viewDescend}/>;
        currentlyVisibleButton = <CustomButton whenClicked={this.switchView} disabledState={false} buttonText="Change to Restock Page"/>;
      } else {
        currentlyVisibleState = <Details item={this.state.selectedItem} buttonOrder={this.decrementItemStock}/>;
        currentlyVisibleButton = <CustomButton whenClicked={this.viewAscend} disabledState={false} buttonText="Change to Store Page" />;
      }
    } else if (this.state.pageName === "Restock") {
      if(this.state.selectedItem === null){
        currentlyVisibleState = <Restock itemList={this.props.masterItemList} formFunction={this.handleAddingItemToList} itemSelect={this.viewDescend}/>;
        currentlyVisibleButton = <CustomButton whenClicked={this.switchView} disabledState={false} buttonText="Change to Store Page" />;
      } else {
        currentlyVisibleState = <Edit item={this.state.selectedItem} editFunction={this.handleEditingItemInList} deleteFunction={this.handleDeletingItemFromList} />;
        currentlyVisibleButton = <CustomButton whenClicked={this.viewAscend} disabledState={false} buttonText="Change to Restock Page" />;
      }
    } else {
      currentlyVisibleState = <h2>I am Broken</h2>;
      currentlyVisibleButton = <CustomButton whenClicked={this.switchView} disabledState={false} buttonText="Change to Store Page" />;
    }
    return(
      <React.Fragment>
        {currentlyVisibleButton}
        {currentlyVisibleState}
      </React.Fragment>
    )
  }
}

AppControl.propTypes = {
  masterItemList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    masterItemList: state
  }
}

AppControl = connect(mapStateToProps)(AppControl);

export default AppControl;