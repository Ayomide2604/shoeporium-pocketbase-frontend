import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img//logo.png";
import { FaBagShopping, FaRegHeart, FaCaretDown } from "react-icons/fa6";
import getImageUrl from "../utils/getImageUrl";
import { FaSearch } from "react-icons/fa";

const OffCanvas = ({
	menuOpen,
	onClose,
	total,
	user,
	logout,
	dropdownOpen,
	setDropdownOpen,
}) => {
	const navigate = useNavigate();

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
						<Link to="#" className="me-3">
							<FaSearch />
						</Link>

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
				<div
					className="offcanvas__logo d-flex justify-content-center align-items-center"
					onClick={onClose}
				>
					<Link to="/">
						<img
							src={logo}
							alt=""
							className="img-fluid"
							style={{ maxHeight: 150 }}
						/>
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
									<Link
										to="/"
										role="menuitem"
										style={{ textDecoration: "none" }}
									>
										Home
									</Link>
								</li>
								<li className="mb-2">
									<Link
										to="/about"
										role="menuitem"
										style={{ textDecoration: "none" }}
									>
										About
									</Link>
								</li>
								<li className="mb-2">
									<Link
										to="/shop"
										role="menuitem"
										style={{ textDecoration: "none" }}
									>
										Shop
									</Link>
								</li>
								<li className="mb-2">
									<Link
										to="/contact"
										role="menuitem"
										style={{ textDecoration: "none" }}
									>
										Contact
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>

				<div className="position-relative">
					{user ? (
						<div
							className="d-flex align-items-center gap-2"
							onClick={() => setDropdownOpen(!dropdownOpen)}
							style={{ cursor: "pointer" }}
						>
							<img
								src={
									user?.record?.avatar
										? getImageUrl(user?.record, user?.record?.avatar)
										: logo
								}
								alt="User"
								className="rounded-circle border"
								style={{
									width: "36px",
									height: "36px",
									objectFit: "cover",
								}}
							/>
							<FaCaretDown />
						</div>
					) : (
						<>
							<div className="offcanvas__auth" onClick={onClose}>
								<Link to="/login">Login</Link>
								<Link to="/register">Register</Link>
							</div>
						</>
					)}
					{dropdownOpen && user && (
						<ul
							className="dropdown-menu show"
							style={{ position: "absolute", top: "100%", right: 0 }}
						>
							<li>
								<Link className="dropdown-item" to="/profile">
									Profile
								</Link>
							</li>
							<li>
								<Link className="dropdown-item" to="/orders">
									Orders
								</Link>
							</li>
							<li>
								<Link className="dropdown-item" to="/settings">
									Settings
								</Link>
							</li>
							<li>
								<button
									className="dropdown-item text-danger"
									onClick={() => {
										logout(navigate);
										setDropdownOpen(false);
									}}
								>
									Logout
								</button>
							</li>
						</ul>
					)}
				</div>
			</div>
		</>
	);
};

export default OffCanvas;
