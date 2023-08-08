import { useState } from 'react'
import PersonList from './PersonList'
import PersonForm from './PersonForm'

function App() {
  return <>
    <PersonList />
    <br /><hr /><br />
    <PersonForm />
  </>
}

export default App
