import React from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import PokemonItem from '@components/PokemonItem/pokemonItem'
import StyleGuide from '@components/StyleGuide'
import usePokemon from '../../hooks/usePokemon'

interface MenuPokemonProps {
  searchText?: string
  navigation: object
}

type pokemon = {
  id: string
  name: string
  url: string
}

const MenuPokemon = ({ searchText, navigation }: MenuPokemonProps) => {
  const { isLoading, data, error } = usePokemon({ limit: 10000 })

  const onPress = (id: string) => navigation.navigate('Pokemon_details', { id })
  const renderItem = ({ item }: pokemon) => (
    <PokemonItem item={item} onPress={onPress} />
  )

  const filterPokemon = (data) => {
    const text = searchText.toLowerCase()
    if (!searchText) return data
    return data.filter(({ name }: string) => name.toLowerCase().includes(text))
  }

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator color={StyleGuide.palette.lightGrey} size={40} />
      </View>
    )
  }

  if (error) {
    return (
      <View>
        <Text
          style={{
            ...StyleGuide.typography.headline
          }}
        >
          Oops! Algo paso :(
        </Text>
      </View>
    )
  }

  return (
    <FlatList
      data={filterPokemon(data)}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
    />
  )
}

export default MenuPokemon
