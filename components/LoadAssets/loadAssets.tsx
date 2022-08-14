import React, { ReactChild, useEffect, useState } from 'react'
import { loadAsset } from '@auth/actions'
import * as Font from 'expo-font'
import { Asset } from 'expo-asset'
import { useAuthDispatch } from '@auth/AuthProvider'
import SplashScreen from '@screens/Splash'

interface LoadAssetsProps {
  assets?: any
  children: ReactChild | ReactChild[]
}

const fonts = {
  'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
  'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
  'Montserrat-SemiBold': require('../../assets/fonts/Montserrat-SemiBold.ttf')
}

const assetsL = [
  require('../../assets/images/poke_landscape.jpg'),
  require('../../assets/images/profile.jpg'),
  require('../../assets/images/pokemon_load.png')
]

const usePromises = (promises: any[], cb: any) => {
  useEffect(() => {
    const executePromises = async () => {
      const res = await Promise.all(promises)
      console.warn({ res })
      cb()
    }
    executePromises()
  }, [])
}

const useLoadAssets = (fonts: any, assets: any) => {
  const [ready, setReady] = useState<boolean>(false)
  usePromises([Font.loadAsync(fonts)], () => setReady(true))
  return ready
}

const LoadAssets = ({ assets, children }: LoadAssetsProps) => {
  const dispatch = useAuthDispatch()
  const ready = useLoadAssets(fonts || {}, assetsL || [])
  console.warn(ready)
  // useEffect(() => {
  //   loadAsset(dispatch)
  // }, [])

  // if (!ready) {
  //   return <SplashScreen />
  // }

  return <>{children}</>
}

export default LoadAssets
