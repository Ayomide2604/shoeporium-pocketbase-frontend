import useAuthStore from "../stores/useAuthStore";
import logo from "../assets/img/logo.png";
import { FaPen } from "react-icons/fa6";

const Profile = () => {
	const { user } = useAuthStore();

	// Static user info and stats for now
	const userInfo = {
		firstName: "Jane",
		lastName: "Doe",
		email: "janedoe@example.com",
		phone: "+234 812 345 6789",
		address: "123 Example Street, Lagos",
		avatar: logo,
	};

	const stats = {
		totalOrders: 12,
		pendingOrders: 2,
		completedOrders: 10,
		wishlist: 5,
	};

	return (
		<section className="spad">
			<div className="container">
				{/* Section title */}
				<div className="section-title">
					<h4>My Profile</h4>
				</div>

				{/* Profile Card */}
				<div className="row mb-5">
					<div className="col-lg-12">
						<div className="d-flex align-items-center bg-light p-4 rounded">
							<img
								src={userInfo.avatar}
								alt="avatar"
								className="rounded-circle me-4"
								style={{
									width: "100px",
									height: "100px",
									objectFit: "contain",
									border: "4px solid #ca1515",
								}}
							/>

							<div>
								<h4 style={{ color: "#111111", fontWeight: "600" }}>
									{userInfo.firstName} {userInfo.lastName}
								</h4>
								<p className="mb-1">{userInfo.email}</p>
								<p className="mb-0">{userInfo.phone}</p>
							</div>
						</div>
					</div>
				</div>

				{/* Stats Cards */}
				<div className="row mb-5">
					<div className="col-md-3 col-sm-6 mb-4">
						<div className="p-4 bg-light text-center rounded">
							<h4 style={{ color: "#ca1515", fontWeight: "700" }}>
								{stats.totalOrders}
							</h4>
							<p className="m-0">Total Orders</p>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 mb-4">
						<div className="p-4 bg-light text-center rounded">
							<h4 style={{ color: "#ca1515", fontWeight: "700" }}>
								{stats.pendingOrders}
							</h4>
							<p className="m-0">Pending Orders</p>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 mb-4">
						<div className="p-4 bg-light text-center rounded">
							<h4 style={{ color: "#ca1515", fontWeight: "700" }}>
								{stats.completedOrders}
							</h4>
							<p className="m-0">Completed Orders</p>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 mb-4">
						<div className="p-4 bg-light text-center rounded">
							<h4 style={{ color: "#ca1515", fontWeight: "700" }}>
								{stats.wishlist}
							</h4>
							<p className="m-0">Wishlist Items</p>
						</div>
					</div>
				</div>

				{/* Update Form */}
				<div className="row">
					<div className="col-lg-12">
						<div className="p-4 bg-light rounded">
							<h5 style={{ fontWeight: "600", marginBottom: "20px" }}>
								Update Profile
							</h5>
							<form>
								<div className="row g-4">
									<div className="col-md-6">
										<label className="form-label">First Name</label>
										<input
											type="text"
											className="form-control"
											defaultValue={userInfo.firstName}
										/>
									</div>
									<div className="col-md-6">
										<label className="form-label">Last Name</label>
										<input
											type="text"
											className="form-control"
											defaultValue={userInfo.lastName}
										/>
									</div>
									<div className="col-md-6">
										<label className="form-label">Email</label>
										<input
											type="email"
											className="form-control"
											defaultValue={userInfo.email}
										/>
									</div>
									<div className="col-md-6">
										<label className="form-label">Profile Picture</label>
										<input type="file" className="form-control" />
									</div>

									<div className="col-12">
										<label className="form-label">Address</label>
										<input
											type="text"
											className="form-control"
											defaultValue={userInfo.address}
										/>
									</div>
									<div className="col-12 text-end mt-3">
										<button type="submit" className="site-btn">
											Update Profile
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Profile;
