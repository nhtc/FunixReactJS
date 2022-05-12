import React, { Component } from "react";
import {
	ListGroup,
	ListGroupItem,
	Card,
	CardImg,
	CardImgOverlay,
	CardText,
	CardBody,
	CardTitle,
} from "reactstrap";
import dateFormat from "dateformat";
class StaffList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedStaff: null,
		};
	}
	onStaffSelected(staff) {
		console.log(staff);
		this.setState({ selectedStaff: staff });
	}
	renderStaff(staff) {
		if (staff != null) {
			return (
				<div className="col-6">
					<Card>
						<CardBody>
							<CardTitle>Họ và tên: {staff.name}</CardTitle>
							<CardText>
								Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
							</CardText>
							<CardText>
								Ngày vào công ty:{" "}
								{dateFormat(staff.startDate, "dd/mm/yyyy")}
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
			);
		} else {
			return <div></div>;
		}
	}
	render() {
		const listStaff = this.props.staffs.map((staff) => {
			return (
				<div className="col-6 ">
					<ListGroup>
						<ListGroupItem
							key={staff.id}
							onClick={() => {
								this.onStaffSelected(staff);
							}}
						>
							{staff.name}
						</ListGroupItem>
					</ListGroup>
				</div>
			);
		});
		return (
			<div className="container-fluid text-left">
				<div className="row">{listStaff}</div>
				<p style={{ "text-align": "left" }}>
					Bấm vào tên nhân viên để xem thông tin
				</p>
				<div className="row">
					<div className="col-12">
						{this.renderStaff(this.state.selectedStaff)}
					</div>
				</div>
			</div>
		);
	}
}

export default StaffList;
