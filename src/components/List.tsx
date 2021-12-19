import React from "react";

interface IProps {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[];
}

const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className='List' key={person.name}>
          <div className='List-header'>
            <img src={person.url} alt={person.name} className='List-img' />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old.</p>
          <p className='List-note'>{person.note}</p>
        </li>
      );
    });
  };
  return <ul>{renderList()}</ul>;
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
    url: "https://sm.ign.com/ign_es/screenshot/default/popeye-wallpaper-hd-1080p-469428_8wc8.jpg",
    age: 36,
  }, */
