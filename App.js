import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

//Import Screens
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import DashboardScreen from './screens/DashboardScreen';
import SyncScreen from './screens/SyncScreen';
import SettingsScreen from './screens/SettingsScreen';
import AppSettingsScreen from './screens/AppSettingsScreen';
import ProfileSettingsScreen from './screens/ProfileSettingsScreen';
import AboutScreen from './screens/AboutScreen';

import { metrics } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { Font, AppLoading } from 'expo';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ApiKeys from './constants/ApiKeys';
import * as firebase from 'firebase';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthReady: false,
      isAuth: false,
      fontLoaded: false,
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged = user => {
    this.setState({ isAuthReady: true });
    this.setState({ isAuth: !!user });
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Quicksand: require('./assets/fonts/Quicksand-Regular.ttf'),
      Quicksand_medium: require('./assets/fonts/Quicksand-Medium.ttf'),
      Quicksand_bold: require('./assets/fonts/Quicksand-Bold.ttf'),
      Quicksand_light: require('./assets/fonts/Quicksand-Light.ttf'),
      ...Ionicons.font,
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded || !this.state.isAuthReady) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <StatusBar hidden />
          {this.state.isAuth ? (
            <DashboardScreen navigation={this.props.navigation} />
          ) : (
            <LoginScreen navigation={this.props.navigation} />
          )}
        </View>
      );
    }
  }
}

const AppNavigator = createStackNavigator(
  {
    Login: { screen: App },
    SignUp: { screen: SignUpScreen },
    Dashboard: { screen: DashboardScreen },
    Sync: { screen: SyncScreen },
    Settings: { screen: SettingsScreen },
    ProfileSettings: { screen: ProfileSettingsScreen },
    About: { screen: AboutScreen },
    AppSettings: { screen: AppSettingsScreen },
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      header: null,
    },
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#363A44',
  },
});

export default createAppContainer(AppNavigator);
