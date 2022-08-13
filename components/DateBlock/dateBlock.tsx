import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import StyleGuide from '@components/StyleGuide'
import useDate from '../../hooks/useDate'

const DateBlock = () => {
  const { time, date } = useDate()
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-start'
    },
    time: {
      ...StyleGuide.typography.time,
      color: StyleGuide.palette.blueLight
    },
    fecha: {
      fontSize: 12,
      lineHeight: 15,
      fontFamily: 'Montserrat-Regular',
      paddingRight: 20,
      color: StyleGuide.palette.blueLight
    },
    line: {
      height: '100%',
      width: 5,
      backgroundColor: StyleGuide.palette.blueLight,
      marginRight: 20,
      opacity: 0.5,
      borderRadius: 5
    }
  })
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{time}</Text>
      <View style={styles.line}></View>
      <Text style={styles.fecha}>{date}</Text>
    </View>
  )
}

export default DateBlock
