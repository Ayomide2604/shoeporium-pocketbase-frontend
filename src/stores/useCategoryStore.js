import { create } from "zustand";
import pb from "./../utils/pocketbase";
const useCategoryStore = create((set) => ({
	categories: [],
	categoriesLoading: false,

	fetchCategories: async () => {
		try {
			set((state) => ({ ...state, categoriesLoading: true }));
			const response = await pb.collection("Brands").getFullList({
				sort: "-created",
			});
			set((state) => ({
				...state,
				categoriesLoading: false,
				categories: response,
			}));
			// console.log("categories:", response);
		} catch (error) {
			set((state) => ({ ...state, categoriesLoading: false }));
			console.error(error);
		}
	},
}));

export default useCategoryStore;
