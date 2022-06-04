import React from "react"
import { Link } from "react-router-dom"
import {
	Card,
	CardBody,
	CardTitle,
	CardText,
	Breadcrumb,
	BreadcrumbItem,
	Badge,
} from "reactstrap"
const Salary = props => {
	return (
		<div className='container'>
			<div className='row'>
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to='/staffs'>Nhân viên</Link>
					</BreadcrumbItem>
					<BreadcrumbItem active>Bảng lương</BreadcrumbItem>
				</Breadcrumb>
			</div>
			<div className='row'>
				{props.staffs.map(staff => {
					return (
						<Card
							className='col-lg-4 col-sm-12 text-left'
							color='info'
							outline
						>
							<CardBody>
								<CardTitle>{staff.name}</CardTitle>
								<CardText>Mã nhân viên: {staff.id}</CardText>
								<CardText>
									Hệ số lương: {staff.salaryScale}
								</CardText>
								<CardText>
									Số ngày đã làm thêm: {staff.overTime}
								</CardText>
								<Badge
									color='primary'
									pill
									style={{ fontSize: "1.5rem" }}
								>
									Lương:{" "}
									{Math.floor(
										staff.salaryScale * 3000000 +
											staff.overTime * 200000
									)}
								</Badge>
							</CardBody>
						</Card>
					)
				})}
			</div>
		</div>
	)
}

export default Salary
