import React, { Component } from 'react';
import {
	BrowserRouter,
	Redirect,
	Route,
	Switch,
	withRouter,
} from 'react-router-dom';
import './App.css';
import Department from './components/DepartmentComponent';
import Footer from './components/FooterComponent';
import Header from './components/HeaderComponent';
import Home from './components/HomeComponent';
import Salary from './components/SalaryComponent';
import StaffDetail from './components/StaffDetailComponent';
import StaffList from './components/StaffListComponent';
import { DEPARTMENTS, STAFFS } from './shared/staffs';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { connect } from 'react-redux';
const store = ConfigureStore();

const mapStateToProps = (state) => {
	return {
		staffs: state.staffs,
		newStaff: state.newStaff,
		selectedStaff: state.selectedStaff,
	};
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			staffs: STAFFS,
			staffSearch: null,
			departments: DEPARTMENTS,
			columns: 4,
			selectedStaff: null,
		};
	}

	newStaff = (newStaff) => {
		this.setState({
			staffs: { ...this.state.staffs, newStaff },
		});
	};
	render() {
		const Staff = () => {
			return (
				<StaffList
					staffs={this.state.staffs}
					departments={this.state.departments}
					columns={this.state.columns}
					selectStaff={this.selectStaff}
					newStaff={this.newStaff}
				/>
			);
		};
		const Detail = ({ match }) => {
			return (
				<StaffDetail
					staff={
						this.state.staffs.filter(
							(staff) => staff.id === parseInt(match.params.id, 10)
						)[0]
					}
				/>
			);
		};
		const DepartmentList = () => {
			return <Department department={this.state.departments} />;
		};
		const SalaryDetail = () => {
			return <Salary staffs={this.state.staffs} />;
		};
		return (
			<div className="App">
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/staffs" exact component={Staff} />
					<Route path="/staffs/:id" component={Detail} />
					<Route path="/departments" component={DepartmentList} />
					<Route path="/salary" component={SalaryDetail} />
					<Redirect to="/" />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps)(App));
