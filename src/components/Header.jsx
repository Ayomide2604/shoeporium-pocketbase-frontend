import {
	FaBagShopping,
	FaBars,
	FaCaretDown,
	FaRegHeart,
} from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/img/logo.png"; // Replace with actual user image if you have
import OffCanvas from "./OffCanvas";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";
import useCartStore from "../stores/useCartStore";
import Search from "./Search";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);
	const [search, setSearch] = useState(false);
	const { user, logout } = useAuthStore();
	const { total } = useCartStore();

	const handleClose = () => {
		setMenuOpen(false);
	};

	// Close dropdown if clicked outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setDropdownOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<>
			<OffCanvas menuOpen={menuOpen} onClose={handleClose} />
			<header className="header">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-xl-3 col-lg-2">
							<div className="header__logo">
								<Link to="/">
									<img src={logo} alt="Logo" className="img-fluid" />
								</Link>
							</div>
						</div>

						<div className="col-xl-6 col-lg-7">
							<nav className="header__menu">
								<ul>
									<li className="active">
										<Link to="/">Home</Link>
									</li>
									<li>
										<Link to="/about">About</Link>
									</li>
									<li>
										<Link to="/shop">Shop</Link>
									</li>
									<li>
										<Link to="#">Pages</Link>
										<ul className="dropdown">
											<li>
												<Link to="/product-details">Product Details</Link>
											</li>
											<li>
												<Link to="/cart">Shop Cart</Link>
											</li>
											<li>
												<Link to="/checkout">Checkout</Link>
											</li>
											<li>
												<Link to="/blog-details">Blog Details</Link>
											</li>
										</ul>
									</li>
									<li>
										<Link to="/blog">Blog</Link>
									</li>
									<li>
										<Link to="/contact">Contact</Link>
									</li>
								</ul>
							</nav>
						</div>

						<div className="col-lg-3 d-none d-md-block">
							<div className="header__right d-flex align-items-center justify-content-end gap-3">
								<ul className="header__right__widget d-flex align-items-center ">
									<li>
										<Link to="#" onClick={() => setSearch(true)}>
											<FaSearch />
										</Link>
									</li>
									<li>
										<Link to="#">
											<FaRegHeart />
											<div className="tip">2</div>
										</Link>
									</li>
									<li>
										<Link to="/cart" className="position-relative">
											<FaBagShopping />
											<div className="tip">{total}</div>
										</Link>
									</li>
								</ul>

								{/* Auth User Dropdown */}
								<div
									className="header__right__auth position-relative"
									ref={dropdownRef}
								>
									{user ? (
										<div
											className="d-flex align-items-center gap-2 "
											style={{ cursor: "pointer" }}
											onClick={() => setDropdownOpen(!dropdownOpen)}
										>
											<img
												src={logo}
												alt="Profile"
												className="rounded-circle border"
												style={{
													width: "40px",
													height: "40px",
													objectFit: "contain",
												}}
											/>
											<FaCaretDown />
										</div>
									) : (
										<>
											<Link to="/login">Login</Link>
											<Link to="/register">Register</Link>
										</>
									)}

									{dropdownOpen && (
										<div
											className="bg-white border shadow-sm rounded mt-2 position-absolute"
											style={{
												right: 0,
												top: "100%",
												width: "100px",
												zIndex: 999,
											}}
										>
											<ul className="list-unstyled p-2">
												<li>
													<Link to="/profile" className="dropdown-item mb-1">
														Profile
													</Link>
												</li>
												<li>
													<Link to="/orders" className="dropdown-item mb-1">
														Orders
													</Link>
												</li>
												<li>
													<Link to="/settings" className="dropdown-item mb-1">
														Settings
													</Link>
												</li>
												<li>
													<button
														className="dropdown-item text-danger"
														onClick={() => {
															logout();
															setDropdownOpen(false);
														}}
													>
														Logout
													</button>
												</li>
											</ul>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>

					{/* Mobile menu toggle */}
					{!menuOpen && (
						<div className="canvas__open">
							<FaBars onClick={() => setMenuOpen(true)} />
						</div>
					)}
				</div>
				<Search search={search} onClose={setSearch} />
			</header>
		</>
	);
};

export default Header;
