import React, { useState } from "react";
import Input from "./Input";

const AddToList = () => {
  const [input, setInput] = useState({
    name: "",
    url: "",
    age: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className='AddToList'>
      <Input placeholder='Name' input={input} handleChange={handleChange} />
      <Input placeholder='Age' input={input} handleChange={handleChange} />
      <Input
        placeholder='Image Url'
        input={input}
        handleChange={handleChange}
      />
      <textarea
        className='AddToList-input'
        placeholder='Notes'
        name='Notes'
        onChange={handleChange}
      >
        Add
      </textarea>
    </div>
  );
};

export default AddToList;
