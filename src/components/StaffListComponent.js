import React, { Component } from "react";
import {
	ListGroup,
	ListGroupItem,
	Card,
	CardBody,
	CardText,
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
				<div className="col-lg-6 col-sm-12">
					<Card>
						<CardBody>
							<CardTitle>Họ và tên: {staff.name}</CardTitle>
							<CardText>
								Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
							</CardText>
							<CardText>
								Ngày vào công ty:
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
		// Tính số column cho bootstrap
		const temp = `col-lg-${12 / this.props.columns} col-md-6 col-sm-12`;
		const listStaff = this.props.staffs.map((staff) => {
			return (
				<div className={temp} key={staff.id}>
					<ListGroup>
						<ListGroupItem
							style={{ margin: 2 }}
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
				<h4 className="text-center">
					<mark>
						<em>Bấm vào tên nhân viên để xem thông tin</em>
					</mark>
				</h4>
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
