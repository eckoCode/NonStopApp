import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Button, Item, Input, Text } from 'native-base';
import styles from './styles';
import * as firebase from 'firebase';

// Later on in your component

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  onLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        () => {
          
        },
        error => {
          alert(error.message);
        }
      );
  };

  onCreateAccountPress = () => {
    this.props.navigation.navigate('SignUp');
  };

  render() {
    const uri = '../../assets/icons/running.svg';
    return (
      <View style={styles.mainContainer}>
        <View style={styles.imageLoginContainer}>
          
        </View>
        <View style={styles.inputsLoginContainer}>
          <View style={styles.inputRow}>
            <Item rounded style={styles.input}>
              <Input
                placeholder="Email"
                value={this.state.email}
                onChangeText={text => {
                  this.setState({ email: text });
                }}
              />
            </Item>
          </View>
          <View style={styles.inputRow}>
            <Item last rounded style={styles.input}>
              <Input
                secureTextEntry
                placeholder="Password"
                value={this.state.password}
                onChangeText={text => {
                  this.setState({ password: text });
                }}
              />
            </Item>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View>
            <Button rounded style={styles.btnLogin} onPress={this.onLoginPress}>
              <Text style={styles.textLoginBtn}>Login</Text>
            </Button>
          </View>
        </View>
        <View style={styles.textSignUpContainer}>
          <Button onPress={this.onCreateAccountPress} transparent full>
            <View style={styles.textContainer}>
              <Text style={styles.simpleText}>
                If you dont have account please
                <Text style={styles.textSignUpBtn}> Sign Up..</Text>
              </Text>
            </View>
          </Button>
        </View>
      </View>
    );
  }
}
