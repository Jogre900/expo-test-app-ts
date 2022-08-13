import axios from 'axios'

export const signIn = async () => {
  const res = await axios.get('assets/fakeData/data.json')
  return res
}
