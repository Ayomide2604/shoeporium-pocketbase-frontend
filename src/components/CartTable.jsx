import { FaX } from "react-icons/fa6";
import formatter from "../utils/currencyFormatter";
import getImageUrl from "../utils/getImageUrl";

const CartTable = ({ items, removeFromCart, updateCart }) => {
	return (
		<div className="shop__cart__table table-responsive">
			<table className="table align-middle text-center">
				<thead className="d-none d-md-table-header-group">
					<tr>
						<th>Product</th>
						<th>Price</th>
						<th>Size</th>
						<th>Quantity</th>
						<th>Total</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{items.map((item) => (
						<tr
							key={item.id}
							className="flex-md-row flex-column d-md-table-row d-flex border-bottom p-3 p-md-0"
						>
							<td className="d-flex flex-column flex-md-row align-items-center gap-3 text-start">
								<img
									src={getImageUrl(
										"products",
										item?.expand?.product?.id,
										item?.expand?.product?.images[0]
									)}
									alt={item.product?.name}
									style={{
										width: 80,
										height: 80,
										objectFit: "cover",
										borderRadius: 8,
									}}
								/>
								<div className="cart__product__item__title">
									<h6 className="mb-1">{item.expand?.product?.name}</h6>
									{item.options && item.options.length > 0 && (
										<ul
											className="mb-0 text-muted small"
											style={{ listStyle: "none", padding: 0 }}
										>
											{item.options.map((opt) => (
												<li key={opt.id || opt.name}>
													{opt.name}: {String(opt.value)}
												</li>
											))}
										</ul>
									)}
								</div>
							</td>

							<td className="d-none d-md-table-cell">
								{formatter.format(item?.expand?.product?.price)}
							</td>

							<td className="d-none d-md-table-cell">{item?.size}</td>

							<td className="py-3">
								<div className="d-flex justify-content-center align-items-center gap-2">
									<button
										type="button"
										className={`btn btn-outline-secondary btn-sm ${
											item?.quantity === 1 && "disabled"
										}`}
										onClick={() =>
											updateCart(item.id, Math.max(1, item.quantity - 1))
										}
									>
										–
									</button>
									<input
										type="number"
										min={1}
										disabled
										value={item.quantity}
										style={{
											width: 50,
											textAlign: "center",
											border: "1px solid #ddd",
											borderRadius: 4,
											background: "#f9f9f9",
										}}
									/>
									<button
										type="button"
										className="btn btn-outline-secondary btn-sm"
										onClick={() => updateCart(item.id, item.quantity + 1)}
									>
										+
									</button>
								</div>
							</td>

							<td className="py-3 d-none d-md-table-cell">
								{formatter.format(item?.expand?.product?.price * item.quantity)}
							</td>

							<td className="py-3">
								<button
									className="btn btn-sm text-danger"
									onClick={() => removeFromCart(item?.id)}
									aria-label="Remove item"
								>
									<FaX />
								</button>
							</td>

							<td className="d-md-none pt-2">
								<div className="d-flex flex-column text-start">
									<small className="text-muted">
										Price: {formatter.format(item?.expand?.product?.price)}
									</small>
									<small className="text-muted">Size: {item?.size}</small>
									<small className="fw-bold mt-1">
										Total:{" "}
										{formatter.format(
											item?.expand?.product?.price * item.quantity
										)}
									</small>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default CartTable;
