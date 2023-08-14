/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { dimensions } from '../theme/appTheme';
import { MovesPokemon } from './MovesPokemon';
import { StatsPokemon } from './StatsPokemon';
import { PokemonTypes } from './TypesPokemon';
import { SpritesPokemon } from './SpritesPokemon';


interface PokemonDetailsProps {
    pokemon: PokemonFull,
    color: string,
}

export const PokemonDetails = ({ pokemon, color }: PokemonDetailsProps) => {

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ ...StyleSheet.absoluteFillObject }}
        >
            {/* Types*/}
            <PokemonTypes pokemon={pokemon} color={color} />

            {/* Weight */}
            <View style={{ ...styles.container, marginTop: 20 }}>
                <Text style={{ ...styles.title, marginTop: 20 }}>Weight</Text>
                <Text style={{ ...styles.regularText, color: color }}>{(pokemon.weight / 10)} kg</Text>
            </View>

            {/* Sprites */}
            <SpritesPokemon pokemon={pokemon} />

            {/* Moves */}
            <MovesPokemon pokemon={pokemon} color={color} />

            {/* Stats */}
            <StatsPokemon pokemon={pokemon} color={color} />

        </ScrollView>
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
    basicSprite: {
        width: 100,
        height: 100,
    },
});
