import useAuthStore from "../stores/useAuthStore";
import ProfileCard from "../components/ProfileCard";

const Profile = () => {
	const user = useAuthStore.getState().user?.record;

	return (
		<section className="spad">
			<div className="container">
				{/* Section title */}
				<div className="section-title">
					<h4>My Profile</h4>
				</div>

				{/* Profile Card */}
				<ProfileCard user={user} />

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
											defaultValue={user?.firstName}
										/>
									</div>
									<div className="col-md-6">
										<label className="form-label">Last Name</label>
										<input
											type="text"
											className="form-control"
											defaultValue={user?.lastName}
										/>
									</div>
									<div className="col-md-6">
										<label className="form-label">Email</label>
										<input
											type="email"
											className="form-control"
											defaultValue={user?.email}
										/>
									</div>
									<div className="col-md-6">
										<label className="form-label">Profile Picture</label>
										<input type="file" className="form-control" />
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
