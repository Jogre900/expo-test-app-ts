import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Dimensions,
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground
} from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'
import PokeMiddleSection from './pokeMiddleSection'
import PokeStatsBar from '@components/PokemonStatsBar/pokeStatsBar'
import StyleGuide from '@components/StyleGuide'
import Utils from '@utils/utils'
import { useRoute } from '@react-navigation/native'
import axios from 'axios'
const { height } = Dimensions.get('window')

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

const PokeDetails = () => {
  const route = useRoute()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [data, setData] = useState<PokeData>()
  useEffect(() => {
    const getPokeById = async () => {
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${route.params?.id}`
        )
        const poke = {
          name: res.data.name,
          abilities: res.data.abilities,
          base_experience: res.data.base_experience,
          stats: res.data.stats,
          sprites: res.data.sprites,
          types: res.data.types,
          height: res.data.height,
          weight: res.data.weight
        }
        setData(poke)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }
    getPokeById()
  }, [])

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color={StyleGuide.palette.purple} size={60} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <ImageBackground
          style={styles.backImage}
          source={require('../../assets/images/poke_landscape.jpg')}
          resizeMode="cover"
          blurRadius={1}
        >
          <View style={styles.avatarContainer}>
            <Icon
              name="more-vertical"
              size={20}
              color={StyleGuide.palette.purple}
            />
            <View>
              <Image
                style={styles.avatar}
                source={{ uri: data?.sprites?.front_default }}
              />
            </View>
            <Icon name="edit" size={20} color={StyleGuide.palette.purple} />
          </View>
          <Text style={styles.pokeName}>
            {Utils.capitalizeFirstLetter(data?.name)}
          </Text>
        </ImageBackground>
      </View>

      <PokeMiddleSection pokeData={data} />

      <View style={styles.section2}>
        {data?.stats.map((elem: PokeStats) => (
          <PokeStatsBar key={elem.stat.name} stats={elem} />
        ))}
      </View>
    </View>
  )
}

export default PokeDetails

const styles = StyleSheet.create({
  loadingContainer: {
    height,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: StyleGuide.palette.darkGrey
  },
  container: {
    backgroundColor: StyleGuide.palette.darkGrey,
    height,
    flex: 1
  },
  section1: {
    flex: 1,
    backgroundColor: '#fff'
  },
  backImage: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: 64,
    height: 64,
    marginHorizontal: 40
  },
  pokeName: {
    ...StyleGuide.typography.title1,
    color: StyleGuide.palette.white,
    textShadowRadius: 5,
    textShadowColor: StyleGuide.palette.purple
  },
  section2: {
    flex: 1,
    backgroundColor: '#262626'
  }
})
