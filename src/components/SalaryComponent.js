import React, { useState } from "react"
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
	const [isSort, setIsSort] = useState(0)
	//0 la mac dunh, 1 là name, 2 là id
	const sortStaff = sortType => {
		const newListStaff = [...props.staffs]
		if (sortType === 1) {
			return newListStaff.sort((a, b) =>
				a.name > b.name ? 1 : b.name > a.name ? -1 : 0
			)
		} else if (sortType === 2) {
			return newListStaff.sort((a, b) => a.id - b.id)
		}
		return props.staffs
	}

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
				<button
					className={
						isSort === 0
							? "abtn btn-success border border-primary rounded-circle"
							: "btn btn-light border border-primary"
					}
					onClick={() => {
						setIsSort(0)
					}}
				>
					Default
				</button>
				<button
					className={
						isSort === 1
							? "btn btn-success border border-primary rounded-circle"
							: "btn btn-light border border-primary"
					}
					onClick={() => {
						setIsSort(1)
					}}
				>
					Sort name
				</button>
				<button
					className={
						isSort === 2
							? "abtn btn-success border border-primary rounded-circle"
							: "btn btn-light border border-primary"
					}
					onClick={() => {
						setIsSort(2)
					}}
				>
					Sort id
				</button>
			</div>
			<div className='row'>
				{sortStaff(isSort).map(staff => {
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
