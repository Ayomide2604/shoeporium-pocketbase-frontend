import { create } from "zustand";
import pb from "./../utils/pocketbase";
const useProductStore = create((set) => ({
	products: [],
	productsLoading: false,
	product: null,
	productLoading: false,

	fetchProducts: async () => {
		try {
			set((state) => ({ ...state, productsLoading: true }));
			const response = await pb.collection("Products").getFullList({
				sort: "-created",
			});
			set((state) => ({
				...state,
				productsLoading: false,
				products: response,
			}));
			// console.log("products:", response);
		} catch (error) {
			set((state) => ({ ...state, productsLoading: false }));
			console.error(error);
		}
	},

	fetchProductById: async (id) => {
		try {
			set((state) => ({ ...state, productLoading: true }));
			const response = await pb.collection("Products").getOne(id, {expand: 'brand'});
			set((state) => ({ ...state, product: response, productLoading: false }));
			// console.log(response);
		} catch (error) {
			set((state) => ({ ...state, productLoading: false }));
			console.error(error);
		}
	},
}));

export default useProductStore;
