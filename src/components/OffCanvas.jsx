import { Link } from "react-router-dom";
import logo from "../assets/img//logo.png";
import { FaBagShopping, FaRegHeart } from "react-icons/fa6";
const OffCanvas = ({ menuOpen, onClose, total }) => {
	return (
		<>
			<div className={`offcanvas-menu-overlay ${menuOpen && "active"}`} />
			<div className={`offcanvas-menu-wrapper ${menuOpen && "active"}`}>
				<div className="offcanvas__close" onClick={onClose}>
					+
				</div>
				<ul className="offcanvas__widget" onClick={onClose}>
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
						<Link to="/cart">
							<FaBagShopping />
							<div className="tip">{total}</div>
						</Link>
					</li>
				</ul>
				<div className="offcanvas__logo" onClick={onClose}>
					<Link to="/">
						<img src={logo} alt="" />
					</Link>
				</div>

				<div id="mobile-menu-wrap">
					<div className="slicknav_menu">
						<a
							href="#"
							aria-haspopup="true"
							role="button"
							tabIndex="0"
							className="slicknav_btn slicknav_collapsed"
							style={{ outline: "none" }}
						>
							<span className="slicknav_menutxt">MENU</span>
							<span className="slicknav_icon">
								<span className="slicknav_icon-bar"></span>
								<span className="slicknav_icon-bar"></span>
								<span className="slicknav_icon-bar"></span>
							</span>
						</a>
						<nav
							className="slicknav_nav slicknav_hidden"
							aria-hidden="true"
							role="menu"
							style={{ display: "none" }}
						>
							<ul className="list-unstyled" onClick={onClose}>
								<li className="mb-2">
									<Link to="/" role="menuitem" style={{ textDecoration: "none" }}>
										Home
									</Link>
								</li>
								<li className="mb-2">
									<Link to="/about" role="menuitem" style={{ textDecoration: "none" }}>
										About
									</Link>
								</li>
								<li className="mb-2">
									<Link to="/shop" role="menuitem" style={{ textDecoration: "none" }}>
										Shop
									</Link>
								</li>
								<li className="mb-2">
									<Link to="/contact" role="menuitem" style={{ textDecoration: "none" }}>
										Contact
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>

				<div className="offcanvas__auth" onClick={onClose}>
					<Link to="/login">Login</Link>
					<Link to="/register">Register</Link>
				</div>
			</div>
		</>
	);
};

export default OffCanvas;
