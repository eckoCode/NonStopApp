import React, { Component } from 'react';
import { View, DocumentPicker } from 'react-native';
import { Container, Button, Content, Icon, Text } from 'native-base';
import { colors } from '../../styles';
import styles from './styles';
import EasyFit from 'easy-fit';

export default class SyncScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  getFilePress = () => {
    // Require the module

    // Read a .FIT file

      DocumentPicker.getDocumentAsync('../../assets/190113083624.fit', function(err, content) {
      // Create a EasyFit instance (options argument is optional)
      var easyFit = new EasyFit({
        force: true,
        speedUnit: 'km/h',
        lengthUnit: 'km',
        temperatureUnit: 'kelvin',
        elapsedRecordField: true,
        mode: 'cascade',
      });

      // Parse your file
      easyFit.parse(content, function(error, data) {
        // Handle result of parse method
        if (error) {
          console.log(error);
        } else {
          console.log(JSON.stringify(data));
        }
      });
    });
  };

  render() {
    return (
      <Container>
        <Content>
          <View style={styles.mainContainer}>
            <View style={styles.subMainContainer}>
              <View style={styles.iconContainer}>
                <Button transparent large onPress={this.getFilePress}>
                  <Icon
                    style={{ color: colors.primary }}
                    type="MaterialCommunityIcons"
                    name="chevron-up-circle-outline"
                  />
                </Button>
              </View>
              <View style={styles.uploadTextContainer}>
                <Text style={{ fontFamily: 'Quicksand_bold', fontSize: 30 }}>
                  Upload File
                </Text>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
