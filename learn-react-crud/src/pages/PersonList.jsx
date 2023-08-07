import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function PersonList () {
	const [persons, setPersons] = useState([])

	const getPersonsData = () => {
		axios.get('http://localhost:3000/persons')
			.then(res => setPersons(res.data))
			.catch(err => {
				alert(err)
				console.log(err)
			})
	}

	const deletePerson = (personId) => {
		axios.delete('http://localhost:3000/persons/' + personId)
			.then(() => getPersonsData())
			.catch(err => alert(err))
	}

	useEffect(() => {
		getPersonsData()
	}, [])

	return <>
		<h1>ini person list</h1>

		<Link to="/form">
			<button>
				Tambah Data
			</button>
		</Link>

		<table border="1" width="100%">
			<thead>
				<tr>
					<th>ID</th>
					<th>NAMA</th>
					<th>UMUR</th>
					<th>JABATAN</th>
					<th>ACTION</th>
				</tr>
			</thead>
			<tbody>
				{persons.map(person =>
					<tr>
						<td>{person.id}</td>
						<td>{person.name}</td>
						<td>{person.age}</td>
						<td>{person.job_title}</td>
						<td>
							<Link to={'/form/' + person.id}>
								<button>EDIT</button>
							</Link>
							&nbsp;|&nbsp;
							<button onClick={() => deletePerson(person.id)}>
								HAPUS
							</button>
						</td>
					</tr>
				)}
			</tbody>
		</table>
	</>
}