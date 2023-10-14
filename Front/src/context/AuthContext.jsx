import {createContext, useContext, useEffect, useState} from "react";

export const AuthContext = createContext(null);

export function AuthContextProvider({children}) {
    const [user, setUser] = useState(null)
    const [isAuthed, setIsAuthed] = useState(false);
    //
    useEffect(() => {
        const storagedUser = localStorage.getItem("userInfo")
        const storagedToken = localStorage.getItem("token")
        if (storagedUser && storagedToken) {
            setUser(JSON.parse(storagedUser))
            setIsAuthed(true)
        }
    },[])

    return(
        <AuthContext.Provider
            value={{
                setUser,
                user,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext() {
    return useContext(AuthContext);
}