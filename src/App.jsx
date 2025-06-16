import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import ProductDetail from "./screens/ProductDetail";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
function App() {
	return (
		<>
			<Header />
			<div>
				<Routes>
					<Route path="/" element={<HomeScreen />} />
					<Route path="/shop" element={<ProductScreen />} />
					<Route path="/shop/:id" element={<ProductDetail />} />
					<Route path="/cart" element={<CartScreen />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</div>
			<Footer />
		</>
	);
}

export default App;
