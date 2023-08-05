import { useState } from "react"

export default function ManualForm() {
	const [formInput, setFormInput] = useState({
		nama: '',
		umur: ''
	})

	const handleFormInput = (event) => {
		setFormInput({
			...formInput,
			[event.target.name]: event.target.value
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(formInput)
	}

	return <>
		<form onSubmit={handleSubmit}>
			<section>
				Nama:
				<input
					type="text"
					name="nama"
					value={formInput.nama}
					onChange={handleFormInput}
					required
					minLength={5} />
			</section>
			<br />
			<section>
				Umur:
				<input
					type="text"
					name="umur"
					value={formInput.umur}
					onChange={handleFormInput} />
			</section>
			<br />
			<button type="submit">
				Submit
			</button>
		</form>
	</>
}