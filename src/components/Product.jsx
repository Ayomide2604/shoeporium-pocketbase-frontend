import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { BsArrowsAngleExpand } from "react-icons/bs";
import formatter from "./../utils/currencyFormatter";
import getImageUrl from "./../utils/getImageUrl";
const Product = ({ id, name, price, image }) => {
	return (
		<div className="product__item">
			<div
				className="product__item__pic set-bg"
				style={{ position: "relative", overflow: "hidden", height: "350px" }}
			>
				<img
					src={getImageUrl("products", id, image)}
					alt={name}
					style={{
						height: "100%",
						width: "100%",
						objectFit: "cover",
						position: "absolute",
						top: 0,
						left: 0,
						zIndex: 1,
					}}
				/>
				{/* <div
					className="label new"
					style={{ position: "absolute", left: 10, top: 10, zIndex: 2 }}
				>
					New
				</div> */}
				<ul
					className="product__hover "
					style={{
						position: "absolute",
						left: 0,
						bottom: 30,
						width: "100%",
						textAlign: "center",
						zIndex: 2,
					}}
				>
					<li>
						<Link to={`/shop/${id}`} className="image-popup ">
							<BsArrowsAngleExpand className="arrow_expand" />
						</Link>
					</li>
					<li>
						<a href="#">
							<FaRegHeart className="icon_heart_alt" />
						</a>
					</li>
					{/* <li>
						<a href="#">
							<FaBagShopping className="icon_bag_alt" />
						</a>
					</li> */}
				</ul>
			</div>
			<div className="product__item__text">
				<h6 className="mb-1">
					<a href="#">{name}</a>
				</h6>
				<div className="product__price">{formatter.format(price)}</div>
			</div>
		</div>
	);
};

export default Product;
