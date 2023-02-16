import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Statewise from "./components/Statewise";

//
//   const [num, setNum] = useState(0);
//   useEffect(() => {
//     document.title = `You Clicked Me ${num} Times!`;
//     async function getData() {
//       const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}/`);
//       console.log(res);
//       setNum(res.data.name.toUpperCase());
//     }
//     getData();
//   });
function App() {
  return (
    <>
      <Statewise />
    </>
  );
}

export default App;
