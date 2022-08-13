import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'
import StyleGuide from '@components/StyleGuide'
import Constants from 'expo-constants'

interface PokeHeaderProps {
  navigation: any
}

const PokeHeader = ({ navigation }: PokeHeaderProps) => {
  return (
    <View style={styles.container}>
      <View
      // style={{
      //   width: 40,
      //   height: 40,
      //   borderRadius: 40 / 2,

      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   alignContent: 'center',
      //   // backgroundColor: palette.darkGrey,
      //   elevation: 2
      // }}
      >
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" size={20} color={StyleGuide.palette.lightGrey} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.push('Pokemon_details')}>
        <Icon name="user" size={20} color={StyleGuide.palette.lightGrey} />
      </TouchableOpacity>
    </View>
  )
}

export default PokeHeader

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: Constants.statusBarHeight + 48,
    marginTop: Constants.statusBarHeight,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    backgroundColor: StyleGuide.palette.darkGrey
  }
})
