import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SimplePokemon } from '../../interfaces/pokemonInterfaces';
import { SearchScreen } from '../../screens/SearchScreen';
import { PokemonScreen } from '../../screens/PokemonScreen';



export type RootStackParams = {
  HomeScreen: undefined,
  PokemonScreen: { simplePokemon: SimplePokemon, color: string },
}

const TabSearch = createStackNavigator<RootStackParams>();

export const TabSearchScreen = () => {
  return (
    <TabSearch.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <TabSearch.Screen name="HomeScreen" component={SearchScreen} />
      <TabSearch.Screen name="PokemonScreen" component={PokemonScreen} />
    </TabSearch.Navigator>
  );
};
