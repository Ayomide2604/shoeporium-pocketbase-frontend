import React, { useEffect, useState } from "react";
import CheckoutForm from "../components/CheckoutForm";
import OrderSummary from "../components/OrderSummary";
import Coupon from "../components/Coupon";
import { FaX } from "react-icons/fa6";
import useOrderStore from "./../stores/useOrderStore";
import useCartStore from "../stores/useCartStore";
import useAuthStore from "../stores/useAuthStore";

const CheckoutScreen = () => {
	const [showCoupon, setShowCoupon] = useState(false);
	const { createOrderFromCart } = useOrderStore();
	const { getCart, items } = useCartStore();
	const { user } = useAuthStore();

	const [shippingData, setShippingData] = useState({
		firstName: "",
		lastName: "",
		email: user?.record?.email || "",
		phone: "",
		state: "",
		city: "",
		address: "",
		notes: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setShippingData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	useEffect(() => {
		getCart();
	}, []);

	return (
		<section className="checkout spad">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<h6 className="coupon__link">
							<span className="icon_tag_alt"></span> Have a coupon? Click
							<span
								href="#"
								onClick={() => setShowCoupon(!showCoupon)}
								style={{ cursor: "pointer" }}
							>
								{" "}
								here{" "}
							</span>
							to enter your code.
						</h6>
					</div>
				</div>
				<div
					className={`d-flex justify-content-end align-items-center mb-5 ${
						showCoupon ? "" : "d-none"
					}`}
				>
					<span>
						<Coupon />
					</span>
					<span
						className="mx-2"
						style={{ cursor: "pointer" }}
						onClick={() => setShowCoupon(false)}
					>
						<FaX />
					</span>
				</div>
				<div className="row d-flex">
					<div className="col-12 col-md-8 p-3">
						<CheckoutForm
							shippingData={shippingData}
							handleChange={handleChange}
						/>
					</div>
					<div className="col-12 col-md-4 mt-5">
						<OrderSummary
							createOrder={createOrderFromCart}
							items={items}
							shippingData={shippingData}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CheckoutScreen;
