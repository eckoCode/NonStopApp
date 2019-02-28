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
  },
  imageLoginContainer: {
    height: hp(40),
    width: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputsLoginContainer: {
    height: hp(20),
    width: wp(100),
    alignItems: 'center',
  },
  buttonContainer: {
    height: hp(20),
    width: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSignUpContainer: {
    height: hp(20),
    width: wp(100),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputRow: {
    padding: 5,
  },
  input: {
    margin: 5,
    width: wp(70),
    height: hp(7),
    backgroundColor: colors.lighter,
  },
  btnLogin: {
    height: hp(7.5),
    width: wp(50),
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  btnSignUp: {
    backgroundColor: colors.transparent,
  },
  textLoginBtn: {
    textAlign: 'center',
    color: colors.white,
  },
  textSignUp: {
    padding: 10,
  },
  textSignUpBtn: {
    color: colors.light,
  },
  simpleText: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: fonts.regular,
  },
});
export default styles;
