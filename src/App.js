import { Component } from "react";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search/search-box";
import "./App.css";

class App extends Component {
  constructor() {
    //Set state for Search filed and monsters lists
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    // fetch API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) =>
        this.setState(() => {
          return {
            monsters: user,
          };
        })
      );
  }

  onSearch = (event) => {
    // Onsearch function executes once to optimize the program
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state; // Optimizing
    const { onSearch } = this; // Optimizing
    const fileteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    }); // Filtered monsters list so that we can find the monsters we search for
    return (
      <div className="App">
        <h1 className="app-title">Monsters Roledex</h1>
        <SearchBox
          onChangeHandler={onSearch}
          className={"search-box-monsters"}
          placeholder={"Enter a monster"}
        />
        <CardList monsters={fileteredMonsters} />
      </div>
    );
  }
}

export default App;
