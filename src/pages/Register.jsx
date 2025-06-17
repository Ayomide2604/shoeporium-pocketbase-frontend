import { useRef, useState } from "react";
import useAuthStore from "./../stores/useAuthStore";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
const Register = () => {
	const [data, setData] = useState({});
	const formRef = useRef(null);
	const { register, registerLoading } = useAuthStore();
	const navigate = useNavigate();

	const handleChange = () => {
		const formData = new FormData(formRef.current);

		const data = {
			firstName: formData.get("first_name"),
			lastName: formData.get("last_name"),
			email: formData.get("email"),
			password: formData.get("password"),
			passwordConfirm: formData.get("password2"),
		};
		setData(data);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (data.password !== data.passwordConfirm) {
			toast.error("Passwords do not match");
		} else {
			register(data, navigate);
		}
	};

	if (registerLoading) {
		return <Loader />;
	}

	return (
		<div
			className="container d-flex align-items-center justify-content-center"
			style={{ minHeight: "100vh", background: "#f8f9fa" }}
		>
			<div
				className="login-card shadow p-4 rounded"
				style={{ maxWidth: 540, width: "100%", background: "#fff" }}
			>
				<div className="text-center mb-4">
					<img
						src=""
						alt="Shoeporium Logo"
						style={{ height: 60, marginBottom: 16 }}
					/>
					<h2
						className="mb-1"
						style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
					>
						Create Account
					</h2>
					<p
						className="text-muted"
						style={{ fontFamily: "Montserrat, sans-serif" }}
					>
						Sign up to get started with Shoeporium.
					</p>
				</div>
				<form ref={formRef} onChange={handleChange} onSubmit={handleSubmit}>
					<div className="row mb-3">
						<div className="col-12 col-md-6 mb-3 mb-md-0">
							<label
								htmlFor="first_name"
								className="form-label"
								style={{ fontWeight: 500 }}
							>
								First Name
							</label>
							<input
								type="text"
								className="form-control"
								id="first_name"
								placeholder="Enter your first name"
								required
								name="first_name"
								style={{
									borderRadius: 8,
									fontFamily: "Montserrat, sans-serif",
								}}
							/>
						</div>
						<div className="col-12 col-md-6">
							<label
								htmlFor="last_name"
								className="form-label"
								style={{ fontWeight: 500 }}
							>
								Last Name
							</label>
							<input
								type="text"
								className="form-control"
								id="last_name"
								placeholder="Enter your last name"
								required
								name="last_name"
								style={{
									borderRadius: 8,
									fontFamily: "Montserrat, sans-serif",
								}}
							/>
						</div>
					</div>
					<div className="mb-3">
						<label
							htmlFor="email"
							className="form-label"
							style={{ fontWeight: 500 }}
						>
							Email address
						</label>
						<input
							type="email"
							className="form-control"
							id="email"
							placeholder="Enter your email"
							required
							name="email"
							style={{ borderRadius: 8, fontFamily: "Montserrat, sans-serif" }}
						/>
					</div>
					<div className="mb-3">
						<label
							htmlFor="password"
							className="form-label"
							style={{ fontWeight: 500 }}
						>
							Password
						</label>
						<input
							type="password"
							className="form-control"
							id="password"
							placeholder="Enter your password"
							required
							name="password"
							style={{ borderRadius: 8, fontFamily: "Montserrat, sans-serif" }}
						/>
					</div>
					<div className="mb-3">
						<label
							htmlFor="confirmPassword"
							className="form-label"
							style={{ fontWeight: 500 }}
						>
							Confirm Password
						</label>
						<input
							type="password"
							className="form-control"
							id="confirmPassword"
							placeholder="Confirm your password"
							required
							name="password2"
							style={{ borderRadius: 8, fontFamily: "Montserrat, sans-serif" }}
						/>
					</div>
					{/* {(formError || error) && (
						<div className="alert alert-danger" style={{ fontSize: 14 }}>
							{formError || error}
						</div>
					)} */}
					<button
						type="submit"
						className="btn w-100"
						style={{
							background: "#ca1515",
							color: "#fff",
							fontWeight: 600,
							borderRadius: 8,
							fontFamily: "Montserrat, sans-serif",
							padding: "12px 0",
							fontSize: 16,
						}}
						disabled={registerLoading}
					>
						{registerLoading ? "Signing Up..." : "Sign Up"}
					</button>
				</form>
				<div className="text-center mt-4">
					<span style={{ fontSize: 14 }}>
						Already have an account?{" "}
						<a
							href="/login"
							className="text-decoration-none"
							style={{ color: "#ca1515", fontWeight: 600 }}
						>
							Sign In
						</a>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Register;
