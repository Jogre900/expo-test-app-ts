import React, { useEffect, ReactChild } from 'react'
import * as SecureStore from 'expo-secure-store'
import { useAuthDispatch } from '@auth/AuthProvider'
import { restoreToken, loginUser, requestSignIn } from '@auth/actions'
import Utils from '@utils/utils'

interface AuthProps {
  children: ReactChild | ReactChild[]
}

export const Authorization = ({ children }: AuthProps) => {
  const dispatch = useAuthDispatch()

  useEffect(() => {
    const verifyLogin = async () => {
      restoreToken(dispatch)
      await Utils.doSomethingAfter(1000)
      try {
        const token = await SecureStore.getItemAsync('userToken')
        if (token) {
          loginUser(dispatch, { user: 'jose', token })
        } else {
          requestSignIn(dispatch)
        }
      } catch (error) {
        throw new Error(`error: ${error.message}`)
      }
    }
    verifyLogin()
  }, [])

  return <>{children}</>
}

export default Authorization
