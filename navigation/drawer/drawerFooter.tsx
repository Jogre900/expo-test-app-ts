import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Feather as Icon } from '@expo/vector-icons'
import StyleGuide from '@components/StyleGuide'

const DrawerFooter = (props) => {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        style={styles.logoutItem}
        activeOpacity={0.5}
        onPress={() => {}}
      >
        <Icon
          name="log-out"
          size={20}
          color={StyleGuide.palette.darkBlue}
          style={styles.icon}
        />
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DrawerFooter

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: StyleGuide.palette.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopColor: StyleGuide.palette.blue,
    borderTopWidth: 1
  },
  logoutItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginRight: 10
  },
  text: {
    ...StyleGuide.typography.callout,
    color: StyleGuide.palette.darkBlue
  }
})
