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
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 37.5,
  },
  rowTextInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;
