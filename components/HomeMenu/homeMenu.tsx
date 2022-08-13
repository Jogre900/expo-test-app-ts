import React from 'react'
import { FlatList } from 'react-native'
import MenuItem from '@components/HomeMenuItem/menuItem'
import { DATA } from '@utils/utils'

const HomeMenu = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={MenuItem}
      persistentScrollbar
      keyExtractor={(item: any) => item.id}
    />
  )
}

export default HomeMenu
