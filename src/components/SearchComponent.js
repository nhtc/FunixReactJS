import React, { useEffect, useState } from "react"
import useDebounce from "./Debounce"

const Search = ({ staff, staffList }) => {
	const [searchTerm, setSearchTerm] = useState("")

	const debounceSearch = useDebounce(searchTerm, 300)

	useEffect(() => {
		if (debounceSearch) {
			staffList(
				staff.filter(s =>
					s.name.toLowerCase().includes(debounceSearch.toLowerCase())
				)
			)
		} else {
			staffList(null)
		}
	}, [debounceSearch])

	return (
		<div>
			<div className='input-group'>
				<input
					type='text'
					className='form-control rounded'
					placeholder='Search name of staff ...'
					aria-label='Search'
					aria-describedby='search-addon'
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
					style={{
						maxWidth: "500px",
						margin: "5px auto",
						border: "5px solid red",
						borderRadius: "15px",
					}}
				/>
				{/* <button type="button" className="btn btn-outline-primary">
          Search
        </button> */}
			</div>
		</div>
	)
}

export default Search
