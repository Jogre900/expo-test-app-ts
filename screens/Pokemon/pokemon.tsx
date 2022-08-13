import React from 'react'
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet
} from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'
import PokeMenu from '@components/MenuPokemon'
import StyleGuide from '@components/StyleGuide'
import PokeHeader from '@components/PokemonHeader/pokeHeader'
// const {} = Dimensions.get('window')

const Pokemon = ({ navigation }: any) => {
  const [text, setText] = React.useState<string>('')
  return (
    <View style={styles.container}>
      <PokeHeader navigation={navigation} />
      <View style={styles.searchContainer}>
        <Text style={styles.title}>List of Pokemons</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Search"
            placeholderTextColor={StyleGuide.palette.lightGrey}
            style={styles.input}
            value={text}
            onChangeText={(value) => setText(value)}
          />
          <Icon name="search" size={20} color={StyleGuide.palette.lightGrey} />
        </View>
      </View>
      <View style={styles.listContainer}>
        <KeyboardAvoidingView behavior="height">
          <PokeMenu searchText={text} navigation={navigation} />
        </KeyboardAvoidingView>
      </View>
    </View>
  )
}

export default Pokemon

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleGuide.palette.darkGrey
  },
  searchContainer: {
    flex: 1,
    backgroundColor: StyleGuide.palette.darkGrey,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 10,
    paddingHorizontal: 20
  },
  title: {
    color: StyleGuide.palette.lightGrey,
    fontSize: 24,
    alignSelf: 'center',
    marginVertical: 20
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: StyleGuide.palette.lightBlack,
    alignItems: 'center',
    paddingRight: 10,
    borderRadius: 10
  },
  input: {
    color: StyleGuide.palette.lightGrey,
    paddingVertical: 20,
    flex: 1,
    paddingLeft: 10
  },
  listContainer: {
    flex: 2,
    backgroundColor: StyleGuide.palette.lightBlack,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20
  }
})
