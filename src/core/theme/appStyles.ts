import { StyleSheet } from 'react-native';
// import Fonts from './fonts';

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  text: {
    // fontFamily: Fonts.roundedMplus1cMedium,
  },
  absoluteFull: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  alignContentCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  imageBackgroundRepeat: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'repeat',
  },
});

export default styles;
