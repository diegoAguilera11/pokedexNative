import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { PokemonScreen } from '../screens/PokemonScreen';
import { HomeScreen } from '../screens/HomeScreen';


export type RootStackParams = {
  HomeScreen: undefined,
  PokemonScreen: { simplePokemon: SimplePokemon, color: string },
}

const Stack = createStackNavigator<RootStackParams>();

export const TabList = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  );
};

