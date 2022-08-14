import { View, Text, StyleSheet, Image as AvatarImg } from 'react-native'
import { Feather as IconDesign } from '@expo/vector-icons'
import React, { Intri } from 'react'

type size = 'xm' | 'sm' | 'md' | 'lg' | 'xl'

interface ImageProps {
  size: size
  source: any
  style?: any
}

interface IconProps {
  name: any
  color?: string
  size: size
}

const calculateAvatarSize = (size: size) => {
  const value = 20
  const options = {
    xm: 20,
    sm: 28,
    md: 36,
    lg: 48,
    xl: 74
  }
  return options[size] || value
}

const Image = ({ size, source, style }: ImageProps) => {
  return (
    <View
      style={[
        styles.avatarContainer,
        {
          width: calculateAvatarSize(size),
          height: calculateAvatarSize(size),
          borderRadius: calculateAvatarSize(size) / 2
        },
        style
      ]}
    >
      <AvatarImg
        source={source}
        style={{
          width: calculateAvatarSize(size),
          height: calculateAvatarSize(size),
          borderRadius: calculateAvatarSize(size) / 2
        }}
      />
    </View>
  )
}

const Icon = ({ name, color, size }: IconProps) => {
  return (
    <View>
      <IconDesign name={name} color={color} size={calculateAvatarSize(size)} />
    </View>
  )
}

const Avatar = {
  Image: (props: ImageProps) => <Image {...props} />,
  Icon: (props: IconProps) => <Icon {...props} />
}

export default Avatar

const styles = StyleSheet.create({
  avatarContainer: {},
  avatar: {}
})
