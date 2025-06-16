import React, { useState } from "react";
import Product from "../components/Product";
import ProductTabs from "../components/ProductTabs";
// import defaultProduct from "../assets/images/default-product.png";

const LatestProducts = ({ products }) => {
	return (
		<div className="row property__gallery">
			{products && products.length === 0 && <h2>No products available</h2>}

			{products.map((product) => {
				return (
					<div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mix">
						<Product
							id={product.id}
							name={product.name}
							price={product.price}
							image={product.images[0]}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default LatestProducts;
