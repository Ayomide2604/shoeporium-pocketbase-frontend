import React from "react";
import formatter from "../utils/currencyFormatter";

const OrderSummary = ({ createOrder, items }) => {
	const shippingFee = 3000;
	const subtotal = items.reduce(
		(sum, item) => sum + item?.expand?.product?.price * item.quantity,
		0
	);
	const total = subtotal + shippingFee;
	return (
		<div className="checkout__order">
			<h5>Your order</h5>
			<div className="checkout__order__product">
				<ul>
					<li>
						<span className="top__text">Product</span>
						<span className="top__text__right">Total</span>
					</li>
					{items.map((item, idx) => (
						<li>
							{idx + 1}. {item.expand.product.name}{" "}
							<span>{formatter.format(item.expand.product.price)}</span>
						</li>
					))}
				</ul>
			</div>
			<div className="checkout__order__total">
				<ul>
					<li>
						Subtotal <span>{formatter.format(subtotal)}</span>
					</li>
					<li>
						Shipping Fee <span>{formatter.format(shippingFee)}</span>
					</li>
					<li>
						Total <span>{formatter.format(total)}</span>
					</li>
				</ul>
			</div>

			<button type="submit" className="site-btn" onClick={createOrder}>
				Place order
			</button>
		</div>
	);
};

export default OrderSummary;
