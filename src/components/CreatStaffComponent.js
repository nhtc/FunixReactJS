import React, { Component, useEffect } from "react"
import { Control, Errors, LocalForm } from "react-redux-form"
import { Link } from "react-router-dom"
import {
	Breadcrumb,
	BreadcrumbItem,
	Button,
	Card,
	CardBody,
	CardImg,
	CardText,
	CardTitle,
	Col,
	Label,
	Modal,
	ModalBody,
	ModalHeader,
	Row,
	Input,
	FormFeedback,
} from "reactstrap"

const required = val => val && val.length
const maxLength = len => val => !val || val.length <= len
const minLength = len => val => val && val.length >= len
const isNumber = val => !isNaN(Number(val))
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)
class CreateStaffForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isCommentFormModalOpen: false,
			name: "",
			doB: "",
			salaryScale: "",
			department: "",
			annualLeave: "0",
			overTime: "0",
			startDate: "",
			image: "/assets/images/steve.jpg",
			touched: {
				name: false,
			},
		}

		this.toggleCommentFormModal = this.toggleCommentFormModal.bind(this)
		this.handleCommentFormSubmit = this.handleCommentFormSubmit.bind(this)
	}

	handleBlur = field => evt => {
		this.setState({
			touched: { ...this.state.touched, [field]: true },
		})
	}
	validate(
		name,
		doB,
		salaryScale,
		department,
		annualLeave,
		overTime,
		startDate
	) {
		const errors = {
			name: "",
			doB: "",
			salaryScale: "",
			department: "",
			annualLeave: "",
			overTime: "",
			startDate: "",
		}
		if (this.state.touched.name && !required(name))
			errors.name = "Please fill this case"
		else if (this.state.touched.name && name.length < 3)
			errors.name = "Name should be >= 3 characters"
		else if (this.state.touched.name && name.length > 30)
			errors.name = " Name should be <= 10 characters"

		if (this.state.touched.doB && !required(doB))
			errors.doB = "Please choose date"

		if (this.state.touched.startDate && !required(startDate))
			errors.startDate = "Please choose date"

		if (this.state.touched.department && !required(department))
			errors.department = "Please choose department"

		if (this.state.touched.salaryScale && !required(salaryScale))
			errors.salaryScale = "Please fill this case"

		if (this.state.touched.annualLeave && !required(annualLeave))
			errors.annualLeave = "Please fill this case"

		if (this.state.touched.overTime && !required(overTime))
			errors.overTime = "Please fill this case"

		return errors
	}

	handleOnChange = event => {
		const target = event.target
		const value = target.type === "checkbox" ? target.checked : target.value
		const name = target.name

		this.setState({
			[name]: value,
		})
	}

	handleCommentFormSubmit(values) {
		console.log("Current State is: " + JSON.stringify(values))
		alert("Current State is: " + JSON.stringify(values))
	}

	toggleCommentFormModal() {
		this.setState({
			isCommentFormModalOpen: !this.state.isCommentFormModalOpen,
		})
	}
	handleSubmit = e => {
		console.log(e)
	}

	render() {
		const errors = this.validate(
			this.state.name,
			this.state.doB,
			this.state.annualLeave,
			this.state.department,
			this.state.overTime,
			this.state.salaryScale,
			this.state.startDate
		)
		return (
			<React.Fragment>
				<Button outline onClick={this.toggleCommentFormModal}>
					<span className='fa fa-plus fa-lg'> Add New Staff</span>
				</Button>

				{/* commentform  Modal */}
				<Modal
					isOpen={this.state.isCommentFormModalOpen}
					toggle={this.toggleCommentFormModal}
				>
					<ModalHeader toggle={this.toggleCommentFormModal}>
						{" "}
						Add Staff{" "}
					</ModalHeader>
					<ModalBody>
						<form onSubmit={this.handleSubmit}>
							<div class='container'>
								<h1>Create New Staff</h1>
								<p>
									Please fill in this form to create a new
									staff.
								</p>
								<hr />
								<label for='name'>
									<b>Tên</b>
								</label>
								<Input
									type='text'
									placeholder='Nhập Tên'
									name='name'
									id='name'
									value={this.state.name}
									valid={errors.name === ""}
									invalid={errors.name !== ""}
									onBlur={this.handleBlur("name")}
									onChange={this.handleOnChange}
									required
								/>
								<FormFeedback>{errors.name}</FormFeedback>
								<label for='doB'>
									<b>Ngày sinh</b>
								</label>
								<Input
									type='date'
									placeholder=''
									name='doB'
									id='doB'
									value={this.state.doB}
									valid={errors.doB === ""}
									invalid={errors.doB !== ""}
									onBlur={this.handleBlur("doB")}
									onChange={this.handleOnChange}
									required
								/>
								<FormFeedback>{errors.doB}</FormFeedback>
								<label for='salaryScale'>
									<b>Hệ số lương</b>
								</label>
								<Input
									type='text'
									placeholder='Nhập hệ số lương'
									name='salaryScale'
									id='salaryScale'
									value={this.state.salaryScale}
									valid={errors.salaryScale === ""}
									invalid={errors.salaryScale !== ""}
									onBlur={this.handleBlur("salaryScale")}
									onChange={this.handleOnChange}
									required
								/>
								<FormFeedback>
									{errors.salaryScale}
								</FormFeedback>
								<label for='startDate'>
									<b>Ngày vào công ty</b>
								</label>
								<Input
									type='date'
									placeholder=''
									name='startDate'
									id='startDate'
									value={this.state.startDate}
									valid={errors.startDate === ""}
									invalid={errors.startDate !== ""}
									onBlur={this.handleBlur("startDate")}
									onChange={this.handleOnChange}
									required
								/>{" "}
								<FormFeedback>{errors.startDate}</FormFeedback>
								<label for='department'>
									<b>Phòng ban</b>
								</label>
								<Input
									type='text'
									placeholder='Nhập phòng ban'
									name='department'
									id='department'
									value={this.state.department}
									valid={errors.department === ""}
									invalid={errors.department !== ""}
									onBlur={this.handleBlur("department")}
									onChange={this.handleOnChange}
									required
								/>{" "}
								<FormFeedback>{errors.department}</FormFeedback>
								<label for='annualLeave'>
									<b>Số ngày nghỉ còn lại</b>
								</label>
								<Input
									type='text'
									placeholder='Nhập số ngày nghỉ còn lại'
									name='annualLeave'
									id='annualLeave'
									value={this.state.annualLeave}
									valid={errors.annualLeave === ""}
									invalid={errors.annualLeave !== ""}
									onBlur={this.handleBlur("annualLeave")}
									onChange={this.handleOnChange}
									required
								/>{" "}
								<FormFeedback>
									{errors.annualLeave}
								</FormFeedback>
								<label for='overTime'>
									<b>Số ngày đã làm thêm</b>
								</label>
								<Input
									type='text'
									placeholder='Nhập số ngày làm thêm'
									name='overTime'
									id='overTime'
									value={this.state.overTime}
									valid={errors.overTime === ""}
									invalid={errors.overTime !== ""}
									onBlur={this.handleBlur("overTime")}
									onChange={this.handleOnChange}
									required
								/>{" "}
								<FormFeedback>{errors.overTime}</FormFeedback>
								<button type='submit' class='registerbtn'>
									Thêm nhân viên
								</button>
							</div>
						</form>
					</ModalBody>
				</Modal>
			</React.Fragment>
		)
	}
}
function CreateStaff() {
	return (
		<div>
			<CreateStaffForm />
		</div>
	)
}

export default CreateStaff
