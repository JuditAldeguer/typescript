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
  value: string;
}

const Input: React.FC<IProps> = ({
  pHolder,
  input,
  handleChange,
  type,
  value,
}) => {
  const nameGiven = pHolder.toLowerCase();
  return (
    <input
      className='AddToList-input'
      type={type}
      name={nameGiven}
      value={value}
      placeholder={pHolder}
      onChange={(e) => {
        handleChange(e);
      }}
    ></input>
  );
};

export default Input;
