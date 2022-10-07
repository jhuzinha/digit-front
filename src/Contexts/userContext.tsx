import React, {useState, createContext} from "react";


type Token = {
    token: string
}

interface IUserContextProviderProps {
    token: Token,
    setToken: React.Dispatch<React.SetStateAction<Token>>
}

const DEFAULT_VALUE = {
    token: { 
        token: ''
    },
    setToken: ()=> {}
}

const UserContext = createContext<IUserContextProviderProps>(DEFAULT_VALUE)


 
const UserContextProvider = ({children}: any) => {
    const [token, setToken] = useState(DEFAULT_VALUE.token)
    return (
        <UserContext.Provider 
        value={{
            token,
            setToken
        }}
        >
        {children}
        </UserContext.Provider>
    )
}

export { UserContextProvider }
export default UserContext;
