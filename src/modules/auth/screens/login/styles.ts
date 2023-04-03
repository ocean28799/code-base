import { StyleSheet } from 'react-native';
import { appStyles, Colors } from '@core/theme';

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: Colors.white,
    ...appStyles.alignContentCenter,
  },
  loginTitle: {
    ...appStyles.text,
    fontSize: 20,
  },
});

export default styles;
