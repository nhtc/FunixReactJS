import "./App.css";
import { Navbar, NavbarBrand, Row } from "reactstrap";
import StaffList from "./components/StaffListComponent";
import { STAFFS } from "./shared/staffs";
import React, { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			staffs: STAFFS,
		};
	}
	render() {
		return (
			<div className="App">
				<Navbar dark color="primary">
					<div className="container">
						<NavbarBrand href="/">
							Ứng dụng quản lý nhân sự V1.0
						</NavbarBrand>
					</div>
				</Navbar>
				<StaffList staffs={this.state.staffs} />
			</div>
		);
	}
}

export default App;
