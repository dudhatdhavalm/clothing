import React from "react";
import {
  GroupContainer,
  InputElement,
  InputElementLabel
} from "./FormInputStyles";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <GroupContainer>
      <InputElement onChange={handleChange} {...otherProps} />
      {label ? (
        <InputElementLabel {...otherProps}>{label}</InputElementLabel>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
