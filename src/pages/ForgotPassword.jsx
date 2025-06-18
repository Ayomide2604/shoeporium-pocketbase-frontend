import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import Loader from "../components/Loader";
import useAuthStore from "../stores/useAuthStore";

const ForgotPassword = () => {
	const [email, setEmail] = useState("");
	const navigate = useNavigate();
	const { passwordReset, passwordResetLoading } = useAuthStore();

	const handleSubmit = async (e) => {
		e.preventDefault();
		passwordReset(email, navigate);
	};

	if (passwordResetLoading) {
		return <Loader />;
	}

	return (
		<div
			className="container d-flex align-items-center justify-content-center"
			style={{ minHeight: "100vh", background: "#f8f9fa" }}
		>
			<div
				className="login-card shadow p-4 rounded"
				style={{ maxWidth: 400, width: "100%", background: "#fff" }}
			>
				<div className="text-center mb-4">
					<img src={logo} alt="Shoeporium Logo" style={{ height: 60 }} />
					<h2
						className="mb-1"
						style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
					>
						Forgot Password
					</h2>
					<p
						className="text-muted"
						style={{ fontFamily: "Montserrat, sans-serif" }}
					>
						Enter your email to receive a reset link.
					</p>
				</div>

				<form onSubmit={handleSubmit}>
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
							onChange={(e) => setEmail(e.target.value)}
							style={{ borderRadius: 8, fontFamily: "Montserrat, sans-serif" }}
						/>
					</div>

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
						disabled={passwordResetLoading}
					>
						{passwordResetLoading ? "Sending..." : "Send Reset Link"}
					</button>
				</form>

				<div className="text-center mt-4">
					<span style={{ fontSize: 14 }}>
						Remember your password?{" "}
						<Link
							to="/login"
							className="text-decoration-none"
							style={{ color: "#ca1515", fontWeight: 600 }}
						>
							Login
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
