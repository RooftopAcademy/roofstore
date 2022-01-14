import { Navigate, useLocation } from 'react-router-dom'

import CartUnlogged from '../../Pages/Public/CartUnloggedPage'
import useAuth from '../../hooks/useAuth'

function PrivateRoute({ children }) {
  const { user } = useAuth()
  const { pathname } = useLocation()
  console.log(user)
  
  return user.email !== ''
    ? children  // Si existe usuario se redenriza el children
    : pathname === '/cart' // Si no existe usuario y la ruta es /cart, se renderiza <CartUnlogged />
    ? <CartUnlogged /> // otras rutas se redirecciona a /login
    : <Navigate to="/login" />
}

export default PrivateRoute
