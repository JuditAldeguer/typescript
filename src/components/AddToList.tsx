import React from "react";
import Input from "./Input";

const AddToList = () => {
  return (
    <div className='AddToList'>
      <Input placeholder='Name' />
      <Input placeholder='Age' />
      <Input placeholder='Image Url' />
      <textarea className='AddToList-input' placeholder='Notes'>
        Add
      </textarea>
    </div>
  );
};

export default AddToList;
