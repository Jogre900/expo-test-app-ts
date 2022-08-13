import {useState, useEffect} from 'react'
import axios from 'axios'

type Pokemon = {
    name: string
    sprite: string
  }
  
  interface usePokemonProps {
    limit?: number
    offset?: number
  }
  
const usePokemon = ({ limit, offset }: usePokemonProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [data, setData] = useState<Pokemon[]>([])
  const [error, setError] = useState<string>('')
  useEffect(() => {
    const getPokemon = async () => {
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        )
        if (res.data) {
          const formatPoke = res.data.results.map((elem) => {
            const urlSplit = elem.url.split('/').filter(Boolean)
            const index = urlSplit[urlSplit.length - 1]
            return {
              id: index,
              name: elem.name,
  
              sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`
            }
          })
  
          setData(formatPoke)
          setIsLoading(false)
        }
      } catch (error) {
        setError(error)
        setIsLoading(false)
      }
    }
  
    getPokemon()
  }, [])
  
  return { isLoading, data, error }
}

export default usePokemon