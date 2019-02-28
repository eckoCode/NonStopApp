import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts, metrics } from '../../styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.lighter,
    justifyContent: 'flex-start',
  },
  imageContainer: {
    marginTop: 20,
    marginLeft: 30,
  },
  formContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    height: hp(30),
    width: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    margin: 5,
    height: hp(7),
    width: wp(70),
    backgroundColor: colors.lighter,
  },
  btnSignUp: {
    height: hp(7.5),
    width: wp(50),
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  image: {
    width: wp(15),
    height: hp(10),
    resizeMode: 'stretch',
  },
  textSignUpBtn: {
    color: colors.white,
  },
});
export default styles;
