import React from "react";
import Input from "./Input";

const AddToList = () => {
  return (
    <div className='AddToList'>
      <Input placeholder='Name' />
      <Input placeholder='Age' />
      <Input placeholder='Image Url' />
      <Input placeholder='Name' />
    </div>
  );
};

export default AddToList;
