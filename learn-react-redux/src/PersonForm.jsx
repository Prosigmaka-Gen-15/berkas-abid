import { useState } from "react"
import { useDispatch } from "react-redux"

import { addPerson } from "./store/personsSlice.js"

export default function PersonForm () {
	const dispatch = useDispatch()

	const [name, setName] = useState()
	const [age, setAge] = useState()

	const handleSubmit = event => {
		event.preventDefault()

		const data = {
			name: name,
			age: age
		}

		dispatch(addPerson(data))
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