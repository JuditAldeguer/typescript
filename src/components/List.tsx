import React from "react";

interface IProps {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[];
}

const List: React.FC<IProps> = (props: IProps) => {
  return <div>List</div>;
};

export default List;

/* {
    name: "Manolito Gafotas",
    url: "",
    age: 10,
    note: "He is a funny guy.",
  },
  {
    name: "Popeye el marino",
    url: "",
    age: 36,
  }, */
