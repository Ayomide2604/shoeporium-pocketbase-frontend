import BreadCrumb from "../components/BreadCrumb";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import useProductStore from "../stores/useProductStore";
import useCartStore from "../stores/useCartStore";
import Loader from "../components/Loader";
import formatter from "../utils/currencyFormatter";
import ProductDetailImage from "../components/ProductDetailImage";
import { toast } from "sonner";
import ErrorPage from "./../pages/ErrorPage";

const ProductDetail = () => {
	const { id } = useParams();
	const { fetchProductById, productLoading, product } = useProductStore();
	const swiperRef = useRef(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const { addToCart } = useCartStore();
	const [quantity, setQuantity] = useState(1);

	console.log(product);

	const availableSizes = product?.sizes || [];
	const [selectedSize, setSelectedSize] = useState("");

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
			toast.info("Please select a size before adding to cart.");
			return;
		}
		addToCart(productId, quantity, size);
	};

	if (productLoading) return <Loader />;

	return (
		<div>
			{product ? (
				<>
					<BreadCrumb
						items={[
							{ title: "Shop", link: "/shop" },
							{ title: `${product?.name} ` },
						]}
					/>

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
										<h1 className="h1 mb-3">{product?.name}</h1>
										<p className="badge rounded-pill bg-dark text-white px-3 py-2 fs-6 mb-3">
											{product?.expand?.brand?.title}
										</p>

										<div className="fs-3 fw-bold text-danger mb-4">
											{formatter.format(product?.price)}
										</div>

										{/* Size & Quantity in a row */}
										<div className="row gx-3 gy-3 mb-4">
											{/* Size dropdown */}
											<div className="col-6">
												<label className="form-label fw-medium">
													Select Size:
												</label>
												<select
													className="form-select py-2 fs-6"
													value={selectedSize}
													onChange={(e) => setSelectedSize(e.target.value)}
												>
													<option value="">-- Choose a size --</option>
													{availableSizes.map((size) => (
														<option key={size} value={size}>
															{size}
														</option>
													))}
												</select>
											</div>

											{/* Quantity */}
											<div className="col-6">
												<label className="form-label fw-medium">
													Quantity:
												</label>
												<div className="d-flex align-items-center gap-2">
													<button
														type="button"
														className="btn btn-outline-danger rounded-circle d-flex align-items-center justify-content-center"
														style={{ width: 36, height: 36 }}
														onClick={() =>
															setQuantity((q) => (q > 1 ? q - 1 : 1))
														}
													>
														–
													</button>
													<input
														type="text"
														className="form-control text-center fw-bold fs-6"
														value={quantity}
														readOnly
														style={{
															width: 60,
															height: 36,
															border: "1px solid #dee2e6",
															padding: 0,
														}}
													/>
													<button
														type="button"
														className="btn btn-outline-danger rounded-circle d-flex align-items-center justify-content-center"
														style={{ width: 36, height: 36 }}
														onClick={() => setQuantity((q) => q + 1)}
													>
														+
													</button>
												</div>
											</div>
										</div>

										{/* Add to Cart Button */}
										<button
											type="button"
											onClick={() =>
												handleAddToCart(product.id, quantity, selectedSize)
											}
											className="btn btn-danger w-100 py-3 fw-bold fs-5"
										>
											Add to Cart
										</button>
									</div>
								</div>
							</div>
						</div>
					</section>
				</>
			) : (
				<ErrorPage />
			)}
		</div>
	);
};

export default ProductDetail;
