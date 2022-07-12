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
		}

		this.toggleCommentFormModal = this.toggleCommentFormModal.bind(this)
		this.handleCommentFormSubmit = this.handleCommentFormSubmit.bind(this)
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
								<input
									type='text'
									placeholder='Nhập Tên'
									name='name'
									id='name'
									required
								/>

								<label for='doB'>
									<b>Ngày sinh</b>
								</label>
								<input
									type='date'
									placeholder=''
									name='doB'
									id='doB'
									required
								/>

								<label for='salaryScale'>
									<b>Hệ số lương</b>
								</label>
								<input
									type='text'
									placeholder='Nhập hệ số lương'
									name='salaryScale'
									id='salaryScale'
									required
								/>

								<label for='startDate'>
									<b>Ngày vào công ty</b>
								</label>
								<input
									type='date'
									placeholder=''
									name='startDate'
									id='startDate'
									required
								/>
								<label for='department'>
									<b>Phòng ban</b>
								</label>
								<input
									type='text'
									placeholder='Nhập phòng ban'
									name='department'
									id='department'
									required
								/>
								<label for='annualLeave'>
									<b>Số ngày nghỉ còn lại</b>
								</label>
								<input
									type='text'
									placeholder='Nhập số ngày nghỉ còn lại'
									name='annualLeave'
									id='annualLeave'
									required
								/>
								<label for='overTime'>
									<b>Số ngày đã làm thêm</b>
								</label>
								<input
									type='text'
									placeholder='Nhập số ngày làm thêm'
									name='overTime'
									id='overTime'
									required
								/>

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
