import React from "react";
import { FaAngleRight, FaHouse } from "react-icons/fa6";

const BreadCrumb = ({ title }) => {
	return (
		<div className="breadcrumb-option">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="breadcrumb__links">
							<a href="/">
								<FaHouse className="fa fa-home" /> Home
							</a>
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
