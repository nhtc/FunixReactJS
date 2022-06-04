import React, { Component } from "react"
import { Card, CardBody, CardTitle, CardImg } from "reactstrap"
import { Link } from "react-router-dom"
import dateFormat from "dateformat"
class StaffList extends Component {
	constructor(props) {
		super(props)
	}

	// onSelectStaff = id => this.props.selectStaff(id)
	render() {
		// Tính số column cho bootstrap
		const temp = `col-lg-2 col-md-4 col-6`
		const listStaff = this.props.staffs.map(staff => {
			return (
				<div className={temp} key={staff.id}>
					<Card
					// onClick={() => {
					// 	this.onSelectStaff(staff.id)
					// }}
					// onClick={this.props.selectStaff(staff.id)}
					>
						<Link to={`/staffs/${staff.id}`}>
							<CardBody>
								<CardImg
									src={`..${staff.image}`}
									alt='alberto'
								/>
								<CardTitle className='text-center'>
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
				<div className='row'>{listStaff}</div>
			</div>
		)
	}
}

export default StaffList
