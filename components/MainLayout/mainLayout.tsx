import React, { ReactChild } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import Header from '@components/Header'
import StyleGuide from '@components/StyleGuide'

interface LayoutProps {
  children: ReactChild | ReactChild[]
  style?: object | undefined
  showHeader?: boolean
  headerTitle?: string
  headerBack?: boolean
  headerNavigation?: any
}

const { height } = Dimensions.get('window')

const Layout = ({
  children,
  style,
  showHeader,
  headerTitle,
  headerBack,
  headerNavigation
}: LayoutProps) => {
  return (
    <View style={[styles.mainContainer, style]}>
      {showHeader && (
        <Header
          title={headerTitle}
          back={headerBack}
          navigation={headerNavigation}
        />
      )}
      {children}
    </View>
  )
}

export default Layout

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height,
    backgroundColor: StyleGuide.palette.blue
  }
})
