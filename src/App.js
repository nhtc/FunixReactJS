import React, { Component } from "react"
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom"
import "./App.css"
import Footer from "./components/FooterComponent"
import Header from "./components/HeaderComponent"
import Menu from "./components/MenuComponent"
import Navigation from "./components/NavigationComponent"
import StaffList from "./components/StaffListComponent"
import { STAFFS } from "./shared/staffs"
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
		const Staff = () => {
			return (
				<StaffList
					staffs={this.state.staffs}
					columns={this.state.columns}
				/>
			)
		}
		return (
			<BrowserRouter>
				<div className='App'>
					<Header />
					Homepage
					<Switch>
						<Route path='/staffs' component={Staff} />
						<Route path='/rooms' component={Staff} />
						<Route path='/salary' component={Staff} />
						<Redirect to='/' />
					</Switch>
					{/* <Footer /> */}
				</div>
			</BrowserRouter>
		)
	}
}

export default App
