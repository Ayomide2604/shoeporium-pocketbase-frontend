import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const Pagination = () => {
	return (
		<div className="pagination__option">
			<a href="#">
				<FaAngleLeft />
			</a>
			<a href="#">1</a>
			<a href="#">2</a>
			<a href="#">3</a>
			<a href="#">3</a>
			<a href="#">
				<FaAngleRight />
			</a>
		</div>
	);
};

export default Pagination;
