import { create } from "zustand";
import pb from "../utils/pocketbase";
import useAuthStore from "./useAuthStore";

const useCartStore = create((set, get) => ({
	cart: localStorage.getItem("pocketbase_cart")
		? JSON.parse(localStorage.getItem("pocketbase_cart"))
		: null,
	items: [],
	total: 0,

	getCart: async () => {
		try {
			const cart = await pb.collection("Cart").getFullList({
				filter: `user="${useAuthStore.getState().user.record.id}"`,
			});

			if (cart.length > 0) {
				const userCart = cart[0];
				set((state) => ({ ...state, cart: userCart }));
				localStorage.setItem("pocketbase_cart", JSON.stringify(userCart));
				// console.log("cartId:", userCart.id);

				const cartItems = await pb.collection("Cart_Item").getFullList({
					filter: `cart="${userCart.id}"`,
					expand: "product",
				});

				// console.log("cartItems: ", cartItems);
				set((state) => ({
					...state,
					items: cartItems,
					total: cartItems.length,
				}));
				// console.log("items: ", cartItems);
			} else {
				const newCart = await pb.collection("Cart").create({
					user: `${useAuthStore.getState().user.record.id}`,
				});
			}
		} catch (err) {
			console.error("Get cart error:", err);
		}
	},

	// Add item to cart
	addToCart: async (productId, quantity = 1, size) => {
		try {
			const cart = useCartStore.getState().cart;

			// Get all cart items for the current cart
			const items = await pb.collection("Cart_Item").getFullList({
				filter: `cart="${cart.id}"`,
			});
			console.log("items:", items);

			// Check if an item with the same product and size already exists
			const existingItem = items.find(
				(item) => item.product === productId && item.size === size
			);

			if (existingItem) {
				// If it exists, increment the quantity
				const updatedQuantity = existingItem.quantity + quantity;
				const response = await pb
					.collection("Cart_Item")
					.update(existingItem.id, {
						quantity: updatedQuantity,
					});
				useCartStore.getState().getCart();
				console.log("Updated item:", response);
			} else {
				// Otherwise, create a new cart item
				const response = await pb.collection("Cart_Item").create({
					product: productId,
					quantity,
					size,
					cart: cart.id,
				});
				useCartStore.getState().getCart();
				// console.log("Created item:", response);
			}
		} catch (err) {
			console.error("Add to cart error:", err);
		}
	},

	// Remove item
	removeFromCart: async (itemId) => {
		try {
			const response = await pb.collection("Cart_Item").delete(itemId);
			console.log(response);
			alert("removed item from cart");
			useCartStore.getState().getCart();
		} catch (err) {
			console.error("Remove from cart error:", err);
		}
	},

	// Update quantity
	updateCart: async (itemId, quantity) => {
		try {
			const response = await pb.collection("Cart_Item").update(itemId, {
				quantity: quantity,
			});
			useCartStore.getState().getCart();
			alert("updated product quantity");

			console.log("Updated Cart Item Quantity", response);
		} catch (err) {
			console.error("Update cart error:", err);
		}
	},

	// // Clear cart
	// clearCart: async () => {
	// 	try {
	// 		const user = await swell.account.get();

	// 		await swell.cart.setItems([]);
	// 		set({ items: [] });
	// 	} catch (err) {
	// 		console.error("Clear cart error:", err);
	// 	}
	// },
}));

export default useCartStore;
