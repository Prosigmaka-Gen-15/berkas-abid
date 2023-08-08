import { useSelector } from "react-redux"

export default function PersonList () {
	const persons = useSelector((state) => state.persons)

	return <>
		<h1>Person List</h1>
		<ul>
			{persons.map(person =>
				<li>Name: {person.name} | Age: {person.age} </li>
			)}
		</ul>
	</>
}