/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { dimensions } from '../theme/appTheme';
import { PokemonFull } from '../interfaces/pokemonInterfaces';

interface StatsPokemonProps {
  pokemon: PokemonFull,
  color: string,
}


export const StatsPokemon = ({ pokemon, color }: StatsPokemonProps) => {
  return (
    <View style={{ ...styles.container, marginBottom: 40 }}>
      <Text style={{ ...styles.title, marginTop: 20 }}>Stats</Text>
      <View style={{ marginBottom: 30 }}>
        {
          pokemon.stats.map((stat, i) => (
            <View
              key={stat.stat.name + i}
              style={{ flexDirection: 'row' }}
            >
              <Text
                style={{ ...styles.regularText, marginRight: 10, color: color, width: 150 }}
                key={stat.stat.name}
              >
                {stat.stat.name}
              </Text>

              <Text
                style={{ ...styles.regularText, color: color, fontWeight: 'bold' }}
              >
                {stat.base_stat}
              </Text>
            </View>
          ))
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: dimensions.details,
  },
  regularText: {
    fontSize: 20,
    fontWeight: '500',
  },
});

