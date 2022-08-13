import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, addons } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'
import Constants from 'expo-constants'
import HeaderLogo from '@components/HeaderLogo'
import StyleGuide from '@components/StyleGuide'
import { HeaderProps } from './header.types'

const headerHeight = 48

const Header = ({ title, back, navigation }: HeaderProps) => {
  return (
    <View style={styles.container}>
      {back && (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation?.goBack()}
        >
          <Icon name="arrow-left" size={20} color={StyleGuide.palette.white} />
        </TouchableOpacity>
      )}
      {title === 'onTime' ? (
        <View style={styles.onTime}>
          <Text style={styles.titleRegular}>On</Text>
          <Text style={styles.title}>Time</Text>
        </View>
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
      <HeaderLogo color={StyleGuide.palette.white} width={90} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    backgroundColor: StyleGuide.palette.blue,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
    zIndex: 1,
    paddingTop: Constants.statusBarHeight,
    height: Constants.statusBarHeight + headerHeight
  },
  title: {
    ...StyleGuide.typography.headline,
    flex: 1,
    color: StyleGuide.palette.white,
    lineHeight: 30
  },
  titleRegular: {
    ...StyleGuide.typography.headlineRegular,
    color: StyleGuide.palette.white,
    lineHeight: 30
  },
  onTime: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  backButton: {
    paddingRight: 10,
    height: Constants.statusBarHeight + headerHeight,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
