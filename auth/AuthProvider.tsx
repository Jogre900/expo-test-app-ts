import React, { ReactChild, createContext, useReducer } from 'react'
import { AuthReducer, initialState } from './reducer'
interface AuxProps {
  children: ReactChild
}

interface stateInterface {
  user: string | undefined
  token: string | undefined
  loading: boolean | undefined
  errorMessage: string | undefined
}

const AuthStateContext = createContext({})
const AuthDispatchContext = createContext({})

export function useAuthState() {
  const context = React.useContext(AuthStateContext)
  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider')
  }

  return context
}

export function useAuthDispatch() {
  const context = React.useContext(AuthDispatchContext)
  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within a AuthProvider')
  }

  return context
}

const AuthProvider = ({ children }: AuxProps) => {
  const [user, dispatch] = useReducer(AuthReducer, initialState)
  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}

export default AuthProvider
