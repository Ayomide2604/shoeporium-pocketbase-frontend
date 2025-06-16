const ProductTabs = ({ selectedCategory, onSelect, categories }) => {
	return (
		<div className="filter__controls-wrapper">
			<ul className="filter__controls">
				<li
					className={` mx-2 ${selectedCategory === null ? "active" : ""}`}
					onClick={() => onSelect(null)}
				>
					All
				</li>

				{categories.map((category) => (
					<li
						key={category.id}
						onClick={() => onSelect(category.id)}
						className={` mx-2 ${
							selectedCategory === category.id ? "active" : ""
						}`}
					>
						{category.title}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ProductTabs;
