import React from 'react'
import { Image, Keyboard, StyleSheet } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const Clock = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Image
        style={styles.clockImage}
        source={require('../../assets/images/clock.png')}
      />
    </TouchableWithoutFeedback>
  )
}

export default Clock

const styles = StyleSheet.create({
  clockImage: {
    width: 100,
    height: 150
  }
})
