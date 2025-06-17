import { create } from "zustand";
import pb from "./../utils/pocketbase";
import { toast } from "sonner";

const useAuthStore = create((set) => ({
	user: localStorage.getItem("pocketbase_auth")
		? JSON.parse(localStorage.getItem("pocketbase_auth"))
		: null,

	registerLoading: false,
	loginLoading: false,

	register: async (data, navigate) => {
		try {
			set((state) => ({ ...state, registerLoading: true }));
			const response = await pb.collection("users").create(data);
			set((state) => ({ ...state, registerLoading: false }));
			toast.success("Registration successful");
			navigate("/login");
			// console.log(response);
		} catch (error) {
			set((state) => ({ ...state, registerLoading: false }));
			toast.error("Registration Error");
			console.error(error);
		}
	},

	login: async (email, password, navigate) => {
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
			toast.success("Login successful");
			navigate("/");
			// console.log(response);
		} catch (error) {
			set((state) => ({ ...state, loginLoading: false }));
			toast.error("Login Failed");
			console.error(error);
		}
	},

	logout: async () => {
		try {
			toast.success("Logged out successfully");
			set((state) => ({ ...state, user: null }));
			localStorage.removeItem("pocketbase_auth");
		} catch (error) {
			alert("logout failed");
			console.error(error);
		}
	},
}));

export default useAuthStore;
