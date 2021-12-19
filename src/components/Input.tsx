import React, { useState } from "react";

interface IProps {
  placeholder: string;
  input: {
    name: string;
    url: string;
    age: string;
    note: string;
  };
  handleChange: Function;
  type: string;
}

const Input: React.FC<IProps> = ({
  placeholder,
  input,
  handleChange,
  type,
}) => {
  return (
    <input
      className='AddToList-input'
      type={type}
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
