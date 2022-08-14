import { View, Text, StyleSheet, Animated } from 'react-native'
import React, { useEffect } from 'react'
import { Feather as Icon } from '@expo/vector-icons'
import StyleGuide from '@components/StyleGuide'

type PokeStat = {
  name: string
  url: string
}

type PokeStats = {
  base_stat: number
  effort: number
  stat: PokeStat
}

interface PokeStatsProps {
  stats: PokeStats
}

// base_stat:35
// effort:0
// stat: {
// name:"hp"
// url:"https://pokeapi.co/api/v2/stat/1/"
// }

const calculateStats = (statsValue: number) => {
  const value = Math.floor((statsValue * 100) / 100)
  return value
}

const statName = (value: string) => {
  let text = ''
  switch (value) {
    case 'hp':
      text = 'hp'
      break
    case 'attack':
      text = 'atk'
      break
    case 'defense':
      text = 'def'
      break
    case 'special-attack':
      text = 'spa'
      break
    case 'special-defense':
      text = 'sdf'
      break
    case 'speed':
      text = 'spd'
      break
    default:
      break
  }
  return text.toUpperCase()
}

const PokeStatsBar = ({ stats }: PokeStatsProps) => {
  const [animatedWidth] = React.useState(new Animated.Value(0))

  useEffect(() => {
    const newW = calculateStats(stats.base_stat)
    Animated.timing(animatedWidth, {
      toValue: newW,
      duration: 1500,
      useNativeDriver: true
    }).start()
  }, [])

  return (
    <View style={styles.statsBarContainer}>
      {/* <Icon name="phone" size={20} color="#262626" /> */}

      <View style={styles.statsNameContainer}>
        <Text style={styles.statsNameText}>{statName(stats.stat.name)}</Text>
      </View>
      <View style={styles.statsBar}>
        <Animated.View
          style={[
            styles.valueBar,
            {
              transform: [
                {
                  scaleX: animatedWidth
                }
              ]
            }
          ]}
        ></Animated.View>
      </View>
      <View style={styles.statsValueContainer}>
        <Text style={styles.statsValueText}>{stats.base_stat}</Text>
      </View>
    </View>
  )
}

export default PokeStatsBar

const styles = StyleSheet.create({
  statsBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // paddingHorizontal: 10,
    marginBottom: 5,
    flex: 1
    // backgroundColor: 'yellow'
  },
  statsNameContainer: {
    marginRight: 10,
    //   flex: 1,
    alignItems: 'center',
    width: 35
  },
  statsNameText: {
    ...StyleGuide.typography.caption,
    color: StyleGuide.palette.lightGrey
  },
  statsBar: {
    backgroundColor: StyleGuide.palette.darkGrey,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: StyleGuide.palette.white,
    flex: 1,
    height: '80%',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 5
  },
  valueBar: {
    position: 'absolute',
    height: '100%',
    backgroundColor: StyleGuide.palette.purple,
    width: '1%'
  },
  statsValueContainer: {
    width: 35,
    marginLeft: 10
  },
  statsValueText: {
    ...StyleGuide.typography.caption,
    color: StyleGuide.palette.lightGrey
  }
})
