import { BrowserRouter, Routes, Route } from "react-router-dom"

import PersonList from "./pages/PersonList"
import PersonForm from "./pages/PersonForm"

export default function App () {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<PersonList />} />
      <Route path="/form/:personId?" element={<PersonForm />} />
    </Routes>
  </BrowserRouter>
}