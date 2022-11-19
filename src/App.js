import SearchBox from "./components/search/search-box";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list";
import "./App.css";

const App = () => {
  const [onSearch, setOnSearch] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const onSearchChange = (event) => {
    const search = event.target.value.toLocaleLowerCase();
    setOnSearch(search);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const changedMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(onSearch);
    });
    setFilteredMonsters(changedMonster);
  }, [monsters, onSearch]);

  return (
    <div className="App">
      <h1 className="app-title">Hello World</h1>
      <SearchBox
        placeholder={"Find monster"}
        type="search"
        className="search-box-monster"
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};
export default App;
