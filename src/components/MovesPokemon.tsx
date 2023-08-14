/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { dimensions } from '../theme/appTheme';
import { PokemonFull } from '../interfaces/pokemonInterfaces';


interface MovesPokemonProps {
    pokemon: PokemonFull,
    color: string,
}


export const MovesPokemon = ({ pokemon, color }: MovesPokemonProps) => {
    return (
        <View style={styles.container}>
            <Text style={{ ...styles.title, marginTop: 20 }}>Moves</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                    pokemon.moves.map(({ move }) => (
                        <Text
                            style={{ ...styles.regularText, marginRight: 10, color: color }}
                            key={move.name}
                        >
                            {move.name}
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
