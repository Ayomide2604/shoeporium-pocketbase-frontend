import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
	if (totalPages <= 1) return null;

	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<div className="pagination__option d-flex justify-content-center gap-2 flex-wrap">
			<button
				className="btn btn-sm btn-outline-dark rounded-circle"
				disabled={currentPage === 1}
				onClick={() => {
					console.log("Previous page");
					onPageChange(currentPage - 1);
				}}
			>
				<FaAngleLeft />
			</button>

			{pages.map((page) => (
				<button
					key={page}
					className={`btn btn-sm  rounded-circle ${
						page === currentPage ? "btn-dark" : "btn-outline-dark"
					}`}
					onClick={() => {
						console.log("Go to page:", page);
						onPageChange(page);
					}}
				>
					{page}
				</button>
			))}

			<button
				className="btn btn-sm  btn-outline-dark rounded-circle"
				disabled={currentPage === totalPages}
				onClick={() => {
					console.log("Next page");
					onPageChange(currentPage + 1);
				}}
			>
				<FaAngleRight />
			</button>
		</div>
	);
};

export default Pagination;
