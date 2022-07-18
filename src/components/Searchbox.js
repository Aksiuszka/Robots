import React from 'react';

function Searchbox({ searchfield, searchChange }) {
	return (
		<div className="flex justify-center">
			<input
				class="rounded-lg w-1/2 h-9 mb-15"
				placeholder="Wpisz robota"
				type="search"
				onChange={searchChange}
			/>
		</div>
	);
}

export default Searchbox;
