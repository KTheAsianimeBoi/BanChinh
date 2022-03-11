import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import {} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
class HomeScreen extends Component() {
  render() {
    return (
      <SafeAreaView
        style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <View>
          <Text>Home Screen</Text>
          <Text onPress={() => this.props.navigation.navigate('Detail')}>
            Details
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

class DetailScreen extends Component() {
  render() {
    return (
      <SafeAreaView
        style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <View>
          <Text onPress={() => this.props.navigation.navigate('Home')}>
            Detail Screen
          </Text>
          <Text> Move back</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default class RootApp extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
