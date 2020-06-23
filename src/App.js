import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Monsters from "./components/Monsters";
import { SearchBox } from "./components/SearchBox.jsx";

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchTerm: "",
		};
	}

	// fetch users data after first render
	componentDidMount() {
		let users = [];
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((res) => (users = [...res]))
			.then(() => this.setState({ monsters: users }));
	}

	handleChange = (e) => {
		this.setState({ searchTerm: e.target.value });
	};

	render() {
		const { monsters, searchTerm } = this.state;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchTerm.toLowerCase())
		);

		return (
			<Container>
				<h1 className="display-4 text-center my-4">MONSTERS ROLODEX</h1>
				<SearchBox
					placeHolder="Search Monster"
					handleChange={this.handleChange}
				/>
				<Monsters monsters={filteredMonsters} />
			</Container>
		);
	}
}

export default App;
