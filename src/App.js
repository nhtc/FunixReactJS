import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Main from "./components/MainComponent";
import { STAFFS } from "./shared/staffs";
import React, { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			staffs: STAFFS,
			columns: 4,
		};
	}
	onSetColumn = (column) => {
		console.log(column);
		this.setState({ columns: column });
	};
	render() {
		return (
			<div className="App">
				<Main />
			</div>
		);
	}
}

export default App;
