import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { useAuthState, useAuthDispatch } from '../../auth'
import Clock from '@components/Clock'
import DateBlock from '@components/DateBlock'
import ButtonFichar from '@components/BotonFichar'
import { Feather as Icon } from '@expo/vector-icons'
import StyleGuide from '@components/StyleGuide'
import Header from '@components/Header'
import HomeMenu from '@components/HomeMenu/homeMenu'
import MainLayout from '@components/MainLayout'
const { height } = Dimensions.get('window')

const Home = () => {
  const dispatch = useAuthDispatch()
  const state = useAuthState()
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <MainLayout showHeader headerTitle="Home">
      <View style={styles.topView}>
        <View style={styles.clockBack}>
          <Clock />
        </View>
        <View style={styles.user}>
          <View style={styles.userImage}>
            <Icon name={'user'} size={30} color="#09f" />
          </View>
          <View style={styles.description}>
            <Text style={styles.saludo}>Hola Jose!</Text>
          </View>
        </View>
        <DateBlock />
      </View>

      <View style={styles.bottomView}>
        <View style={styles.bottomViewContent}>
          <HomeMenu />
        </View>
      </View>

      <View style={styles.frame}>
        <View style={styles.frameContent}>
          <View style={styles.frameRow}>
            <ButtonFichar {...{ setVisible }} />
          </View>
        </View>
      </View>
    </MainLayout>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    height,
    backgroundColor: StyleGuide.palette.blue
  },
  topView: {
    paddingHorizontal: 18,
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: StyleGuide.palette.darkBlue
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  userImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    borderColor: StyleGuide.palette.blueLight,
    borderWidth: 3
  },
  saludo: {
    ...StyleGuide.typography.title3,
    color: StyleGuide.palette.white
  },
  description: {
    flex: 1,
    paddingHorizontal: StyleGuide.spacing
  },
  bottomView: {
    backgroundColor: StyleGuide.palette.darkBlue,
    flex: 1
  },
  bottomViewContent: {
    overflow: 'hidden',
    backgroundColor: StyleGuide.palette.white,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    flexDirection: 'column'
  },
  clockBack: {
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 0,
    opacity: 1
  },
  frame: {
    backgroundColor: StyleGuide.palette.blueLight,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  frameContent: {
    flex: 1,
    paddingBottom: 10
  },
  frameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})
