import { create } from "zustand";
import pb from "./../utils/pocketbase";
import { toast } from "sonner";

const useAuthStore = create((set) => ({
	user: localStorage.getItem("pocketbase_auth")
		? JSON.parse(localStorage.getItem("pocketbase_auth"))
		: null,

	registerLoading: false,
	loginLoading: false,
	passwordResetLoading: false,

	getUser: async () => {
		const user = useAuthStore.getState().user;
		const record = await pb.collection("users").getOne(user?.record?.id, {});
		// console.log(record);
		localStorage.setItem(
			"pocketbase_auth",
			JSON.stringify({
				...JSON.parse(localStorage.getItem("pocketbase_auth")),
				record: record,
			})
		);
	},

	register: async (data, navigate) => {
		try {
			set((state) => ({ ...state, registerLoading: true }));
			const response = await pb.collection("users").create(data);
			set((state) => ({ ...state, registerLoading: false }));
			toast.success("Registration successful");
			const verify = await pb
				.collection("users")
				.requestVerification(data.email);
			navigate("/login");
			// console.log(response);
		} catch (error) {
			set((state) => ({ ...state, registerLoading: false }));
			toast.error("Registration Error");
			console.error(error);
		}
	},

	login: async (email, password, navigate, getCart) => {
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
			getCart();
			navigate("/");
			// console.log(response);
		} catch (error) {
			set((state) => ({ ...state, loginLoading: false }));
			toast.error("Login Failed");
			console.error(error);
		}
	},

	logout: async (navigate) => {
		try {
			toast.success("Logged out successfully");
			set((state) => ({ ...state, user: null }));
			localStorage.removeItem("pocketbase_auth");
			navigate("/login");
		} catch (error) {
			toast.error("logout failed");
			console.error(error);
		}
	},

	passwordReset: async (email, navigate) => {
		set((state) => ({ ...state, passwordResetLoading: true }));
		try {
			await pb.collection("users").requestPasswordReset(email);
			navigate("/login");
			toast.success(`password reset email sent to ${email}`);
			set((state) => ({ ...state, passwordResetLoading: false }));
		} catch (error) {
			console.error("Error", error);
			toast.error("Password reset failed");
		}
	},
}));

export default useAuthStore;
