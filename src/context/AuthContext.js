import { createContext, useEffect, useState } from "react"
import axios from 'axios'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState(null)

  const [user, setUser] = useState({email: ''})

  useEffect(()=>{
    if (localStorage.email) {
      setUser({email: localStorage.getItem('email')})
    }
  },[])

/**
 * 
 * @param {{email: string, password: string}} credentials 
 */
  const signin = (credentials) => {

    axios({
      method: "post",
      url: "http://localhost:3002/login",
      data : credentials
    }).then(res => {
      localStorage.setItem('token', res.data.accessToken)
      localStorage.setItem('email', credentials.email)
    })
    .catch(err => setError(err.response.data))
  }

  const signup = (user) => {
    setUser(user)
  }

  const signout = () => {
    setUser({email: ''})
  }

  return (
    <AuthContext.Provider value={{ user, error, signin, signup, signout }}>
      {children}
    </AuthContext.Provider>
  )
}
