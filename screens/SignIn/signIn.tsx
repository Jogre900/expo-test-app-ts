import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useAuthDispatch, loginUser, useAuthState } from 'auth'

type signInData = {
  username: string
  password: string
}

const SignIn = () => {
  const [signInData, setSignInData] = useState<signInData>()
  const dispatch = useAuthDispatch()
  const state = useAuthState()

  const handleInputChange = (name: string, value: string) => {
    setSignInData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {/* <Text>signIn</Text> */}
      <View>
        <TextInput
          style={{
            borderColor: '#ccc',
            borderBottomWidth: 1,
            paddingVertical: 10
          }}
          placeholder="user"
          value={signInData?.username || ''}
          onChangeText={(value) => handleInputChange('username', value)}
        />
        <TextInput
          style={{
            borderColor: '#ccc',
            borderBottomWidth: 1,
            paddingVertical: 10
          }}
          placeholder="password"
          value={signInData?.password || ''}
          onChangeText={(value) => handleInputChange('password', value)}
        />
        <TouchableOpacity
          activeOpacity={0.2}
          onPress={() => loginUser(dispatch, signInData)}
        >
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignIn
