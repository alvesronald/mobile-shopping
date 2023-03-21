import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OneScreen} from './OneScreen';
import {SecondScreen} from './SecondScreen';

export type ShoppingStackNavigator = {
  OneScreen: undefined;
  SecondScreen: undefined;
};

const Stack = createNativeStackNavigator<ShoppingStackNavigator>();

const ShoppingStack = () => (
  <Stack.Navigator initialRouteName="OneScreen">
    <Stack.Screen
      name="OneScreen"
      component={OneScreen}
      options={{
        // headerShown: false,
        title: 'Shopping - Tela 1',
      }}
    />

    <Stack.Screen
      name="SecondScreen"
      component={SecondScreen}
      options={{
        // headerShown: false,
        title: 'Shopping - Tela 2',
      }}
    />
  </Stack.Navigator>
);

export default ShoppingStack;
