import React, { useState } from "react";

interface IProps {
  placeholder: string;
  input: Object;
  handleChange: Function;
}

const Input: React.FC<IProps> = ({ placeholder, input, handleChange }) => {
  return (
    <input
      className='AddToList-input'
      type='text'
      placeholder={placeholder}
      name={placeholder.toLowerCase()}
      value={input.name}
      onChange={(e) => {
        handleChange(e);
      }}
    >
      Add
    </input>
  );
};

export default Input;
