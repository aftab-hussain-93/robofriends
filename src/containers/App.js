import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import ErrorBoundary from '../components/ErrorBoundary';
import Scroll from '../components/Scroll';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchText: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(user => {
          this.setState({ robots: user })
        });
  }

  onSearchChange = (event) => {
    this.setState({ searchText: event.target.value });
  };

  render() {
    const {robots, searchText } = this.state
    const filteredRobots = robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });

    if (robots.length === 0) {
      return <h2 className="tc">Loading</h2>;
    } else {
      return (
        <div className="tc">
          <h2 className="f1">RoboFriends</h2>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
          	 <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}
export default App;
