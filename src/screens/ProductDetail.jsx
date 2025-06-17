import BreadCrumb from "../components/BreadCrumb";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import useProductStore from "../stores/useProductStore";
import useCartStore from "../stores/useCartStore";
import Loader from "../components/Loader";
import formatter from "../utils/currencyFormatter";

import ProductDetailImage from "../components/ProductDetailImage";

const ProductDetail = () => {
	const { id } = useParams();
	const { fetchProductById, productLoading, product } = useProductStore();
	const swiperRef = useRef(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const { addToCart } = useCartStore();
	const [quantity, setQuantity] = useState(1);
	// Find the size option from product.options

	const availableSizes = product?.sizes?.map((v) => v) || [];
	const [selectedSize, setSelectedSize] = useState("");
	// console.log("selected size:", selectedSize);

	useEffect(() => {
		fetchProductById(id);
	}, [id]);

	useEffect(() => {
		if (
			swiperRef.current &&
			swiperRef.current.swiper &&
			swiperRef.current.swiper.activeIndex !== activeIndex
		) {
			swiperRef.current.swiper.slideTo(activeIndex, 0);
		}
	}, [activeIndex]);

	const handleAddToCart = (productId, quantity = 1, size) => {
		if (!selectedSize) {
			alert("Please select a size before adding to cart.");
			return;
		}
		addToCart(productId, quantity, size);
		alert(`Product added to cart`);
	};

	if (productLoading) {
		return <Loader />;
	}
	return (
		<div>
			<BreadCrumb title={product?.name} />

			<section className="product-details spad">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<ProductDetailImage
								product={product}
								activeIndex={activeIndex}
								setActiveIndex={setActiveIndex}
								swiperRef={swiperRef}
							/>
						</div>
						<div className="col-lg-6">
							<div className="product__details__text">
								<h3>
									{product?.name}
									<div className="d-flex col-2 mt-3 ">
										<p className=" badge badge-pill bg-secondary text-white">
											{product?.expand?.brand?.title}
										</p>
									</div>
								</h3>
								{/* <div className="rating">
									<i className="fa fa-star" />
									<i className="fa fa-star" />
									<i className="fa fa-star" />
									<i className="fa fa-star" />
									<i className="fa fa-star" />
									<span>( 138 reviews )</span>
								</div> */}
								<div className="product__details__price">
									{formatter.format(product?.price)}
								</div>
								<p
									dangerouslySetInnerHTML={{
										__html: product?.description,
									}}
								/>
								{availableSizes.length > 0 && (
									<div
										className="mb-3 d-flex align-items-center flex-wrap"
										style={{ gap: 12 }}
									>
										<span style={{ fontWeight: 500, marginRight: 8 }}>
											Select Size:
										</span>
										{availableSizes.map((size) => (
											<button
												key={size}
												type="button"
												className={`btn btn-outline-dark px-3 py-2 fw-bold${
													selectedSize === String(size)
														? " bg-danger text-white"
														: ""
												}`}
												style={{
													borderRadius: 8,
													borderColor: selectedSize && "#ca1515",
													color:
														selectedSize === String(size) ? "#fff" : undefined,
													background:
														selectedSize === String(size)
															? "#ca1515"
															: undefined,
													transition: "all 0.2s",
												}}
												onClick={() => setSelectedSize(String(size))}
											>
												{size}
											</button>
										))}
									</div>
								)}
								<div className="product__details__button">
									<div className="quantity">
										<span>Quantity:</span>
										<div className="pro-qty d-flex align-items-center">
											<button
												type="button"
												className="btn btn-light border px-3 py-1 shadow-sm fs-5 fw-bold"
												style={{
													borderRadius: "50%",
													width: 36,
													height: 36,
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													color: "#ca1515",
													borderColor: "#ca1515",
													marginRight: 8,
												}}
												onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
												aria-label="Decrease quantity"
											>
												-
											</button>
											<input
												type="number"
												value={quantity}
												min={1}
												disabled
												style={{
													width: 50,
													textAlign: "center",
													background: "#fff",
													border: "none",
													fontWeight: 600,
													fontSize: 18,
												}}
												readOnly
											/>
											<button
												type="button"
												className="btn btn-light border px-3 py-1 shadow-sm fs-5 fw-bold"
												style={{
													borderRadius: "50%",
													width: 36,
													height: 36,
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													color: "#ca1515",
													borderColor: "#ca1515",
												}}
												onClick={() => setQuantity((q) => q + 1)}
												aria-label="Increase quantity"
											>
												+
											</button>
										</div>
									</div>
									<div
										style={{ cursor: "pointer" }}
										onClick={() => {
											if (quantity > 0) {
												handleAddToCart(
													product.id,
													parseInt(quantity),
													selectedSize
												);
											}
										}}
										className="cart-btn"
									>
										<span className="icon_bag_alt" /> Add to cart
									</div>
									<ul>
										<li>
											<a href="#">
												<span className="icon_heart_alt" />
											</a>
										</li>
										<li>
											<a href="#">
												<span className="icon_adjust-horiz" />
											</a>
										</li>
									</ul>
								</div>
								{/* <div className="product__details__widget">
									<ul>
										<li>
											<span>Availability:</span>
											<div className="stock__checkbox">
												<label htmlFor="stockin">
													In Stock
													<input type="checkbox" id="stockin" />
													<span className="checkmark" />
												</label>
											</div>
										</li>
										<li>
											<span>Available color:</span>
											<div className="color__checkbox">
												<label htmlFor="red">
													<input
														type="radio"
														name="color__radio"
														id="red"
														defaultChecked=""
													/>
													<span className="checkmark" />
												</label>
												<label htmlFor="black">
													<input type="radio" name="color__radio" id="black" />
													<span className="checkmark black-bg" />
												</label>
												<label htmlFor="grey">
													<input type="radio" name="color__radio" id="grey" />
													<span className="checkmark grey-bg" />
												</label>
											</div>
										</li>
										<li>
											<span>Available size:</span>
											<div className="size__btn">
												<label htmlFor="xs-btn" className="active">
													<input type="radio" id="xs-btn" />
													xs
												</label>
												<label htmlFor="s-btn">
													<input type="radio" id="s-btn" />s
												</label>
												<label htmlFor="m-btn">
													<input type="radio" id="m-btn" />m
												</label>
												<label htmlFor="l-btn">
													<input type="radio" id="l-btn" />l
												</label>
											</div>
										</li>
										<li>
											<span>Promotions:</span>
											<p>Free shipping</p>
										</li>
									</ul>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ProductDetail;
