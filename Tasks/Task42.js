import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Screen1({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Screen 1</Text>
      <Button title="Go to Screen 2" onPress={() => navigation.navigate('Screen2')} />
      <Button title="Go to Screen 3" onPress={() => navigation.navigate('Screen3')} />
      <Button title="Go to Screen 4" onPress={() => navigation.navigate('Screen4')} />
    </View>
  );
}

function Screen2({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Screen 2</Text>
      <Button title="Go to Screen 1" onPress={() => navigation.navigate('Screen1')} />
      <Button title="Go to Screen 3" onPress={() => navigation.navigate('Screen3')} />
      <Button title="Go to Screen 4" onPress={() => navigation.navigate('Screen4')} />
    </View>
  );
}

function Screen3({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Screen 3</Text>
      <Button title="Go to Screen 1" onPress={() => navigation.navigate('Screen1')} />
      <Button title="Go to Screen 2" onPress={() => navigation.navigate('Screen2')} />
      <Button title="Go to Screen 4" onPress={() => navigation.navigate('Screen4')} />
    </View>
  );
}

function Screen4({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Screen 4</Text>
      <Button title="Go to Screen 1" onPress={() => navigation.navigate('Screen1')} />
      <Button title="Go to Screen 2" onPress={() => navigation.navigate('Screen2')} />
      <Button title="Go to Screen 3" onPress={() => navigation.navigate('Screen3')} />
    </View>
  );
}

export default function Task42() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Screen1" component={Screen1} />
        <Tab.Screen name="Screen2" component={Screen2} />
        <Tab.Screen name="Screen3" component={Screen3} />
        <Tab.Screen name="Screen4" component={Screen4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}