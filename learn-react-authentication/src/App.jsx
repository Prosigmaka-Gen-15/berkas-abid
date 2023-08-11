import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home.jsx'
import Admin from './pages/Admin.jsx'
import Login from './pages/Login.jsx'

export default function App () {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </BrowserRouter>
}