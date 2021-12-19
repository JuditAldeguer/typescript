import React from "react";

interface IProps {
  placeholder: string;
}

const Input: React.FC<IProps> = ({ placeholder }) => {
  return (
    <input className='AddToList-input' type='text' placeholder={placeholder}>
      Add
    </input>
  );
};

export default Input;
