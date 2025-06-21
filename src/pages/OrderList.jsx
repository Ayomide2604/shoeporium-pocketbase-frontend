import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useOrderStore from "../stores/useOrderStore";
import BreadCrumb from "../components/BreadCrumb";

const OrderList = () => {
	const { fetchUserOrders, orders } = useOrderStore();

	useEffect(() => {
		fetchUserOrders();
	}, []);

	return (
		<div className="container">
			<BreadCrumb items={[{ title: "Orders" }]} />
			<h2>Order List</h2>
			<div className="row">
				<div className="col-12">
					<table className="table table-striped">
						<thead>
							<tr>
								<th>Order Number</th>
								<th>Date</th>
								<th>Total</th>
								<th>Status</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{orders.map((order) => (
								<tr key={order.id}>
									<td>{order.id}</td>
									<td>{order.created}</td>
									<td>${order.total.toFixed(2)}</td>
									<td>{order.status}</td>
									<td>
										<Link
											to={`/orders/${order.id}`}
											className="btn btn-primary"
										>
											View Details
										</Link>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default OrderList;
