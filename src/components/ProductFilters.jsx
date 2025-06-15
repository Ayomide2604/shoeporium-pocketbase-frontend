import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const ShopSidebar = ({ categories, selectedCategory, onSelectCategory }) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	return (
		<div className="shop__sidebar">
			<div className="sidebar__categories">
				<div className="section-title">
					<h4>Brands</h4>
				</div>
				<div className="categories__accordion">
					<div className="accordion" id="accordionExample">
						<div className="card">
							<div
								className="card-heading active d-flex justify-content-between align-items-center mb-3"
								onClick={() => setDropdownOpen(!dropdownOpen)}
							>
								<a data-toggle="collapse" data-target="#collapseOne">
									{selectedCategory ? selectedCategory.title : "All Shoes"}
								</a>

								{dropdownOpen ? (
									<FaAngleUp size={10} />
								) : (
									<FaAngleDown size={10} />
								)}
							</div>
							<div className={`collapse ${dropdownOpen && "show"}`}>
								<div className="card-body">
									<ul className="text-secondary ">
										<li className="mb-2" style={{ cursor: "pointer" }}>
											All Shoes
										</li>
										{categories.map((category) => (
											<li
												className="mb-2 "
												key={category.id || category.name}
												onClick={() => onSelectCategory(category)}
												style={{ cursor: "pointer" }}
											>
												{category.title}
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShopSidebar;
