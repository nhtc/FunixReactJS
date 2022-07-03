import React, { Component, useEffect } from "react"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import "./App.css"
import Department from "./components/DepartmentComponent"
import Footer from "./components/FooterComponent"
import Header from "./components/HeaderComponent"
import Salary from "./components/SalaryComponent"
import Search from "./components/SearchComponent"
import StaffDetail from "./components/StaffDetailComponent"
import StaffList from "./components/StaffListComponent"
import { DEPARTMENTS, STAFFS } from "./shared/staffs"
class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			staffs: STAFFS,
			staffSearch: null,
			departments: DEPARTMENTS,
			columns: 4,
			selectedStaff: null,
		}
	}
	// onSetColumn = column => {
	// 	console.log(column)
	// 	this.setState({ columns: column })
	// }
	// selectStaff = id => {
	// 	console.log("id nè: ", this.state.selectedStaff)
	// 	this.setState({ selectedStaff: id })
	// }

	// componentDidMount() {
	// 	console.log(this.state.staffSearch)
	// }

	// getStaffSearch = value => {
	// 	this.setState({
	// 		staffSearch: value,
	// 	})
	// }
	render() {
		const Staff = () => {
			return (
				<StaffList
					staffs={this.state.staffs}
					columns={this.state.columns}
					selectStaff={this.selectStaff}
				/>
			)
		}
		const Detail = ({ match }) => {
			return (
				<StaffDetail
					staff={
						this.state.staffs.filter(
							staff => staff.id === parseInt(match.params.id, 10)
						)[0]
					}
				/>
			)
		}
		const DepartmentList = () => {
			return <Department department={this.state.departments} />
		}
		const SalaryDetail = () => {
			return <Salary staffs={this.state.staffs} />
		}
		return (
			<BrowserRouter>
				<div className='App'>
					<Header />
					<Switch>
						<Route path='/' exact component={Staff} />
						<Route path='/staffs' exact component={Staff} />
						<Route path='/staffs/:id' component={Detail} />
						<Route path='/departments' component={DepartmentList} />
						<Route path='/salary' component={SalaryDetail} />
						<Redirect to='/' />
					</Switch>
					<Footer />
				</div>
			</BrowserRouter>
		)
	}
}

export default App
