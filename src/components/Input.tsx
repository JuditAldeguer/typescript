import React, { useState } from "react";

interface IProps {
  placeholder: string;
  input: {};
  handleChange: (e) => {};
}

const Input: React.FC<IProps> = ({ placeholder, input }) => {
  return (
    <input
      className='AddToList-input'
      type='text'
      placeholder={placeholder}
      name={placeholder.toLowerCase()}
      value={input.name}
      onChange={(e) => {}}
    >
      Add
    </input>
  );
};

export default Input;
