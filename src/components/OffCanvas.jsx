import { Link } from "react-router-dom";
import logo from "../assets/img//logo.png";
import { FaBagShopping, FaRegHeart } from "react-icons/fa6";
const OffCanvas = ({ menuOpen, onClose }) => {
	return (
		<>
			<div className={`offcanvas-menu-overlay ${menuOpen && "active"}`} />
			<div className={`offcanvas-menu-wrapper ${menuOpen && "active"}`}>
				<div className="offcanvas__close" onClick={onClose}>
					+
				</div>
				<ul className="offcanvas__widget">
					<li>
						<span className="icon_search search-switch" />
					</li>
					<li>
						<Link to="#">
							<FaRegHeart />
							<div className="tip">2</div>
						</Link>
					</li>
					<li>
						<Link to="#">
							<FaBagShopping />
							<div className="tip">2</div>
						</Link>
					</li>
				</ul>
				<div className="offcanvas__logo">
					<Link to="./index.html">
						<img src={logo} alt="" />
					</Link>
				</div>
				
				<div className="offcanvas__auth">
					<Link to="#">Login</Link>
					<Link to="#">Register</Link>
				</div>
			</div>
		</>
	);
};

export default OffCanvas;
