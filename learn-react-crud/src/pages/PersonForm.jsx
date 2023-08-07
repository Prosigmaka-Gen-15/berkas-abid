import axios from "axios"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"

export default function PersonForm() {
	const navigate = useNavigate()
	const { register, handleSubmit, setValue } = useForm()
	const { personId } = useParams()

	const getPersonData = () => {
		axios.get('http://localhost:3000/persons/' + personId)
			.then(res => {
				setValue('name', res.data.name)
				setValue('age', res.data.age)
				setValue('job_title', res.data.job_title)
			})
			.catch(err => alert(err))
	}

	const onSubmit = async (data) => {
		try {
			if (personId) await axios.patch('http://localhost:3000/persons/' + personId, data)
			else await axios.post('http://localhost:3000/persons', data)

			navigate('/')
		} catch (err) {
			alert(err)
			console.log(err)
		}
	}

	useEffect(() => {
		if (personId) getPersonData()
	}, [personId])

	return <>
		<h1>ini person form</h1>

		<form onSubmit={handleSubmit(onSubmit)}>
			<section>
				Nama:
				<input type="text" {...register('name')} />
			</section>
			<br />
			<section>
				Umur:
				<input type="text" {...register('age')} />
			</section>
			<br />
			<section>
				Jabatan:
				<input type="text" {...register('job_title')} />
			</section>
			<br />
			<button>
				Submit
			</button>
		</form>
	</>
}