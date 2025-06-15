import nike from "../assets/img/nike.jpg";
import newBalance from "../assets/img/newbalance.webp";
import puma from "../assets/img/puma.jpeg";
import adidas from "../assets/img/adidas.jpg";

const Hero = () => {
	return (
		<section className="categories">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-6 p-0">
						<div
							className="categories__item categories__large__item set-bg"
							data-setbg="img/categories/category-1.jpg"
						>
							<div className="categories__text">
								<h1>Shoeporium</h1>
								<p>
									Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
									incidid-unt labore edolore magna aliquapendisse ultrices
									gravida.
								</p>
								<a href="#">Shop now</a>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="row">
							<div className="col-lg-6 col-md-6 col-sm-6 p-0">
								<div className="categories__item set-bg">
									<div
										className="blurred-bg"
										style={{ backgroundImage: `url(${adidas})` }}
									/>
									<div className="categories__text">
										<h4>Adidas</h4>
										<a href="#">Shop now</a>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-6 p-0">
								<div className="categories__item set-bg">
									<div
										className="blurred-bg"
										style={{ backgroundImage: `url(${nike})` }}
									/>
									<div className="categories__text">
										<h4>Nike</h4>
										<a href="#">Shop now</a>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-6 p-0">
								<div className="categories__item set-bg">
									<div
										className="blurred-bg"
										style={{ backgroundImage: `url(${puma})` }}
									/>
									<div className="categories__text">
										<h4>Puma</h4>
										<a href="#">Shop now</a>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-6 p-0">
								<div className="categories__item set-bg">
									<div
										className="blurred-bg"
										style={{ backgroundImage: `url(${newBalance})` }}
									/>
									<div className="categories__text">
										<h4>New Balance</h4>
										<a href="#">Shop now</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
