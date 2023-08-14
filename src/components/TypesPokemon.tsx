/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { dimensions } from '../theme/appTheme';
import { PokemonFull } from '../interfaces/pokemonInterfaces';

interface TypesPokemonProps {
    pokemon: PokemonFull,
    color: string,
}

export const PokemonTypes = ({ pokemon, color }: TypesPokemonProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Types</Text>
            <View style={{ flexDirection: 'row' }}>
                {
                    pokemon.types.map(({ type }) => (
                        <Text
                            style={{ ...styles.regularText, marginRight: 10, color: color }}
                            key={type.name}
                        >
                            {type.name}
                        </Text>
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

