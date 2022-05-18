import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Main from "./components/MainComponent";
import { STAFFS } from "./shared/staffs";
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

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
			<BrowserRouter>
				<div className="App">
					<Main />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
