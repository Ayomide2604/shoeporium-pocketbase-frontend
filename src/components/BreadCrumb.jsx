import React from "react";
import { FaAngleRight, FaBagShopping, FaHouse } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const BreadCrumb = ({ title }) => {
	const currentPath = useLocation().pathname;
	return (
		<div className="breadcrumb-option">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="breadcrumb__links d-flex align-items-center">
							<Link to="/">
								<FaHouse className="ms-2" /> Home
							</Link>
							{currentPath !== "/shop" ? (
								<>
									<FaAngleRight />
									<Link to="/shop" className="ms-2">
										<FaBagShopping /> Shop
									</Link>
								</>
							) : null}
							<span>
								<FaAngleRight /> {title}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BreadCrumb;
