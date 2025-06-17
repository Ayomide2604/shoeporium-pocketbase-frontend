import getImageUrl from "../utils/getImageUrl";
import logo from "../assets/img/logo.png";
import { useEffect } from "react";
import useAuthStore from "../stores/useAuthStore";

const ProfileCard = ({ user }) => {
	const { getUser } = useAuthStore();

	useEffect(() => {
		getUser();
	}, []);
	return (
		<div className="row mb-5">
			<div className="col-lg-12">
				<div className="d-flex align-items-center bg-light p-4 rounded">
					<img
						src={
							user?.avatar
								? getImageUrl("_pb_users_auth_", user?.id, user?.avatar)
								: logo
						}
						alt="avatar"
						className="rounded-circle me-4"
						style={{
							width: "100px",
							height: "100px",
							objectFit: "cover",
							border: "3px solid #ca1515",
						}}
					/>

					<div>
						<h4 style={{ color: "#111111", fontWeight: "600" }}>
							{user?.firstName} {user?.lastName}
						</h4>
						<div className="d-flex gap-2">
							<p>Email:</p>
							<p className="mb-1">{user?.email}</p>
						</div>
						{/* <p className="mb-0">{user?.phone}</p> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
