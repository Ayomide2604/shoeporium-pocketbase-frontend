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
import CheckoutScreen from "./screens/CheckoutScreen";
import ForgotPassword from "./pages/ForgotPassword";
import OrderList from "./pages/OrderList";
import OrderDetail from "./pages/OrderDetail";
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
					<Route path="/checkout" element={<CheckoutScreen />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/orders" element={<OrderList />} />
					<Route path="/orders/:id" element={<OrderDetail />} />
				</Routes>
			</div>
			<Footer />
		</>
	);
}

export default App;
