import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'
import StyleGuide from '@components/StyleGuide'

type ItemMenu = {
  id: string
  title: string
  icon: any
  goto: string
  needPermissionSuper?: boolean
}

interface ItemMenuProps {
  item: ItemMenu
}

const MenuItem = ({ item }: ItemMenuProps) => {
  return (
    <TouchableOpacity key={item.id} style={styles.menuItem} activeOpacity={0.5}>
      <Icon name={item.icon} size={30} color={StyleGuide.palette.blue} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  )
}

export default MenuItem

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: StyleGuide.palette.blueLight,
    borderBottomWidth: 1
  },
  title: {
    ...StyleGuide.typography.menu,
    flex: 1,
    marginLeft: 15,
    color: StyleGuide.palette.blue
  }
})
