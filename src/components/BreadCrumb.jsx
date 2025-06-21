import React from "react";
import { FaAngleRight, FaBagShopping, FaHouse } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const BreadCrumb = ({ items }) => {
	const exceptLast = items?.slice(0, -1);
	const lastItem = items[items?.length - 1];
	return (
		<section className="bg-light py-3 border-bottom">
			<div className="container">
				{/* <button className="mb-3 btn btn-dark ">Back</button> */}

				{items && (
					<div className="d-flex flex-wrap align-items-center gap-2">
						<Link
							to="/"
							className="text-decoration-none text-dark fw-semibold d-flex align-items-center gap-1"
						>
							<FaHouse /> Home
						</Link>
						{exceptLast.map((item, idx) => (
							<div key={idx} className="d-flex align-items-center">
								<FaAngleRight className="text-muted" />
								<Link
									to={item?.link}
									className="text-decoration-none text-dark fw-semibold d-flex align-items-center gap-1"
								>
									{item?.title}
								</Link>
							</div>
						))}

						<FaAngleRight className="text-muted" />

						<span className="fw-semibold text-secondary d-flex align-items-center gap-1">
							{lastItem?.title}
						</span>
					</div>
				)}
			</div>
		</section>
	);
};

export default BreadCrumb;
