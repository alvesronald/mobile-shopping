import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import ShoppingStack from './src/modules/Shopping';

const App = () => {
  return (
    <NavigationContainer>
      <ShoppingStack />
    </NavigationContainer>
  );
};

export default App;
