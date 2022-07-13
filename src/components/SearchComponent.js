import React from "react"
import "./style.css"

const Search = ({ staff, staffList }) => {
	const handleSubmit = e => {
		e.preventDefault()
		const searchTerm = e.target.search.value
		console.log("value of form", searchTerm)
		searchTerm
			? staffList(
					staff.filter(s =>
						s.name.toLowerCase().includes(searchTerm.toLowerCase())
					)
			  )
			: staffList(null)
	}
	return (
		// <form
		// 	onSubmit={handleSubmit}
		// 	className='input-group'
		// 	style={{
		// 		maxWidth: "500px",
		// 		margin: "5px auto",
		// 		borderRadius: "15px",
		// 	}}
		// >
		// 	<input
		// 		type='text'
		// 		className='form-control rounded'
		// 		placeholder='Search name of staff ...'
		// 		aria-label='Search'
		// 		name='search'
		// 		aria-describedby='search-addon'
		// 	/>
		// 	<input
		// 		type='submit'
		// 		value='search'
		// 		className='btn btn-outline-primary search-btn'
		// 	/>
		// </form>
		<div className='container'>
			<div className='row height d-flex justify-content-center align-items-center'>
				<div className='col-md-8'>
					<div className='search'>
						<form onSubmit={handleSubmit}>
							<i className='fa fa-search'></i>
							<input
								type='text'
								name='search'
								className='form-control'
								placeholder='Search staff...?'
							/>
							<button className='btn btn-primary' type='submit'>
								Search
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Search
