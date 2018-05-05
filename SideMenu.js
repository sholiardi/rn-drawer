import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
export default class ListExample extends Component {
  render() {
    return (
      <Container style={{backgroundColor: '#ffffff'}}>
        <Content>
          <View style={{backgroundColor: '#416CDE', height: 200}}></View>
          <List>
            <ListItem>
              <Text>Home</Text>
            </ListItem>
            <ListItem>
              <Text>Settings</Text>
            </ListItem>
            <ListItem>
              <Text>About</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
