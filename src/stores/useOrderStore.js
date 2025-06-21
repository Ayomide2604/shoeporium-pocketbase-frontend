import { create } from "zustand";
import pb from "../utils/pocketbase";
import useAuthStore from "./useAuthStore";
import useCartStore from "./useCartStore";
import { toast } from "sonner";
const useOrderStore = create((set) => ({
	orders: [],
	order: null,
	loading: false,
	orderItems: [],
	orderShipping: null,

	createOrderFromCart: async (shippingData, navigate) => {
		const cartItems = useCartStore.getState().items;
		const cartId = useCartStore.getState().cart.id;
		const user = useAuthStore.getState().user.record.id;
		const payment_status = "pending";
		const order_status = "pending";
		const total = cartItems.reduce(
			(sum, item) => sum + item.expand.product.price * item.quantity,
			0
		);

		console.log("user is :", user);
		console.log("cartId is :", cartId);
		console.log("cartItems is :", cartItems);

		// Create Order
		if (cartItems.length > 0) {
			set((state) => ({ ...state, loading: true }));
			const order = await pb.collection("Order").create({
				user: user,
				paid: payment_status,
				total: total,
				status: order_status,
			});
			console.log("order created", order);
			set((state) => ({ ...state, order: order }));

			console.log("Shippping Data", shippingData);
			//  add the shipping details to order
			const shipping = await pb.collection("Shipping").create({
				firstName: shippingData.firstName,
				lastName: shippingData.lastName,
				email: shippingData.email,
				phone: shippingData.phone,
				state: shippingData.state,
				city: shippingData.city,
				address: shippingData.address,
				notes: shippingData.notes,
				user: user,
				order: order.id,
			});

			console.log("Shipping created and added to order", shipping);

			// convert cart items to order items
			const orderItems = await Promise.all(
				cartItems.map((item) => {
					const payload = {
						order: order.id,
						product: item.expand.product.id,
						price: item.expand.product.price,
						quantity: item.quantity,
						size: item.size,
					};
					console.log("Creating order items with ", payload);
					return pb.collection("Order_Item").create(payload);
				})
			);

			console.log("Cart items converted");

			// Delete Cart Items
			await Promise.all(
				cartItems.map((item) => pb.collection("Cart_Item").delete(item.id))
			);
			console.log("Cart items deleted");

			// Update Order state in store
			set((state) => ({
				...state,
				orders: [...state.orders, order],
				order: order,
			}));

			console.log("order updated in state");
			set((state) => ({ ...state, loading: false }));
			navigate(`/orders/${order?.id}`);
			toast.success("Order Placed Successfully");
		} else {
			toast.warning("You cannot place an empty order");
		}
	},

	fetchUserOrders: async () => {
		const user = useAuthStore.getState().user.record.id;

		const orders = await pb.collection("Order").getFullList({
			filter: `user="${user}"`,
		});

		set((state) => ({ ...state, orders: orders }));

		console.log(orders);
	},

	fetchOrderById: async (id) => {
		const order = await pb.collection("Order").getOne(id, {});

		const orderItems = await pb.collection("Order_Item").getFullList({
			expand: "product",
			filter: `order="${order?.id}"`,
		});

		const shipping = await pb
			.collection("Shipping")
			.getFirstListItem(`order="${order.id}"`, {});

		// console.log("order:", order);
		// console.log("shipping:", shipping);
		// console.log("items:", orderItems);

		set((state) => ({
			...state,
			order: order,
			orderShipping: shipping,
			orderItems: orderItems,
		}));
	},
}));

export default useOrderStore;
