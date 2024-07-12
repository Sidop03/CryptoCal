import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
	const parameters= useParams();
	return (
		<>
			<h1>Profile of {`${parameters.UserName} ${parameters.project}`}</h1>
		</>
	)
}

export default Profile