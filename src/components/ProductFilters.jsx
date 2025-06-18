import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const ProductFilters = ({ categories, selectedCategory, onSelectCategory }) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	return (
		<aside className="shop__sidebar p-3 bg-light rounded shadow-sm mb-4">
			<div className="sidebar__categories">
				<div className="section-title mb-3 d-flex justify-content-between align-items-center">
					<h5 className="m-0">Brands</h5>
					<button
						className="btn btn-sm btn-outline-secondary d-md-none"
						onClick={() => setDropdownOpen(!dropdownOpen)}
						aria-label="Toggle category dropdown"
					>
						{dropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
					</button>
				</div>

				{/* Desktop always visible | Mobile collapsible */}
				<div className={`${dropdownOpen ? "d-block" : "d-none"} d-md-block`}>
					<ul className="list-unstyled ps-1">
						<li
							className={`mb-2 py-1 px-2 rounded ${
								selectedCategory === null
									? "bg-dark text-white"
									: "text-secondary"
							}`}
							style={{ cursor: "pointer" }}
							onClick={() => onSelectCategory(null)}
						>
							All Shoes
						</li>

						{categories.map((category) => (
							<li
								key={category.id}
								className={`mb-2 py-1 px-2 rounded ${
									selectedCategory?.id === category.id
										? "bg-dark text-white"
										: "text-secondary"
								}`}
								style={{ cursor: "pointer" }}
								onClick={() => onSelectCategory(category)}
							>
								{category.title}
							</li>
						))}
					</ul>
				</div>
			</div>
		</aside>
	);
};

export default ProductFilters;
