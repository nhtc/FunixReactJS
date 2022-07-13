import React from "react"
import { Link } from "react-router-dom"
import {
	Card,
	CardBody,
	CardTitle,
	CardImg,
	CardText,
	Breadcrumb,
	BreadcrumbItem,
} from "reactstrap"
const Department = props => {
	return (
		<div className='container'>
			<div className='row'>
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to='/staffs'>Nhân viên</Link>
					</BreadcrumbItem>
					<BreadcrumbItem active>Phòng ban</BreadcrumbItem>
				</Breadcrumb>
			</div>
			<div className='row'>
				{props.department.map(depart => {
					return (
						<div
							className='col-lg-4 text-left justify-content-center'
							style={{
								marginBottom: "20px",
							}}
						>
							<Card style={{ border: "1px solid" }}>
								<CardBody>
									<CardTitle>{depart.name}</CardTitle>

									<CardText>
										Số nhân viên: {depart.numberOfStaff}
									</CardText>
								</CardBody>
							</Card>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Department
