import React, { useReducer } from 'react'
import * as Actions from './actions' 
// let user = localStorage.getItem('currentUser')
//   ? JSON.parse(localStorage.getItem('currentUser')).user
//   : ''
// let token = localStorage.getItem('currentUser')
//   ? JSON.parse(localStorage.getItem('currentUser')).auth_token
//   : ''

interface actionType {
  type: string;
  error: string,
  payload?: any
}

export type authState = {
  user?: string,
  token?: string,
  loading?: boolean,
  errorMessage?: string
}

export const initialState = {
  user: '',
  token: '',
  loading: true,
  errorMessage: null
}

export const AuthReducer = (initialState: authState, action: actionType ) => {
  switch (action.type) {
  case Actions.LOAD_ASSETS:
  case Actions.REQUEST_LOGIN:
  case Actions.RESTORE_TOKEN:
    return {
      ...initialState,
      loading: true
    }
  case Actions.REQUEST_SIGN_IN: 
    return {
      ...initialState,
      loading: false
    }
  case Actions.LOGIN_SUCCESS:
    return {
      ...initialState,
      user: action.payload.user,
      token: action.payload.token,
      loading: false
    }
  case Actions.LOGOUT:
    return {
      ...initialState,
      user: '',
      token: ''
    }

  case 'LOGIN_ERROR':
    return {
      ...initialState,
      loading: false,
      errorMessage: action.error
    }

  default:
    throw new Error(`Unhandled action type: ${action.type}`)
  }
}
