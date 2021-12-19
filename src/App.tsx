import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";

interface IState {
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
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Pople invited to my party </p>
        <List people={people} />
      </header>
    </div>
  );
}

export default App;
