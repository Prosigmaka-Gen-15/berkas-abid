import { useState } from "react"

export default function PersonForm () {
	const [name, setName] = useState()
	const [age, setAge] = useState()

	const handleSubmit = event => {
		event.preventDefault()
		const data = {
			name: name,
			age: age
		}
		console.log(data)
	}

	return <>
		<h1>Add Person</h1>
		<form onSubmit={handleSubmit}>
			<section>
				Name:
				<input type="text" value={name} onChange={e => setName(e.target.value)} />
			</section>
			<section>
				Age:
				<input type="text" value={age} onChange={e => setAge(e.target.value)} />
			</section>
			<button>
				submit
			</button>
		</form>
	</>
}