import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Manolito Gafotas",
      url: "https://aprendaespanhol.files.wordpress.com/2014/05/manolito-gafotas.jpeg",
      age: 10,
      note: "He is a funny guy.",
    },
  ]);

  return (
    <div className='App'>
      <h1>People invited to my party: </h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
