import {
	FaBagShopping,
	FaBars,
	FaCaretDown,
	FaRegHeart,
} from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/img/logo.png";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";
import useCartStore from "../stores/useCartStore";
import Search from "./Search";
import OffCanvas from "./OffCanvas";
import getImageUrl from "../utils/getImageUrl";

const Header = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [search, setSearch] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const { user, logout } = useAuthStore();
	const { total } = useCartStore();
	const navigate = useNavigate();

	return (
		<>
			<OffCanvas
				menuOpen={menuOpen}
				onClose={() => setMenuOpen(false)}
				total={total}
				user={user}
				logout={logout}
				dropdownOpen={dropdownOpen}
				setDropdownOpen={setDropdownOpen}
			/>
			<header className="navbar navbar-expand-lg bg-white shadow-sm py-2 fixed-top z-3">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						<img src={logo} alt="Logo" style={{ height: 60 }} />
					</Link>
					<button className="navbar-toggler" onClick={() => setMenuOpen(true)}>
						<FaBars />
					</button>
					<div className="collapse navbar-collapse d-none d-lg-block">
						<ul className="navbar-nav mx-auto">
							<li className="nav-item">
								<Link className="nav-link" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/about">
									About
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/shop">
									Shop
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/contact">
									Contact
								</Link>
							</li>
						</ul>
						<div className="d-flex align-items-center gap-3">
							<FaSearch
								style={{ cursor: "pointer" }}
								onClick={() => setSearch(true)}
								size={20}
							/>
							<Link to="#">
								<FaRegHeart color="black" size={20} />
							</Link>
							<Link to="/cart" className="position-relative">
								<FaBagShopping color="black" size={20} />
								{total > 0 && (
									<span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
										{total}
									</span>
								)}
							</Link>
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
													? getImageUrl(
															"_pb_users_auth_",
															user?.record?.id,
															user?.record?.avatar
													  )
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
									<div className="offcanvas__auth">
										<Link
											className="me-2"
											to="/login"
											style={{ textDecoration: "none", color: "#000" }}
										>
											Login
										</Link>
										<Link
											className=""
											to="/register"
											style={{ textDecoration: "none", color: "#000" }}
										>
											Register
										</Link>
									</div>
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
					</div>
				</div>
			</header>
			<Search search={search} onClose={setSearch} />
		</>
	);
};

export default Header;
