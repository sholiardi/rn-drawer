import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { Drawer } from 'native-base';
import { Header } from 'react-native-elements';
import SideMenu from './SideMenu';

export default class App extends Component {
  render() {

    closeDrawer = () => {
      this.drawer._root.close()
    };

    openDrawer = () => {
      this.drawer._root.open();
    };

    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideMenu navigator={this.navigator} />}
        onClose={closeDrawer} >

        <Header
          leftComponent={{ icon: 'menu', color: '#fff', onPress: openDrawer }}
          centerComponent={{ text: 'Header', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />

      </Drawer>
    );

  }
}
