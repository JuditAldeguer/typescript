import React, { useState } from "react";
import Input from "./Input";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<IProps> = () => {
  const [input, setInput] = useState({
    name: "",
    url: "",
    age: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {};

  return (
    <div className='AddToList'>
      <Input placeholder='Name' input={input} handleChange={handleChange} />
      <Input placeholder='Age' input={input} handleChange={handleChange} />
      <Input placeholder='Url' input={input} handleChange={handleChange} />
      <textarea
        className='AddToList-input'
        placeholder='Notes'
        name='note'
        onChange={handleChange}
      ></textarea>
      <button className='AddToList-btn' onClick={handleClick}>
        Add tto list
      </button>
    </div>
  );
};

export default AddToList;
