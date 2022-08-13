import React from 'react'
import { View } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerContent from './drawerContent'
import DrawerFooter from './drawerFooter'
import StyleGuide from '@components/StyleGuide'
import { data } from './data'

const Drawer = createDrawerNavigator()

const DrawerCustomContent = (props) => {
  return (
    <View
      style={{
        flex: 1
      }}
    >
      <DrawerContent {...props} />
      <DrawerFooter {...props} />
    </View>
  )
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: StyleGuide.palette.white,
        drawerActiveBackgroundColor: StyleGuide.palette.blue,
        drawerInactiveTintColor: StyleGuide.palette.darkBlue,
        drawerLabelStyle: {
          marginLeft: -20,
          ...StyleGuide.typography.callout
        }
      }}
      drawerContent={(props) => <DrawerCustomContent {...props} />}
    >
      {data.map((elem) => (
        <Drawer.Screen
          key={elem.name}
          name={elem.name}
          component={elem.component}
          options={{
            headerShown: elem.name !== 'Pokemon',
            drawerIcon: ({ focused, color }) => (
              <Icon
                name={elem.icon}
                size={20}
                color={focused ? StyleGuide.palette.white : color}
              />
            )
          }}
        />
      ))}
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
