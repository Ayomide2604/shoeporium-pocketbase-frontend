import React, { useEffect, useState } from "react";
import Hero from "../pages/Hero";
import LatestProducts from "../pages/LatestProducts";
import ProductTabs from "../components/ProductTabs";
import Loader from "./../components/Loader";
import useProductStore from "./../stores/useProductStore";
import useCategoryStore from "./../stores/useCategoryStore";
const HomeScreen = () => {
	const { products, fetchProducts, productsLoading } = useProductStore();
	const { categories, fetchCategories, categoriesLoading } = useCategoryStore();
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [filteredProducts, setFilteredProducts] = useState(products);

	const handleSelectedCategory = (categoryId) => {
		setSelectedCategory(categoryId);
	};
	useEffect(() => {
		fetchProducts();
		fetchCategories();
	}, []);

	useEffect(() => {
		if (selectedCategory) {
			const filtered = products.filter(
				(product) => product.brand === selectedCategory
			);
			setFilteredProducts(filtered);
		} else {
			setFilteredProducts(products);
		}
	}, [selectedCategory, products]);
	if (productsLoading || categoriesLoading) {
		return <Loader />;
	}
	return (
		<div>
			<Hero />
			<section className="product spad">
				<div className="container">
					<div className="row d-flex justify-content-between">
						<div className="col-lg-4 col-md-4">
							<div className="section-title">
								<h4>Latest Products</h4>
							</div>
						</div>
						<div className="col-lg-4 col-md-4">
							<ProductTabs
								categories={categories}
								selectedCategory={selectedCategory}
								onSelect={handleSelectedCategory}
							/>
						</div>
					</div>
					<LatestProducts products={filteredProducts} />
				</div>
			</section>
		</div>
	);
};

export default HomeScreen;
