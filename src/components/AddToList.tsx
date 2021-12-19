import React, { useState } from "react";
import Input from "./Input";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  debugger;
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

  const handleClick = (): void => {
    debugger;
    if (!input.name || !input.age) return;

    setPeople([
      ...people,
      {
        name: input.name,
        url: input.url,
        age: parseInt(input.age),
        note: input.note,
      },
    ]);
    setInput({
      name: "",
      url: "",
      age: "",
      note: "",
    });
  };

  return (
    <div className='AddToList'>
      <Input
        pHolder='Name'
        type='text'
        input={input}
        value={input.name}
        handleChange={handleChange}
      />
      <Input
        pHolder='Age'
        type='number'
        input={input}
        value={input.age}
        handleChange={handleChange}
      />
      <Input
        pHolder='Url'
        type='text'
        input={input}
        value={input.url}
        handleChange={handleChange}
      />
      <textarea
        className='AddToList-input'
        placeholder='Notes'
        name='note'
        value={input.note}
        onChange={handleChange}
      ></textarea>
      <button className='AddToList-btn' onClick={handleClick}>
        Add tto list
      </button>
    </div>
  );
};

export default AddToList;
