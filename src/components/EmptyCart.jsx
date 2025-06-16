import { Link } from "react-router-dom";
// import emptyCartImage from "../assets/img/empty-cart.png";

const EmptyCart = () => {
	return (
		<div className="empty-cart text-center spad">
			<img
				src={null}
				alt="Empty Cart"
				className="img-fluid mb-4"
				style={{ maxWidth: "250px" }}
			/>
			<h3>Your cart is empty</h3>
			<p className="mb-4">
				Looks like you haven’t added anything to your cart yet.
			</p>
			<Link to="/shop" className="site-btn">
				Continue Shopping
			</Link>
		</div>
	);
};

export default EmptyCart;
