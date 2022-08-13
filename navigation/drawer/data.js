import { View, Text } from 'react-native'
import ResetPass from '@screens/ResetPass'
import Pokemon from '@screens/Pokemon'
const Feed = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed</Text>
    </View>
  )
}

const Article = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article</Text>
    </View>
  )
}

const Settings = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings</Text>
    </View>
  )
}

export const data = [
  {
    name: 'Feed',
    component: Feed,
    icon: 'home'
  },
  {
    name: 'Article',
    component: Article,
    icon: 'search'
  },
  {
    name: 'Settings',
    component: Settings,
    icon: 'settings'
  },
  {
    name: 'Reset Pass',
    component: ResetPass,
    icon: 'lock'
  },
  {
    name: 'Pokemon',
    component: Pokemon,
    icon: 'list'
  }
]
