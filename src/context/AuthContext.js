import { createContext, useState } from "react"
import axios from 'axios'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState(null)

  const [user, setUser] = useState({
    email : "",
    password : null 
  })

  const signin = (user) => {
    setUser(user)

    axios({
      method: "post",
      url: "http://localhost:3001/login",
      data : user
    }).then(res => {
      localStorage.setItem('token', res.data.accessToken)
    })
    .catch(err => setError(err.response.data))
  }

  const signup = (user) => {
    setUser(user)
  }

  const signout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, error, signin, signup, signout }}>
      {children}
    </AuthContext.Provider>
  )
}
