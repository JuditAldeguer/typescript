import React, { useState } from "react";

interface IProps {
  pHolder: string;
  input: {
    name: string;
    url: string;
    age: string;
    note: string;
  };
  handleChange: Function;
  type: string;
}

const Input: React.FC<IProps> = ({ pHolder, input, handleChange, type }) => {
  debugger;
  return (
    <input
      className='AddToList-input'
      type={type}
      placeholder={pHolder}
      name={pHolder.toLowerCase()}
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
