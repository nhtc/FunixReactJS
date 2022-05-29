import React, { Component } from "react"
import {
	ListGroup,
	ListGroupItem,
	Card,
	CardBody,
	CardText,
	CardTitle,
	CardImg,
} from "reactstrap"
import dateFormat from "dateformat"
class StaffList extends Component {
	constructor(props) {
		super(props)
	}

	onSelectStaff = id => this.props.selectStaff(id)
	render() {
		// Tính số column cho bootstrap
		const temp = `col-lg-2 col-md-4 col-6`
		const listStaff = this.props.staffs.map(staff => {
			return (
				<div className={temp} key={staff.id}>
					{/* <ListGroup>
						<ListGroupItem
							className={
								staff === this.state.selectedStaff
									? " bg-secondary text-info font-weight-bold font-italic text-ali"
									: ""
							}
							style={{ margin: 2 }}
							onClick={() => {
								this.onStaffSelected(staff)
							}}
						>
							<img
								style={{ display: "block" }}
								src={`..${staff.image}`}
								alt='alberto'
							/>

							{staff.name}
						</ListGroupItem>
					</ListGroup> */}
					<Card
						onClick={() => {
							this.onSelectStaff(staff.id)
						}}
						// onClick={this.props.selectStaff(staff.id)}
					>
						<CardBody>
							<CardImg src={`..${staff.image}`} alt='alberto' />
							<CardTitle className='text-center'>
								{staff.name}
							</CardTitle>
						</CardBody>
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
