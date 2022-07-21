import React, { Component } from 'react';
import {
	Button,
	Col,
	Form,
	FormFeedback,
	FormGroup,
	Input,
	Label,
	Modal,
	ModalBody,
	ModalHeader,
} from 'reactstrap';
import { DEPARTMENTS } from '../shared/staffs';
import { v4 as uuid } from 'uuid';
class CreateStaff extends Component {
	constructor(props) {
		super(props);

		this.state = {
			departments: DEPARTMENTS,
			isFormModalOpen: false,
			name: 'cuong',
			doB: '21-11-1999',
			salaryScale: '1',
			startDate: '30-5-2022',
			department: 'HR',
			annualLeave: '1',
			overTime: '1',
			image: '/assets/images/vadonut.png',
			touched: {
				name: false,
				doB: false,
				salaryScale: false,
				startDate: false,
				department: false,
				annualLeave: false,
				overTime: false,
			},
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	handleBlur = (field) => (evt) => {
		this.setState({
			touched: { ...this.state.touched, [field]: true },
		});
	};

	validate(
		name,
		doB,
		salaryScale,
		startDate,
		department,
		annualLeave,
		overTime
	) {
		const errors = {
			name: '',
			doB: '',
			salaryScale: '',
			startDate: '',
			department: '',
			annualLeave: '',
			overTime: '',
		};

		if (this.state.touched.name && name.length < 3)
			errors.name = 'Name should be >= 3 characters';
		else if (this.state.touched.name && name.length > 10)
			errors.name = ' Name should be <= 10 characters';

		if (this.state.touched.doB && doB.length < 1)
			errors.doB = 'Please fill this case';

		const reg = /^\d+$/;
		if (this.state.touched.salaryScale && salaryScale.length === 0)
			errors.salaryScale = 'Please fill this case';
		else if (this.state.touched.salaryScale && !reg.test(salaryScale))
			errors.salaryScale = 'Salary Scale should contain only numbers';
		if (this.state.touched.startDate && startDate.length < 1)
			errors.startDate = 'Please fill this case';
		// if (this.state.touched.department && department.name.includes('Select'))
		// 	errors.department = 'Please fill this case';
		if (this.state.touched.annualLeave && annualLeave.length < 1)
			errors.annualLeave = 'Please fill this case';
		if (this.state.touched.overTime && overTime.length < 1)
			errors.overTime = 'Please fill this case';

		return errors;
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		if (name === 'department') {
			this.setState({
				[name]: this.state.departments.filter(
					(d, index) => d.name === value
				)[0],
			});
		} else
			this.setState({
				[name]: value,
			});
	}
	toggleFormModal = () => {
		this.setState({
			isFormModalOpen: !this.state.isFormModalOpen,
		});
	};
	handleSubmit(event) {
		console.log('Current State is: ' + JSON.stringify(this.state));
		this.props.newStaff({
			id: uuid(),
			name: this.state.name,
			doB: this.state.doB,
			salaryScale: this.state.salaryScale,
			startDate: this.state.startDate,
			department: this.state.department,
			annualLeave: this.state.annualLeave,
			overTime: this.state.overTime,
			image: this.state.image,
		});
		this.toggleFormModal();
		event.preventDefault();
	}
	render() {
		const errors = this.validate(
			this.state.name,
			this.state.doB,
			this.state.salaryScale,
			this.state.startDate,
			this.state.department,
			this.state.annualLeave,
			this.state.overTime
		);
		return (
			<div>
				<Button outline onClick={this.toggleFormModal}>
					<span className="fa fa-plus fa-lg"> Add New Staff</span>
				</Button>

				<Modal
					isOpen={this.state.isFormModalOpen}
					toggle={this.toggleFormModal}
					size="lg"
				>
					<ModalHeader toggle={this.toggleFormModal}> Add Staff </ModalHeader>
					<ModalBody>
						<div className="row row-content">
							<div className="col-12 col-md-9">
								<Form onSubmit={this.handleSubmit}>
									<FormGroup row>
										<Label htmlFor="name" md={3}>
											Name
										</Label>
										<Col md={9}>
											<Input
												type="text"
												id="name"
												name="name"
												placeholder="Name"
												value={this.state.name}
												valid={errors.name === ''}
												invalid={errors.name !== ''}
												onBlur={this.handleBlur('name')}
												onChange={this.handleInputChange}
											/>
											<FormFeedback>{errors.name}</FormFeedback>
										</Col>
									</FormGroup>
									<FormGroup row>
										<Label htmlFor="doB" md={3}>
											DoB
										</Label>
										<Col md={9}>
											<Input
												type="date"
												id="doB"
												name="doB"
												value={this.state.doB}
												valid={errors.doB === ''}
												invalid={errors.doB !== ''}
												onBlur={this.handleBlur('doB')}
												onChange={this.handleInputChange}
											/>
											<FormFeedback>{errors.doB}</FormFeedback>
										</Col>
									</FormGroup>
									<FormGroup row>
										<Label htmlFor="salaryScale" md={3}>
											Salary Scale
										</Label>
										<Col md={9}>
											<Input
												type="float"
												id="salaryScale"
												name="salaryScale"
												placeholder="Nhập hệ số lương"
												value={this.state.salaryScale}
												valid={errors.salaryScale === ''}
												invalid={errors.salaryScale !== ''}
												onBlur={this.handleBlur('salaryScale')}
												onChange={this.handleInputChange}
											/>
											<FormFeedback>{errors.salaryScale}</FormFeedback>
										</Col>
									</FormGroup>
									<FormGroup row>
										<Label htmlFor="startDate" md={3}>
											Start Date
										</Label>
										<Col md={9}>
											<Input
												type="date"
												id="startDate"
												name="startDate"
												value={this.state.startDate}
												valid={errors.startDate === ''}
												invalid={errors.startDate !== ''}
												onBlur={this.handleBlur('startDate')}
												onChange={this.handleInputChange}
											/>
											<FormFeedback>{errors.startDate}</FormFeedback>
										</Col>
									</FormGroup>
									<FormGroup row>
										<Label htmlFor="department" md={3}>
											Department
										</Label>
										<Col md={9}>
											<Input
												type="select"
												name="department"
												checked={this.state.department}
												onChange={this.handleInputChange}
												onBlur={this.handleBlur('department')}
											>
												<option>Select department</option>
												{this.state.departments.map((department, id) => (
													<option key={id}>{department.name}</option>
												))}
											</Input>
										</Col>
									</FormGroup>
									<FormGroup row>
										<Label htmlFor="annualLeave" md={3}>
											AnnualLeave
										</Label>
										<Col md={9}>
											<Input
												type="text"
												id="annualLeave"
												name="annualLeave"
												placeholder="annualLeave"
												value={this.state.annualLeave}
												valid={errors.annualLeave === ''}
												invalid={errors.annualLeave !== ''}
												onBlur={this.handleBlur('annualLeave')}
												onChange={this.handleInputChange}
											/>
											<FormFeedback>{errors.annualLeave}</FormFeedback>
										</Col>
									</FormGroup>
									<FormGroup row>
										<Label htmlFor="overTime" md={3}>
											OverTime
										</Label>
										<Col md={9}>
											<Input
												type="text"
												id="overTime"
												name="overTime"
												placeholder="overTime"
												value={this.state.overTime}
												valid={errors.overTime === ''}
												invalid={errors.overTime !== ''}
												onBlur={this.handleBlur('overTime')}
												onChange={this.handleInputChange}
											/>
											<FormFeedback>{errors.overTime}</FormFeedback>
										</Col>
									</FormGroup>
									<div className="text-center">
										<Button color="primary" type="submit">
											Add Staff
										</Button>{' '}
									</div>
								</Form>
							</div>
						</div>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

export default CreateStaff;
