import React from "react"

const StaffDetail = props => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-lg-3'>
					<CardImg src={props.image} />
				</div>
				<div className='col-lg-9 col-sm-12'>
					<Card>
						<CardBody>
							<CardTitle>Họ và tên: {props.name}</CardTitle>
							<CardText>
								Ngày sinh: {dateFormat(props.doB, "dd/mm/yyyy")}
							</CardText>
							<CardText>
								Ngày vào công ty:
								{dateFormat(props.startDate, "dd/mm/yyyy")}
							</CardText>
							<CardText>
								Phòng ban: {props.department.name}
							</CardText>
							<CardText>
								Số ngày nghỉ: {props.annualLeave}
							</CardText>
							<CardText>
								Số ngày đã làm thêm: {props.overTime}
							</CardText>
						</CardBody>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default StaffDetail
