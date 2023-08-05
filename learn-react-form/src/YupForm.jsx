import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
	nama: yup.string().required(),
	umur: yup
		.number()
		.positive('umur harus menggunakan angka positif')
		.integer('tidak boleh pakai koma coy')
		.required()
})

export default function HookForm() {
	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema)
	})

	const onSubmit = (data) => {
		console.log(data)
	}

	return <>
		<form onSubmit={handleSubmit(onSubmit)}>
			<section>
				Nama:
				<input type="text" {...register('nama')} />
				{errors.nama?.message}
			</section>
			<br />
			<section>
				Umur:
				<input type="text" {...register('umur')}/>
				{errors.umur?.message}
			</section>
			<br />
			<button type="submit">
				Submit
			</button>
		</form>
	</>
}