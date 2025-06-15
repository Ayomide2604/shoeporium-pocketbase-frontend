import { useEffect } from "react";
import Product from "../components/Product";
import Hero from "../pages/Hero";
import useProductStore from "../stores/useProductStore";
import Loader from "./../components/Loader";

const HomeScreen = () => {
	const { fetchProducts, products, productsLoading } = useProductStore();
	useEffect(() => {
		fetchProducts();
	}, []);

	if (productsLoading) {
		return <Loader />;
	}
	return (
		<>
			<Hero />
			<section className="product spad">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-4">
							<div className="section-title">
								<h4>New product</h4>
							</div>
						</div>
						<div className="col-lg-8 col-md-8">
							<ul className="filter__controls">
								<li className="active" data-filter="*">
									All
								</li>
								<li data-filter=".women">Women’s</li>
								<li data-filter=".men">Men’s</li>
								<li data-filter=".kid">Kid’s</li>
								<li data-filter=".accessories">Accessories</li>
								<li data-filter=".cosmetic">Cosmetics</li>
							</ul>
						</div>
					</div>
					<div className="row property__gallery">
						{products.map((product) => (
							<div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mix">
								<Product
									id={product.id}
									name={product.name}
									image={product.images[0]}
									price={product.price}
								/>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default HomeScreen;
