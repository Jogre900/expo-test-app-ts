import React, { useContext } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Platform
} from 'react-native'
import StyleGuide from '@components/StyleGuide'
// import { AuthContext } from '../context';
import useDate from '../../hooks/useDate'
// import LightenDarkenColor from '../utils';
import { Feather as Icon } from '@expo/vector-icons'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
    // backgroundColor: StyleGuide.palette.white
  },
  btnFichar: {
    width: '100%',
    height: 100,
    backgroundColor: StyleGuide.palette.blue,
    borderRadius: 5,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2
  },
  textTop: {
    marginBottom: 10,
    color: StyleGuide.palette.black
  },
  textButton: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    color: StyleGuide.palette.white
  },
  texDifference: {
    ...StyleGuide.typography.caption,
    color: StyleGuide.palette.white
  },
  differenceTime: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

const ButtonFichar = ({ setVisible }) => {
  // const { state } = useContext(AuthContext);
  const { differenceTime } = useDate()
  // const backgroundColor = state.fichaje ? StyleGuide.palette.red : StyleGuide.palette.blue;
  // console.log('fichaje ', state.fichaje);
  return (
    <View style={styles.container}>
      <Text style={styles.textTop}>Utiliza el botón para fichar</Text>
      <TouchableHighlight
        style={[styles.btnFichar]}
        activeOpacity={1}
        // underlayColor={LightenDarkenColor(backgroundColor, 30)}
        onPress={() => {
          setVisible(true)
        }}
        // backgroundColor={backgroundColor}
        color={StyleGuide.palette.white}
      >
        <>
          <Text style={styles.textButton}>ENTRADA</Text>
          {/* {state.fichaje && differenceTime(state.fichaje.fecha) && (
						<View style={styles.differenceTime}>
							<Icon name="clock" size={10} color={StyleGuide.palette.white} />
							<Text style={styles.texDifference}> {differenceTime(state.fichaje.fecha)}</Text>
						</View>
					)} */}
        </>
      </TouchableHighlight>
    </View>
  )
}

export default ButtonFichar
