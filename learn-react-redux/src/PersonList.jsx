import { useState } from "react"

export default function PersonList () {
	const [persons, setPersons] = useState([
		{ name: 'Abid', age: 20 },
		{ name: 'John', age: 30 },
		{ name: 'Doe', age: 40 },
	])

	return <>
		<h1>Person List</h1>
		<ul>
			{persons.map(person =>
				<li>Name: {person.name} | Age: {person.age} </li>
			)}
		</ul>
	</>
}