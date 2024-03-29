import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { processLogin } from '../store/authSlice'
import { useNavigate } from "react-router-dom"

export default function Login () {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		axios.post('http://localhost:3000/login', { email, password })
			.then(res => {
				dispatch(processLogin(res.data))
				navigate('/admin')
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