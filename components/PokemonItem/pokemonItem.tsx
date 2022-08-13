import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'
import StyleGuide from '@components/StyleGuide'
import Utils from '@utils/utils'

type pokemon = {
  id: string
  name: string
  sprite: string
}

interface PokemonItemProps {
  item: pokemon
  onPress: any
}

const PokemonItem = ({ item, onPress }: PokemonItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.spriteNameContainer}>
        <Image source={{ uri: item.sprite }} style={styles.sprite} />
        <Text style={styles.name}>
          {Utils.capitalizeFirstLetter(item.name)}
        </Text>
      </View>
      <TouchableOpacity activeOpacity={0.5} onPress={() => onPress(item.id)}>
        <Icon
          name="chevron-right"
          size={20}
          color={StyleGuide.palette.lightGrey}
        />
      </TouchableOpacity>
    </View>
  )
}

export default PokemonItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: StyleGuide.palette.darkGrey,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10
  },
  spriteNameContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  sprite: {
    height: 32,
    width: 32,
    marginRight: 10
  },
  name: {
    color: StyleGuide.palette.lightGrey,
    fontSize: 18
  }
})
