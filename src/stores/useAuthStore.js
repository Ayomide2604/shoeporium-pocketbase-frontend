import { create } from "zustand";
import pb from "./../utils/pocketbase";
const useAuthStore = create((set) => ({
	user: localStorage.getItem("pocketbase_auth")
		? JSON.parse(localStorage.getItem("pocketbase_auth"))
		: null,

	registerLoading: false,
	loginLoading: false,

	register: async (data) => {
		try {
			set((state) => ({ ...state, registerLoading: true }));
			const response = await pb.collection("users").create(data);
			set((state) => ({ ...state, registerLoading: false }));
			alert("registration successful");
			console.log(response);
		} catch (error) {
			set((state) => ({ ...state, registerLoading: false }));
			alert("registration Error");
			console.error(error);
		}
	},

	login: async (email, password) => {
		try {
			set((state) => ({ ...state, loginLoading: true }));
			const response = await pb
				.collection("users")
				.authWithPassword(email, password);
			set((state) => ({
				...state,
				loginLoading: false,
				user: JSON.parse(localStorage.getItem("pocketbase_auth")),
			}));
			alert("login successful");
			console.log(response);
		} catch (error) {
			set((state) => ({ ...state, loginLoading: false }));
			alert("registration Error");
			console.error(error);
		}
	},

	logout: async () => {
		try {
			pb.authStore.clear();
			alert("Logged out successfully");
			set((state) => ({ ...state, user: null }));
		} catch (error) {
			alert("logout failed");
			console.error(error);
		}
	},
}));

export default useAuthStore;
