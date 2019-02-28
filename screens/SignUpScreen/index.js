import React, { Component } from 'react';
import { View, Image } from 'react-native';
import * as firebase from 'firebase';
import {
  Button,
  Item,
  Input,
  Content,
  Left,
  Body,
  Text,
  Header,
  Icon,
  Title,
  Container,
} from 'native-base';

import styles from './styles';
import { colors } from '../../styles';

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
    };
  }

  onSignUpPress = () => {
    if (this.state.password !== this.state.passwordConfirmation) {
      alert('Passwords do not match!');
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        () => {},
        error => {
          alert(error.message);
        }
      );
  };

  render() {
    return (
      <Container style={{ backgroundColor: colors.lighter}}>
        <Header
          style={{ backgroundColor: colors.lighter, borderBottomWidth: 0 }}
        >
          <Left>
            <Button
              onPress={() => this.props.navigation.navigate('Login')}
              transparent
            >
              <Icon style={{ color: colors.light }} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: colors.light }}>Sign Up</Title>
          </Body>
        </Header>
        <Content>
          <View style={styles.mainContainer}>
            <View style={styles.imageContainer} />
            <View style={styles.formContainer}>
              <Item last rounded style={styles.input}>
                <Input placeholder="Fullname" />
              </Item>
              <Item last rounded style={styles.input}>
                <Input placeholder="Username" />
              </Item>
              <Item last rounded style={styles.input}>
                <Input
                  placeholder="Email"
                  value={this.state.email}
                  onChangeText={text => {
                    this.setState({ email: text });
                  }}
                />
              </Item>
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
              <Item last rounded style={styles.input}>
                <Input
                  secureTextEntry
                  placeholder="Password Confirmation"
                  value={this.state.passwordConfirmation}
                  onChangeText={text => {
                    this.setState({ passwordConfirmation: text });
                  }}
                />
              </Item>
            </View>
            <View style={styles.buttonContainer}>
              <View>
                <Button rounded style={styles.btnSignUp}>
                  <Text
                    style={styles.textSignUpBtn}
                    onPress={this.onSignUpPress}
                  >
                    Sign Up
                  </Text>
                </Button>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
