import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';

export const OneScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{textAlign: 'center'}}>SHOPPING - TELA 1</Text>
      <Button
        title="Ir para tela 2"
        onPress={() => navigation.navigate('SecondScreen')}
      />
    </SafeAreaView>
  );
};
