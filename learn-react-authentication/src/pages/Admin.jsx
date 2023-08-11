import { useSelector } from "react-redux"

export default function Admin () {
	const user = useSelector(state => state.auth.user)
	const token = useSelector(state => state.auth.token)

	return <>
		<h1>ini Admin</h1>
		<h3>Logged in user:</h3>
		<ul>
			<li>ID: {user.id}</li>
			<li>Email: {user.email}</li>
			<li>Token: {token}</li>
		</ul>
	</>
}