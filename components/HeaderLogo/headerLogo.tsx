import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

interface HeaderLogoProps {
  color?: string
  width?: number
}

const vHeight = 300
const vWidth = 920
const aspectRatio = (width: number) => {
  const data = vHeight / vWidth
  return {
    width,
    height: width * data
  }
}

const assets = [require('../../assets/images/logo_new2.png')]

const Logo = (props: HeaderLogoProps) => {
  const styles = StyleSheet.create({
    layer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
  const { width, height } = aspectRatio(props.width || 140)
  const color = props.color || 'white'

  return (
    <View style={styles.layer}>
      <Image
        fadeDuration={0}
        style={{ width, height }}
        width={width}
        height={height}
        source={assets[0]}
      />
    </View>
  )
}

export default Logo
