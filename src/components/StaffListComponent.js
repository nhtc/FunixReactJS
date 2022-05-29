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
		this.state = {
			selectedStaff: null,
		}
	}
	onStaffSelected(staff) {
		console.log(staff)
		this.setState({ selectedStaff: staff })
	}

	renderStaff(staff) {
		if (staff != null) {
			return (
				<div className='container'>
					<div className='row'>
						<div className='col-lg-3'>
							<CardImg src={staff.image} />
						</div>
						<div className='col-lg-9 col-sm-12'>
							<Card>
								<CardBody>
									<CardTitle>
										Họ và tên: {staff.name}
									</CardTitle>
									<CardText>
										Ngày sinh:{" "}
										{dateFormat(staff.doB, "dd/mm/yyyy")}
									</CardText>
									<CardText>
										Ngày vào công ty:
										{dateFormat(
											staff.startDate,
											"dd/mm/yyyy"
										)}
									</CardText>
									<CardText>
										Phòng ban: {staff.department.name}
									</CardText>
									<CardText>
										Số ngày nghỉ: {staff.annualLeave}
									</CardText>
									<CardText>
										Số ngày đã làm thêm: {staff.overTime}
									</CardText>
								</CardBody>
							</Card>
						</div>
					</div>
				</div>
			)
		} else {
			return <div></div>
		}
	}
	render() {
		// Tính số column cho bootstrap
		const temp = `col-lg-2 col-md-4 col-6`
		const listStaff = this.props.staffs.map(staff => {
			return (
				<div className={temp} key={staff.id}>
					<ListGroup>
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
					</ListGroup>
					<Card
						onClick={() => {
							this.onStaffSelected(staff)
						}}
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
				<h4 className='text-center'>
					{/* <mark>
						<em>Bấm vào tên nhân viên để xem thông tin</em>
					</mark> */}
				</h4>
				<div className='row'>
					<div className='col-12'>
						{this.renderStaff(this.state.selectedStaff)}
					</div>
				</div>
			</div>
		)
	}
}

export default StaffList
