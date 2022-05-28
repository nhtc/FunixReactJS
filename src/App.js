import "./App.css"
import { Navbar, NavbarBrand } from "reactstrap"
import StaffList from "./components/StaffListComponent"
import ColumnPicker from "./components/ColumnPickerComponent"
import { STAFFS } from "./shared/staffs"
import React, { Component } from "react"

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			staffs: STAFFS,
			columns: 4,
		}
	}
	onSetColumn = column => {
		console.log(column)
		this.setState({ columns: column })
	}
	render() {
		return (
			<div className='App'>
				<Navbar dark color='primary'>
					<div className='container'>
						<NavbarBrand href='/'>
							Ứng dụng quản lý nhân sự V1.0
						</NavbarBrand>
					</div>
				</Navbar>
				{/* <ColumnPicker
					columns={this.state.columns}
					onRecieveColumn={this.onSetColumn}
				/> */}
				<StaffList
					staffs={this.state.staffs}
					columns={this.state.columns}
				/>
			</div>
		)
	}
}

export default App
