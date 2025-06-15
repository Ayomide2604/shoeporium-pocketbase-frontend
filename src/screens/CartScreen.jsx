import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import CartTable from "../components/CartTable";
import CartSummary from "../components/CartSummary";
import Coupon from "./../components/Coupon";
import useCartStore from "../stores/useCartStore";
const CartScreen = () => {
	const { items, getCart, removeFromCart, updateCart } = useCartStore();

	useEffect(() => {
		getCart();
	}, []);
	return (
		<div>
			<BreadCrumb title="Shopping Cart" />
			<section className="shop-cart spad">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<CartTable
								items={items}
								removeFromCart={removeFromCart}
								updateCart={updateCart}
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6 col-md-6 col-sm-6">
							<div className="cart__btn">
								<a href="#">Continue Shopping</a>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-6">
							<div className="cart__btn update__btn">
								<a href="#">
									<span className="icon_loading"></span> Update cart
								</a>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6">
							<Coupon />
						</div>
						<div className="col-lg-4 offset-lg-2">
							<CartSummary items={items} />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default CartScreen;
