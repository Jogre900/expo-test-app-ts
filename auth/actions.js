import { signIn } from '@api/login'
import * as SecureStore from 'expo-secure-store'

export const LOAD_ASSETS = '@AUTH LOAD ASSETS'
export const REQUEST_LOGIN = '@AUTH REQUEST LOGIN'
export const RESTORE_TOKEN = '@AUTH RESTORE TOKEN'
export const LOGIN_SUCCESS = '@AUTH LOGIN SUCCESS'
export const REQUEST_SIGN_IN = '@AUTH REQUEST SIGN IN'
export const LOGOUT = '@AUTH LOGOUT'

export async function loginUser(dispatch, loginPayload) {
  dispatch({ type: REQUEST_LOGIN })
  SecureStore.setItemAsync('userToken', 'estoesuntokendeprueba')
    .catch((err) => {
      throw new Error(`${err.message}`)
    })
    .finally(() =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { ...loginPayload, token: 'asdasdasd' }
      })
    )
}

export async function restoreToken(dispatch) {
  dispatch({ type: RESTORE_TOKEN })
}

export async function loadAsset(dispatch) {
  dispatch({ type: LOAD_ASSETS })
}

export async function requestSignIn(dispatch) {
  dispatch({ type: REQUEST_SIGN_IN })
}

export async function logout(dispatch) {
  dispatch({ type: LOGOUT })
}
