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

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.pageName === "Store"){
      currentlyVisibleState = <Store />;
      buttonText = "Change to Restock Page";
    } else if (this.state.pageName === "Restock") {
      currentlyVisibleState = <Restock />;
      buttonText = "Change to Store Page";
    } else {
      currentlyVisibleState = <h2>I am Broken</h2>;
      buttonText = "Change to Store Page";
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.switchView}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default AppControl;