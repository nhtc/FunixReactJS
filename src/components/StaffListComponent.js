import React, { Component } from "react"
import { Card, CardBody, CardTitle, CardImg, timeoutsShape } from "reactstrap"
import { Link } from "react-router-dom"
import dateFormat from "dateformat"
import Search from "./SearchComponent"
import CreateStaff from "./CreatStaffComponent"
class StaffList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			searchStaff: null,
		}
	}
	SearchStaff = staffSearch => {
		this.setState({
			searchStaff: staffSearch,
		})
	}

	render() {
		const temp = `col-lg-2 col-md-4 col-6`
		const staffList = this.state.searchStaff || this.props.staffs

		const listStaff = staffList.map(staff => {
			return (
				<div className={temp} key={staff.id}>
					<Card className='text-decoration-none'>
						<Link to={`/staffs/${staff.id}`}>
							<CardBody>
								<CardImg
									src={`..${staff.image}`}
									alt='alberto'
								/>
								<CardTitle className='text-center text-decoration-none'>
									{staff.name}
								</CardTitle>
							</CardBody>
						</Link>
					</Card>
				</div>
			)
		})

		return (
			<div className='container-fluid text-left'>
				<div className='row'>
					<Search
						staff={this.props.staffs}
						staffList={this.SearchStaff}
					/>
					<CreateStaff />
				</div>
				<div className='row'>{listStaff}</div>
			</div>
		)
	}
}

export default StaffList
