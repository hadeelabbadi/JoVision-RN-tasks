import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Screen = ({ title }) => (
  <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
    <Text>{title}</Text>
  </View>
);

export default function Task41() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Screen1">
          {() => <Screen title="Screen 1" />}
        </Tab.Screen>
        <Tab.Screen name="Screen2">
          {() => <Screen title="Screen 2" />}
        </Tab.Screen>
        <Tab.Screen name="Screen3">
          {() => <Screen title="Screen 3" />}
        </Tab.Screen>
        <Tab.Screen name="Screen4">
          {() => <Screen title="Screen 4" />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}