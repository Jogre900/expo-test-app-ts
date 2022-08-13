import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import StyleGuide from '@components/StyleGuide'
import Utils from '@utils/utils'

type PokeStat = {
  name: string
  url: string
}

type PokeStats = {
  base_stat: number
  effort: number
  stat: PokeStat
}

type PokeData = {
  name: string
  abilities: any[]
  base_experience: number
  stats: PokeStats[]
  sprites: any[]
  types: any[]
  height: number
  weight: number
}

interface PokeMiddleSectionProps {
  pokeData: PokeData
}

const PokeMiddleSection = ({ pokeData }: PokeMiddleSectionProps) => {
  console.log(pokeData)
  return (
    <View style={styles.container}>
      <View style={styles.valuesContainer}>
        <Text style={styles.value}>
          {pokeData?.types.map((elem, i, arr) => {
            if (arr.length > 1) {
              return (
                <Text key={i}>
                  {i === arr.length - 1
                    ? ` - ${Utils.capitalizeFirstLetter(elem.type.name)}`
                    : Utils.capitalizeFirstLetter(elem.type.name)}
                </Text>
              )
            }
            return (
              <Text key={i}>{Utils.capitalizeFirstLetter(elem.type.name)}</Text>
            )
          })}
        </Text>
        <Text style={styles.label}>Tipo</Text>
      </View>
      <View style={styles.valuesContainer}>
        <Text style={styles.value}>{pokeData?.weight}</Text>
        <Text style={styles.label}>Peso</Text>
      </View>
      <View style={styles.valuesContainer}>
        <Text style={styles.value}>{pokeData?.height}</Text>
        <Text style={styles.label}>Altura</Text>
      </View>
    </View>
  )
}

export default PokeMiddleSection

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#262626',
    height: 120,
    paddingHorizontal: 10
  },
  valuesContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  label: {
    ...StyleGuide.typography.label,
    color: StyleGuide.palette.lightPurple
  },
  value: {
    ...StyleGuide.typography.bodyBold,
    color: StyleGuide.palette.purple
  }
})
