import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    document.title = `You Clicked Me ${num} Times!`;
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}/`);
      console.log(res.data.name);
      setNum(res.data.name.toUpperCase());
    }
    getData();
  });

  return (
    <>
      <h1>YOU HAVE CHOOSEN {num} !</h1>
      <select
        onChange={(e) => {
          setNum(e.target.value);
        }}
      >
        <option value="5">5</option>
        <option value="25">25</option>
        <option value="15">15</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>
    </>
  );
}

export default App;
