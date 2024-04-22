import React, { createContext, useContext, useState } from 'react'
// context Api:
// This is made so that we can use our user everywhere(globally)
export const AuthContext = createContext()
// getting user from local storage
const AuthProvider = ({children}) => {
    const initialAuthUser = localStorage.getItem("Users")

    const [authUser, setAuthUser] = useState(
        initialAuthUser ? JSON.parse(initialAuthUser) : undefined
    );
    return(
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
export const useAuth = () => useContext(AuthContext)