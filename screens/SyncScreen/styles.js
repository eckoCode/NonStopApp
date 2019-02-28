import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { StyleSheet, View, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  subMainContainer: {
    height: hp(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
