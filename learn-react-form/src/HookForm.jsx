import { useState } from "react"
import { useForm } from "react-hook-form"

export default function HookForm() {
	const { register, handleSubmit } = useForm()

	const onSubmit = (data) => {
		console.log(data)
	}

	return <>
		<form onSubmit={handleSubmit(onSubmit)}>
			<section>
				Nama:
				<input type="text" {...register('nama')} />
			</section>
			<br />
			<section>
				Umur:
				<input type="text" {...register('umur')}/>
			</section>
			<br />
			<button type="submit">
				Submit
			</button>
		</form>
	</>
}