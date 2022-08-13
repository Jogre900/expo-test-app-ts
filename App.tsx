import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import { AuthProvider } from './auth'
import Authorization from '@auth/Authorization'
import LoadAssets from '@components/LoadAssets/loadAssets'
import React from 'react'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <AuthProvider>
        <LoadAssets>
          <SafeAreaProvider>
            <Authorization>
              <Navigation colorScheme={colorScheme} />
              <StatusBar />
            </Authorization>
          </SafeAreaProvider>
        </LoadAssets>
      </AuthProvider>
    )
  }
}
