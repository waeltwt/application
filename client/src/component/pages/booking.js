import React, { useEffect, useState } from "react";
import './booking.css'
import RowDetails from "./RowDetails";
import axios from "axios";



const Booking = () => {
	const [users, setUsers] = useState()
	// useEffect(async () => {
	// 	await axios.get("/api/users").then((res) => {
	// 		setUsers(res.data);
	// 	});
	// });

	return (
		<div className="row p-4">

			<div className="mt-4">
				<h2>Crud Users</h2>
			</div>
			<div className="col-12 col-lg-4">

			</div>
			<div >
				<table className="table">
					<thead>
						<tr>
							<th scope='col'>Email</th>
							<th scope='col'>Lastname</th>
							<th scope='col'>Firstname</th>
							<th scope='col'>Age</th>
							<th scope='col'>Actions</th>
						</tr>
					</thead>
					<tbody>
						<RowDetails />
						{/* {
							users.map(({ email, lastName, firstName, _id, phoneNomber, adress, civility }) => (
								<RowDetails email={email}
									lastName={lastName}
									firstName={firstName}
									id={_id}
									phoneNomber={phoneNomber}
									adress={adress}
									civility={civility}
								/>

							))} */}



					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Booking;