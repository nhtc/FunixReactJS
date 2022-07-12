import React, { useEffect, useState } from "react"
import useDebounce from "./Debounce"

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
		<form
			onSubmit={handleSubmit}
			className='input-group'
			style={{
				maxWidth: "500px",
				margin: "5px auto",
				borderRadius: "15px",
			}}
		>
			<input
				type='text'
				className='form-control rounded'
				placeholder='Search name of staff ...'
				aria-label='Search'
				name='search'
				aria-describedby='search-addon'
			/>
			<span>
				<button
					type='submit'
					value='submit'
					className='btn btn-outline-primary'
				>
					Search
				</button>
			</span>
		</form>
	)
}

export default Search
