import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts, metrics } from '../../styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.lighter,
    justifyContent: 'center',
    height: hp(100),
    width: wp(100),
    alignItems: 'center',
  },
  btnLogin: {
    height: hp(7.5),
    width: wp(50),
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  textLoginBtn: {
    textAlign: 'center',
    color: colors.white,
  },
});
export default styles;
