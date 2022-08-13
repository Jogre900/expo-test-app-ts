import { View, Text } from 'react-native'
import DrawerHeader from './drawerHeader'
import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer'
import StyleGuide from '@components/StyleGuide'
import React from 'react'

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        backgroundColor: StyleGuide.palette.blue
      }}
    >
      <DrawerHeader />
      <View
        style={{
          backgroundColor: '#fff',
          paddingTop: 10
        }}
      >
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  )
}

export default DrawerContent
