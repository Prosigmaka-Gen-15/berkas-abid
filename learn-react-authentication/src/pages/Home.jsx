import { Link } from "react-router-dom";

export default function Home () {
	return <>
		<h1>ini Home</h1>
		<Link to="/login">ke login</Link>
		<br />
		<Link to="/admin">ke admin</Link>
	</>
}