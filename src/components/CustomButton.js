import React from "react";
import PropTypes from "prop-types";

function CustomButton(props){
  return (
    <button
      onClick = {props.whenClicked}
      disabled = {props.disabledState}
      type = "button"
    >
      {props.buttonText}
    </button>
  );
}

CustomButton.propTypes = {
  whenClicked: PropTypes.func,
  disabledState: PropTypes.bool,
  buttonText: PropTypes.string
}

export default CustomButton;