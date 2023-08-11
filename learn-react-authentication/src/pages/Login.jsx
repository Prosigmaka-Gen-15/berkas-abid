import axios from "axios"
import { useState } from "react"

export default function Login () {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		axios.post('http://localhost:3000/login', { email, password })
			.then(res => {
				console.log(res.data)
			})
	}

	return <>
		<h1>ini Login</h1>
		<form onSubmit={handleSubmit}>
			<section>
				Email:
				<input type="email" value={email} onChange={e => setEmail(e.target.value)} />
			</section>
			<section>
				Password:
				<input type="password" value={password} onChange={e => setPassword(e.target.value)} />
			</section>
			<button>
				Login
			</button>
		</form>
	</>
}