import React from "react";
import useAuthStore from "../stores/useAuthStore";

const CheckoutForm = ({ shippingData, handleChange }) => {
	const { user } = useAuthStore();

	return (
		<form action="#" className="checkout__form" autoComplete="off">
			<h5>Billing details</h5>
			<div className="row">
				<div className="col-lg-6 col-md-6 col-sm-6">
					<div className="checkout__form__input">
						<p>
							First Name <span>*</span>
						</p>
						<input
							type="text"
							name="firstName"
							value={shippingData.firstName}
							required
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="col-lg-6 col-md-6 col-sm-6">
					<div className="checkout__form__input">
						<p>
							Last Name <span>*</span>
						</p>
						<input
							type="text"
							name="lastName"
							value={shippingData.lastName}
							required
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="col-lg-6 col-md-6 col-sm-6">
					<div className="checkout__form__input">
						<p>
							Email <span>*</span>
						</p>
						<input
							type="email"
							name="email"
							value={shippingData.email}
							required
							disabled
						/>
					</div>
				</div>
				<div className="col-lg-6 col-md-6 col-sm-6">
					<div className="checkout__form__input">
						<p>
							Phone <span>*</span>
						</p>
						<input
							type="text"
							name="phone"
							value={shippingData.phone}
							required
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="col-lg-12">
					<div className="row">
						<div className="col-lg-6 col-md-6 col-sm-6">
							<div className="checkout__form__input">
								<p>
									State <span>*</span>
								</p>
								<select
									name="state"
									className="form-control"
									style={{ height: "48px", fontSize: "16px" }}
									required
									value={shippingData.state}
									onChange={handleChange}
								>
									<option value="">Select State</option>
									<option value="lagos">Lagos</option>
									<option value="ibadan">Ibadan</option>
									<option value="ogun">Ogun</option>
								</select>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-6">
							<div className="checkout__form__input">
								<p>
									Town/City <span>*</span>
								</p>
								<input
									type="text"
									name="city"
									value={shippingData.city}
									required
									onChange={handleChange}
								/>
							</div>
						</div>
					</div>
					<div className="checkout__form__input">
						<p>
							Address <span>*</span>
						</p>
						<input
							type="text"
							name="address"
							value={shippingData.address}
							placeholder="Street Address"
							required
							onChange={handleChange}
						/>
					</div>
					<div className="checkout__form__input">
						<p>Notes</p>
						<textarea
							name="notes"
							value={shippingData.notes}
							rows={5}
							placeholder="Notes about your order, e.g., special note for delivery"
							onChange={handleChange}
						/>
					</div>
				</div>
			</div>
		</form>
	);
};

export default CheckoutForm;
