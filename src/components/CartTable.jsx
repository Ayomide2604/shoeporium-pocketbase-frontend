import { FaX } from "react-icons/fa6";
import formatter from "../utils/currencyFormatter";
import getImageUrl from "../utils/getImageUrl";

const CartTable = ({ items, removeFromCart, updateCart }) => {
	return (
		<div className="shop__cart__table">
			<table>
				<thead>
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
						<tr key={item.id}>
							<td className="cart__product__item">
								<img
									src={getImageUrl(
										item?.expand?.product?.id,
										item?.expand?.product?.images[0]
									)}
									alt={item.product?.name}
									style={{ width: 100, height: 100, objectFit: "contain" }}
								/>
								<div className="cart__product__item__title">
									<h6>{item.product?.name}</h6>
									{item.options && item.options.length > 0 && (
										<div style={{ fontSize: "0.9em", color: "#888" }}>
											<ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
												{item.options.map((opt) => (
													<li key={opt.id || opt.name}>
														{opt.name}: {String(opt.value)}
													</li>
												))}
											</ul>
										</div>
									)}
								</div>
							</td>
							<td className="cart__price">
								{formatter.format(item?.expand?.product?.price)}
							</td>
							<td className="cart__price">{item?.size}</td>
							<td className="cart__quantity">
								<div
									className="pro-qty"
									style={{
										display: "flex",
										alignItems: "center",
										gap: 4,
									}}
								>
									<button
										type="button"
										style={{
											width: 28,
											height: 28,
											border: "1px solid #ddd",
											background: "#fff",
											cursor: "pointer",
											borderRadius: 4,
											fontWeight: "bold",
										}}
										onClick={() =>
											updateCart(item.id, Math.max(1, item.quantity - 1))
										}
										aria-label="Decrease quantity"
									>
										-
									</button>
									<input
										type="number"
										min={1}
										value={item.quantity}
										onChange={(e) =>
											updateCart(item.id, Number(e.target.value))
										}
										style={{ width: 50, textAlign: "center" }}
										disabled
									/>
									<button
										type="button"
										style={{
											width: 28,
											height: 28,
											border: "1px solid #ddd",
											background: "#fff",
											cursor: "pointer",
											borderRadius: 4,
											fontWeight: "bold",
										}}
										onClick={() => updateCart(item.id, item.quantity + 1)}
										aria-label="Increase quantity"
									>
										+
									</button>
								</div>
							</td>
							<td className="cart__total">
								{formatter.format(item?.expand?.product?.price * item.quantity)}
							</td>
							<td className="cart__close">
								<button
									className="icon_close"
									style={{
										background: "none",
										border: "none",
										cursor: "pointer",
									}}
								>
									<FaX onClick={() => removeFromCart(item?.id)} />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default CartTable;
