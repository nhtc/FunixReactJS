import React, { Component } from "react";
import "./ColumnPicker.css";
class ColumnPicker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			columns: [1, 2, 3, 4, 6],
		};
	}
	// Trả column người dùng chọn cho App
	setColumn = (column) => {
		this.props.onRecieveColumn(column);
	};
	render() {
		const elementColumn = this.state.columns.map((column, index) => {
			return (
				<div
					key={index}
					className={
						this.props.columns === column
							? "column_box active"
							: "column_box"
					}
					onClick={() => this.setColumn(column)}
				>
					{column}
				</div>
			);
		});
		return (
			<div className="col-12">
				<div className="panel panel-primary">
					<div className="panel-heading">
						<h3 className="panel-title">Chọn số cột để hiển thị</h3>
						<div className="panel-body">{elementColumn}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ColumnPicker;
