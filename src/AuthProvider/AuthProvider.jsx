import React, { createContext, useState } from 'react'
export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const authinfo={
        isDarkMode,
        setIsDarkMode
        


    }
  return (
    <AuthContext.Provider value={authinfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider