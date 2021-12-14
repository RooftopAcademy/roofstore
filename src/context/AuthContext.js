import { createContext, useState } from "react"

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)

  const signin = (user) => {
    setUser(user)
  }

  const signup = (user) => {
    setUser(user)
  }

  const signout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, signin, signup, signout }}>
      {children}
    </AuthContext.Provider>
  )
}
