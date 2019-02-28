import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: hp(80),
    width: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainLayoutButton: {
    padding: 10,
  },
  btn: {
    backgroundColor: colors.primary,
    width: wp(50),
    justifyContent: 'center',
  },
  textBtn: {
    fontFamily: 'Quicksand',
    fontWeight: 'bold'
  },
});

export default styles;
