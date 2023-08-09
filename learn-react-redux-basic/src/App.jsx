import { useSelector, useDispatch } from "react-redux"

export default function App () {
  const dispatch = useDispatch()

  const nama = useSelector(state => state.basicReducer)

  return <>
    <h1>{nama}</h1>

    <button onClick={() => dispatch({ type: 'ubahNama' })}>
      ubah nama
    </button>
  </>
}