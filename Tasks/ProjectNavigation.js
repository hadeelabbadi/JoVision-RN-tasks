import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CameraScreen from './CameraScreen';

const Tab = createBottomTabNavigator();

const Screen = ({ title }) => (
  <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
    <Text>{title}</Text>
  </View>
);

export default function ProjectNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Camera" component={CameraScreen} />

        <Tab.Screen name="Sensors">
          {() => <Screen title="Sensors Screen" />}
        </Tab.Screen>

        <Tab.Screen name="Gallery">
          {() => <Screen title="Gallery Screen" />}
        </Tab.Screen>

        <Tab.Screen name="Slideshow">
          {() => <Screen title="Slideshow Screen" />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}