import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./../assets/css/swiper-custom.css";
import getImageUrl from "../utils/getImageUrl";
const ProductDetailImage = ({
	product,
	activeIndex,
	setActiveIndex,
	swiperRef,
}) => {
	return (
		<div className="product__details__pic">
			<div className="product__details__pic__left product__thumb nice-scroll">
				{product?.images?.map((image, idx) => (
					<a
						key={idx}
						className={`pt${activeIndex === idx ? " active" : ""}`}
						href="#"
						onClick={(e) => {
							e.preventDefault();
							setActiveIndex(idx);
						}}
						style={{ cursor: "pointer" }}
					>
						<img
							src={getImageUrl(product.id, image)}
							alt=""
							style={{ objectFit: "contain" }}
						/>
					</a>
				))}
			</div>
			<div className="product__details__slider__content">
				<Swiper
					spaceBetween={10}
					slidesPerView={1}
					navigation
					modules={[Navigation]}
					style={{ width: "100%", height: "400px" }}
					onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
					initialSlide={activeIndex}
					ref={swiperRef}
				>
					{product?.images?.map((image, idx) => (
						<SwiperSlide key={idx}>
							<img
								src={getImageUrl(product.id, image)}
								alt=""
								style={{
									width: "100%",
									height: "100%",
									objectFit: "contain",
								}}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default ProductDetailImage;
