import React, { Component } from "react"
import {
	Navbar,
	NavbarBrand,
	Nav,
	NavbarToggler,
	Collapse,
	NavItem,
	Jumbotron,
} from "reactstrap"
import { NavLink } from "react-router-dom"
import "./style.css"
class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isNavOpen: false,
		}
	}

	toggleNav = () => {
		this.setState({ isNavOpen: !this.state.isNavOpen })
	}

	render() {
		return (
			<div>
				<Navbar light expand='md' color='primary'>
					<div className='container-fluid'>
						<NavbarToggler onClick={this.toggleNav} />
						<NavbarBrand className='mr-auto brand' href='/'>
							<img
								src='assets/images/logo.png'
								height='30'
								width='41'
								alt='Ristorante Con Fusion'
							/>
						</NavbarBrand>
						<Collapse isOpen={this.state.isNavOpen} navbar>
							<Nav navbar>
								<NavItem>
									<NavLink
										className='nav-link'
										to='/staffs'
										activeClassName='active'
									>
										<span className='fa fa-users fa-lg'>
											{" "}
											Nhân viên
										</span>{" "}
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className='nav-link'
										to='/departments'
									>
										<span className='fa fa-id-card-o fa-lg'>
											{" "}
											Phòng ban
										</span>{" "}
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className='nav-link' to='/salary'>
										<span className='fa fa-money fa-lg'>
											{" "}
											Bảng lương
										</span>{" "}
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
			</div>
		)
	}
}

export default Header
