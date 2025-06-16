import useProductStore from "../stores/useProductStore";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import BreadCrumb from "../components/BreadCrumb";
import ProductFilters from "../components/ProductFilters";
import useCategoryStore from "../stores/useCategoryStore";
import Pagination from "./../components/Pagination";
const ProductScreen = () => {
	const { products, fetchProducts, productsLoading } = useProductStore();
	const { categories, fetchCategories, categoriesLoading } = useCategoryStore();
	const [activeCategory, setActiveCategory] = useState(null);
	const [filteredProducts, setFilteredProducts] = useState(products);

	const handleCategoryChange = (categoryId) => {
		setActiveCategory(categoryId);
	};

	useEffect(() => {
		fetchProducts();
		fetchCategories();
	}, []);

	useEffect(() => {
		if (activeCategory) {
			const filtered = products.filter(
				(product) => product.brand === activeCategory.id
			);
			setFilteredProducts(filtered);
		} else {
			setFilteredProducts(products);
		}
	}, [activeCategory, products]);

	if (productsLoading || categoriesLoading) {
		return <Loader />;
	}

	return (
		<>
			<BreadCrumb title="Shop" />
			<section className="shop spad">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-3">
							<ProductFilters
								categories={categories}
								selectedCategory={activeCategory}
								onSelectCategory={handleCategoryChange}
							/>
						</div>
						<div className="col-lg-9 col-md-9">
							<div className="row">
								{filteredProducts && filteredProducts.length === 0 && (
									<h2>No products available</h2>
								)}

								{filteredProducts.map((product) => {
									return (
										<div key={product.id} className="col-lg-4 col-md-6">
											<Product
												id={product.id}
												name={product.name}
												price={product.price}
												image={product.images[0]}
											/>
										</div>
									);
								})}

								<div className="col-lg-12 text-center">
									<Pagination />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ProductScreen;
