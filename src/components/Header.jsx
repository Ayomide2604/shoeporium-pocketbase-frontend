import { FaBagShopping, FaBars, FaRegHeart } from "react-icons/fa6";
import logo from "../assets/img/logo.png";
import OffCanvas from "./OffCanvas";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";
import useCartStore from "../stores/useCartStore";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const { user, logout } = useAuthStore();
	const { total } = useCartStore();

	const handleClose = () => {
		setMenuOpen(false);
	};
	return (
		<>
			<OffCanvas menuOpen={menuOpen} onClose={handleClose} />
			<header className="header">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-3 col-lg-2">
							<div className="header__logo">
								<Link to="/">
									<img src={logo} alt="" />
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
										<Link to="/about">about</Link>
									</li>
									<li>
										<Link to="/shop">Shop</Link>
									</li>
									<li>
										<Link to="#">Pages</Link>
										<ul className="dropdown">
											<li>
												<Link to="./product-details.html">Product Details</Link>
											</li>
											<li>
												<Link to="./shop-cart.html">Shop Cart</Link>
											</li>
											<li>
												<Link to="./checkout.html">Checkout</Link>
											</li>
											<li>
												<Link to="./blog-details.html">Blog Details</Link>
											</li>
										</ul>
									</li>
									<li>
										<Link to="./blog.html">Blog</Link>
									</li>
									<li>
										<Link to="./contact.html">Contact</Link>
									</li>
								</ul>
							</nav>
						</div>
						<div className="col-lg-3">
							<div className="header__right">
								<div className="header__right__auth">
									{user ? (
										<>
											<Link to="#">Welcome, ({user?.record?.firstName})</Link>
											<Link to="#" onClick={logout}>
												Logout
											</Link>
										</>
									) : (
										<>
											<Link to="/login">Login</Link>
											<Link to="/register">Register</Link>
										</>
									)}
								</div>
								<ul className="header__right__widget">
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
							</div>
						</div>
					</div>
					{!menuOpen && (
						<div className="canvas__open">
							<FaBars onClick={() => setMenuOpen(true)} />
						</div>
					)}
				</div>
			</header>
		</>
	);
};

export default Header;
