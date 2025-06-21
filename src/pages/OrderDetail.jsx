import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useOrderStore from "../stores/useOrderStore";
import getImageUrl from "./../utils/getImageUrl";
import formatter from "./../utils/currencyFormatter";
import BreadCrumb from "./../components/BreadCrumb";

const OrderDetail = () => {
	const { id } = useParams();
	const { fetchOrderById, order, orderShipping, orderItems } = useOrderStore();

	console.log("order items before", orderItems);

	const items = orderItems.filter((item) => order === order.id);

	console.log("order items after", items);

	useEffect(() => {
		fetchOrderById(id);
	}, [id]);

	// Calculate total price for each item and the grand total
	const shippingFee = 3000;
	const subtotal = orderItems.reduce(
		(sum, item) => sum + item?.price * item?.quantity,
		0
	);
	const grandTotal = subtotal + shippingFee;

	return (
		<div className="container mt-4">
			<BreadCrumb
				items={[
					{ title: "Orders", link: "/orders" },
					{ title: `#${order?.id}`, link: "#" },
				]}
			/>
			<h2 className="mb-4">Order Details</h2>
			<div className="card mb-4">
				<div className="card-header">
					<h5>Order #{order?.id}</h5>
				</div>
				<div className="card-body">
					<div className="row">
						<div className="col-md-6">
							<h6>Shipping Details</h6>
							<p>
								<strong>Name:</strong> {orderShipping?.firstName}{" "}
								{orderShipping?.lastName}
							</p>
							<p>
								<strong>Address:</strong> {orderShipping?.address},{" "}
								{orderShipping?.city}, {orderShipping?.state},
							</p>
						</div>
						<div className="col-md-6">
							<h6>Order Status</h6>
							<p>
								<strong>Order Status:</strong> {order?.status}
							</p>
							<p>
								<strong>Payment Status:</strong> {order?.paid}
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="card mb-4">
				<div className="card-header">
					<h5>Ordered Items</h5>
				</div>
				<div className="card-body">
					{orderItems.map((item) => (
						<div key={item?.id} className="row mb-3 align-items-center">
							<div className="col-md-2">
								<img
									src={getImageUrl(
										item?.expand?.product,
										item?.expand?.product?.images[0]
									)}
									alt={item?.expand?.product?.name}
									className="img-fluid"
								/>
							</div>
							<div className="col-md-4">
								<p className="mb-0">{item?.expand?.product?.name}</p>
							</div>
							<div className="col-md-2">
								<p className="mb-0">Quantity: {item?.quantity}</p>
							</div>
							<div className="col-md-2">
								<p className="mb-0">Price: {formatter.format(item?.price)}</p>
							</div>
							<div className="col-md-2">
								<p className="mb-0">
									Total: {formatter.format(item?.price * item?.quantity)}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="card">
				<div className="card-header">
					<h5>Order Summary</h5>
				</div>
				<div className="card-body">
					<div className="row">
						<div className="col-md-6">
							<p>
								<strong>Date Ordered:</strong> {order?.created}
							</p>
						</div>
						<div className="col-md-6 text-right">
							<p>
								<strong>Subtotal:</strong> {formatter.format(subtotal)}
							</p>
							<p>
								<strong>Shipping Fee:</strong> {formatter.format(shippingFee)}
							</p>
							<p>
								<strong>Grand Total:</strong> {formatter.format(grandTotal)}
							</p>
							<div className="d-flex justify-content-end">
								{order?.status === "pending" && (
									<button className="btn btn-dark me-3 ">Make Payment</button>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderDetail;
