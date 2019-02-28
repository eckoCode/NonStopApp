import React, { Component } from 'react';
import { View } from 'react-native';
import {
  Button,
  Header,
  Content,
  Text,
  Left,
  Icon,
  Card,
  CardItem,
  Body,
  Container,
  Title,
  FooterTab,
  Footer,
  Right,
} from 'native-base';
import styles from './styles';
import { colors } from '../../styles';

export default class SettingsScreen extends Component {
  onBackPress = () => {
    this.props.navigation.goBack();
  };

  onAppSettingsPress = () => {
    this.props.navigation.navigate('AppSettings');
  };

  onProfilePress = () => {
    this.props.navigation.navigate('ProfileSettings');
  };

  onAboutPress = () => {
    this.props.navigation.navigate('About');
  };

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: colors.white }}>
          <Left>
            <Button transparent onPress={this.onBackPress}>
              <Icon
                style={{ color: colors.primary }}
                type="MaterialCommunityIcons"
                name="arrow-left"
              />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: colors.primary, fontFamily: 'Quicksand' }}>
              Settings
            </Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={styles.mainContainer}>
            <View style={styles.mainLayoutButton}>
              <Button onPress={this.onProfilePress} rounded style={styles.btn}>
                <Text style={styles.textBtn}>Profile Settings</Text>
              </Button>
            </View>
            <View style={styles.mainLayoutButton}>
              <Button
                onPress={this.onAppSettingsPress}
                rounded
                style={styles.btn}
              >
                <Text style={styles.textBtn}>App Settings</Text>
              </Button>
            </View>
            <View style={styles.mainLayoutButton}>
              <Button onPress={this.onAboutPress} rounded style={styles.btn}>
                <Text style={styles.textBtn}>About</Text>
              </Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
