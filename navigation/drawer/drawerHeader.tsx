import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import StyleGuide from '@components/StyleGuide'

const DrawerHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        style={styles.avatar}
        source={require('../../assets/images/profile.jpg')}
      />
      <Text style={styles.name}>Jose Del Corral</Text>
      <Text style={styles.email}>josedc.es510@gmail.com</Text>
    </View>
  )
}

export default DrawerHeader

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2
  },
  name: {
    ...StyleGuide.typography.bodyBold,
    color: StyleGuide.palette.white,
    marginTop: 10
  },
  email: {
    ...StyleGuide.typography.label,
    color: StyleGuide.palette.white,
    marginTop: 5
  }
})
