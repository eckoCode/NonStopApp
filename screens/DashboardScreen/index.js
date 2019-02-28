import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
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
import * as firebase from 'firebase';
import { colors } from '../../styles';

const data = {
  labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 15],
    },
  ],
};
const screenWidth = Dimensions.get('window').width;
const chartConfig = {
  backgroundGradientFrom: colors.darker,
  backgroundGradientTo: colors.dark,
  color: (opacity = 1) => `rgba(1, 57, 92, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  style: {
    borderRadius: 16,
  },
};

export default class DashboardScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onSignOutPress = () => {
    firebase.auth().signOut();
  };

  onSyncPress = () => {
    this.props.navigation.navigate('Sync');
  };

  onSettingsPress = () => {
    this.props.navigation.navigate('Settings');
  };

  render() {
    return (
      <Container style={{ backgroundColor: colors.white }}>
        <Header style={{ backgroundColor: colors.white }}>
          <Left />
          <Body>
            <Title style={styles.titleHeader}>Dashboard</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.onSignOutPress}>
              <Icon
                style={{ color: colors.primary }}
                type="MaterialCommunityIcons"
                name="logout"
              />
            </Button>
          </Right>
        </Header>
        <Content>
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', padding: 5 }}>
              <View style={{ flex: 1 }}>
                <Image
                  source={require('../../assets/profile.png')}
                  style={styles.avatar}
                />
              </View>
              <View style={{ flex: 3, justifyContent: 'center' }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <Text style={{ fontFamily: 'Quicksand' }}> Joao Marques</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <Text note style={styles.textUser}>
                    23 yrs
                  </Text>
                  <Text note style={styles.textUser}>
                    69 kg
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Card>
                <CardItem style={styles.graphCard}>
                  <LineChart
                    data={data}
                    width={screenWidth - 40}
                    height={220}
                    chartConfig={chartConfig}
                    bezier
                    style={{
                      borderRadius: 16,
                    }}
                  />
                </CardItem>
                <CardItem>
                  <Left>
                    <Icon
                      style={{ color: colors.primary }}
                      type="MaterialCommunityIcons"
                      name="map-marker-distance"
                    />
                    <Text style={styles.textUser}>30.0 km</Text>
                  </Left>
                  <Body />
                  <Right>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon
                        style={{ color: colors.primary }}
                        type="MaterialCommunityIcons"
                        name="timer"
                      />
                      <Text style={styles.textUser}>2h 30m</Text>
                    </View>
                  </Right>
                </CardItem>
              </Card>
            </View>
          </View>
        </Content>
        <Footer>
          <FooterTab style={{ backgroundColor: colors.white }}>
            <Button onPress={this.onSyncPress}>
              <Icon style={{ color: colors.primary }} name="sync" />
            </Button>
            <Button>
              <Icon style={{ color: colors.primary }} name="bicycle" />
            </Button>
            <Button onPress={this.onSettingsPress}>
              <Icon style={{ color: colors.primary }} name="settings" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
