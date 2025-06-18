import React from "react";
import { FaAngleRight, FaBagShopping, FaHouse } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const BreadCrumb = ({ title }) => {
	const currentPath = useLocation().pathname;

	return (
		<section className="bg-light py-3 border-bottom">
			<div className="container">
				<div className="d-flex flex-wrap align-items-center gap-2">
					<Link
						to="/"
						className="text-decoration-none text-dark fw-semibold d-flex align-items-center gap-1"
					>
						<FaHouse /> Home
					</Link>

					{currentPath !== "/shop" && (
						<>
							<FaAngleRight className="text-muted" />
							<Link
								to="/shop"
								className="text-decoration-none text-dark fw-semibold d-flex align-items-center gap-1"
							>
								<FaBagShopping /> Shop
							</Link>
						</>
					)}

					<FaAngleRight className="text-muted" />

					<span className="fw-semibold text-secondary d-flex align-items-center gap-1">
						{title}
					</span>
				</div>
			</div>
		</section>
	);
};

export default BreadCrumb;
