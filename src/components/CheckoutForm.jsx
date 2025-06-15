import React, { useState } from "react";
import { toast } from "react-toastify";
import useOrderStore from "../store/useOrderStore";
import useAuthStore from "../store/useAuthStore";

const CheckoutForm = () => {
	// const [addNote, setAddNote] = useState(false);
	const user = useAuthStore((s) => s.user);

	const setShippingDetails = useOrderStore((s) => s.setShippingDetails);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const shipping = {
			firstName: formData.get("firstName")?.trim() || "",
			lastName: formData.get("lastName")?.trim() || "",
			phone: formData.get("phone")?.trim() || "",
			state: formData.get("state")?.trim() || "",
			city: formData.get("city")?.trim() || "",
			address: formData.get("address")?.trim() || "",
		};
		setShippingDetails(shipping);
		// Do NOT call window.handlePlaceOrder here, just update shipping details
		toast.success("Shipping details saved. You can now place your order.");
	};

	return (
		<form
			action="#"
			className="checkout__form"
			onSubmit={handleSubmit}
			autoComplete="off"
		>
			<h5>Billing details</h5>
			<div className="row">
				<div className="col-lg-6 col-md-6 col-sm-6">
					<div className="checkout__form__input">
						<p>
							First Name <span>*</span>
						</p>
						<input type="text" name="firstName" required />
					</div>
				</div>
				<div className="col-lg-6 col-md-6 col-sm-6">
					<div className="checkout__form__input">
						<p>
							Last Name <span>*</span>
						</p>
						<input type="text" name="lastName" required />
					</div>
				</div>
				<div className="col-lg-6 col-md-6 col-sm-6">
					<div className="checkout__form__input">
						<p>
							Email <span>*</span>
						</p>
						<input
							type="text"
							name="email"
							value={user?.email || ""}
							disabled
							required
						/>
					</div>
				</div>
				<div className="col-lg-6 col-md-6 col-sm-6">
					<div className="checkout__form__input">
						<p>
							Phone <span>*</span>
						</p>
						<input type="text" name="phone" required />
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
								>
									<option value="">Select State</option>
									<option value="Lagos">Lagos</option>
									<option value="Ibadan">Ibadan</option>
									<option value="Ogun">Ogun</option>
								</select>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-6">
							<div className="checkout__form__input">
								<p>
									Town/City <span>*</span>
								</p>
								<input type="text" name="city" required />
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
							placeholder="Street Address"
							required
						/>
					</div>
				</div>

				{/* Add delivery notes later */}
				{/* <div className="col-lg-12">
					<div className="checkout__form__checkbox">
						<label htmlFor="note">
							Note about your order, e.g, special note for delivery
							<input
								type="checkbox"
								id="note"
								name="addNote"
								onChange={(e) => setAddNote(e.target.checked)}
							/>
							<span className="checkmark" />
						</label>
					</div>
					<div
						className="checkout__form__input "
						style={{ display: addNote ? "block" : "none" }}
					>
						<p>
							Order notes <span>*</span>
						</p>
						<textarea
							className="form-control"
							type="text"
							name="orderNote"
							rows={5}
							placeholder="Note about your order, e.g, special note for delivery"
						/>
					</div>
				</div> */}
			</div>
		</form>
	);
};

export default CheckoutForm;
