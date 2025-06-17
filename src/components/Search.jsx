import React from "react";

const Search = ({ search, onClose }) => {
	return (
		<div className={`search-model ${search ? "d-block" : "d-none"}`}>
			<div className="h-100 d-flex align-items-center justify-content-center">
				<div className="search-close-switch" onClick={() => onClose(false)}>
					+
				</div>
				<form className="search-model-form" action="/shop">
					<input
						type="text"
						id="search-input"
						name="search"
						placeholder="Search here....."
					/>
				</form>
			</div>
		</div>
	);
};

export default Search;
