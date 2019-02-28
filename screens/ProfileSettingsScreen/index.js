import React, { Component } from 'react';
import { View, Image } from 'react-native';
import {
  Button,
  Header,
  Content,
  Text,
  Left,
  Icon,
  Card,
  Form,
  CardItem,
  Body,
  Container,
  Title,
  FooterTab,
  Footer,
  Item,
  Label,
  Input,
  Right,
} from 'native-base';
import styles from './styles';
import { colors } from '../../styles';

const objectDescription = {
  user: {
    name: 'Joao Marques',
    height: '170',
    weight: '69',
    gender: 'Male',
  },
};

export default class ProfileSettingsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onBackPress = () => {
    this.props.navigation.goBack();
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
              Profile Settings
            </Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={styles.mainContainer}>
            <View style={{ padding: 20 }}>
              <View style={{ flex: 1 }}>
                <Image
                  source={require('../../assets/profile.png')}
                  style={styles.avatar}
                />
              </View>
              <View style={styles.descriptionContainer}>
                <View style={styles.rowTextInputContainer}>
                  <Text>Display Name: </Text>
                  <Item>
                    <Input placeholder={'Display Name'} />
                  </Item>
                </View>
                <View style={styles.rowTextInputContainer}>
                  <Text>Height: </Text>
                  <Item>
                    <Input placeholder="Height" />
                  </Item>
                </View>
                <View style={styles.rowTextInputContainer}>
                  <Text>Weight: </Text>
                  <Item style={{ justifyContent: 'center' }}>
                    <Input placeholder="Weight" />
                  </Item>
                </View>
                <View style={styles.rowTextInputContainer}>
                  <Text>Gender: </Text>
                  <Item>
                    <Input placeholder="Gender" />
                  </Item>
                </View>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
