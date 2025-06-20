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
		<div className="row product__details__pic g-3">
			{/* Thumbnails: hidden on screens smaller than md */}
			<div className="col-md-2 d-none d-md-block product__details__pic__left product__thumb overflow-auto">
				{product?.images?.map((image, idx) => (
					<a
						key={idx}
						href="#"
						className={`pt${activeIndex === idx ? " active" : ""} d-block mb-2`}
						onClick={(e) => {
							e.preventDefault();
							setActiveIndex(idx);
						}}
						style={{ cursor: "pointer" }}
					>
						<img
							src={getImageUrl(product, image)}
							alt=""
							className="img-fluid border"
							style={{ objectFit: "cover", height: "80px" }}
						/>
					</a>
				))}
			</div>

			{/* Swiper */}
			<div className="col-12 col-md-10 product__details__slider__content ">
				<Swiper
					spaceBetween={10}
					slidesPerView={1}
					navigation
					modules={[Navigation]}
					onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
					initialSlide={activeIndex}
					ref={swiperRef}
					style={{ width: "100%", height: "100%" }}
				>
					{product?.images?.map((image, idx) => (
						<SwiperSlide key={idx}>
							<img
								src={getImageUrl(product, image)}
								alt=""
								className="img-fluid w-100"
								style={{ maxHeight: "400px", objectFit: "cover" }}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default ProductDetailImage;
