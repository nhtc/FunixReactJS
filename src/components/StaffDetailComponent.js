import React from "react"
import {
	Card,
	CardBody,
	CardTitle,
	CardImg,
	CardText,
	Breadcrumb,
	BreadcrumbItem,
} from "reactstrap"
import dateFormat from "dateformat"
import { Link } from "react-router-dom"

const StaffDetail = props => {
	return (
		<div className='container'>
			<div className='row'>
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to='/staffs'>Staffs</Link>
					</BreadcrumbItem>
					<BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
				</Breadcrumb>
			</div>
			<div className='row'>
				<div className='col-lg-3'>
					<CardImg src={props.staff.image} height='260' />
				</div>
				<div className='col-lg-9 col-sm-12 text-left'>
					<Card>
						<CardBody>
							<CardTitle>Họ và tên: {props.staff.name}</CardTitle>
							<CardText>
								Ngày sinh:{" "}
								{dateFormat(props.staff.doB, "dd/mm/yyyy")}
							</CardText>
							<CardText>
								Ngày vào công ty:{" "}
								{dateFormat(
									props.staff.startDate,
									"dd/mm/yyyy"
								)}
							</CardText>
							<CardText>
								Phòng ban: {props.staff.department.name}
							</CardText>
							<CardText>
								Số ngày nghỉ: {props.staff.annualLeave}
							</CardText>
							<CardText>
								Số ngày đã làm thêm: {props.staff.overTime}
							</CardText>
						</CardBody>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default StaffDetail
