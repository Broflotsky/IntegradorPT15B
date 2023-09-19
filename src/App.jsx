import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import axios from "axios";
// import SearchBar from "./components/SearchBar/SearchBar.jsx";
// import characters from "./data.js";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id);
      })
    );
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
