import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/home/home'
import { Login } from '../pages/login/login'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}
