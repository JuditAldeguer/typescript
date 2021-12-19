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
  const [people, setPeople] = useState<IState["people"]>([]);

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
