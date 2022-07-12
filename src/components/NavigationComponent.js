import React from "react"
import { Link } from "react-router-dom"
import {
	Collapse,
	Nav,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	NavItem,
} from "reactstrap"
import { NavLink } from "react-router-dom"
const Navigation = () => {
	return (
		<div>
			<div>
				<Navbar color='primary' expand='md' light>
					<NavbarBrand href='/'>
						<img
							src='../assets/images/logo.png'
							width='50'
							height='50'
						/>
					</NavbarBrand>
					<NavbarToggler onClick={function noRefCheck() {}} />
					<Collapse navbar>
						<Nav className='me-auto navbar' navbar>
							<NavItem>
								<NavLink to='/google'>
									<i
										className='fa fa-users fa-2x'
										aria-hidden='true'
									></i>
									<span className='align-text-bottom'>
										Nhân viên
									</span>
								</NavLink>
							</NavItem>
							<NavItem className>
								<NavLink href='https://github.com/reactstrap/reactstrap'>
									<i
										className='fa fa-id-card-0 fa-2x'
										aria-hidden='true'
									></i>
									<span className='align-text-bottom'>
										Phòng ban
									</span>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href='https://github.com/reactstrap/reactstrap'>
									<i
										className='fa fa-money fa-2x'
										aria-hidden='true'
									></i>
									<span className='align-text-bottom'>
										Bảng lương
									</span>
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		</div>
	)
}

export default Navigation
