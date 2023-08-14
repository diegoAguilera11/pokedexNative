/* eslint-disable react-native/no-inline-styles */
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FadeInImage } from './FadeInImage';
import { dimensions } from '../theme/appTheme';
import { PokemonFull } from '../interfaces/pokemonInterfaces';


interface SpritesPokemonProps {
    pokemon: PokemonFull,
}


export const SpritesPokemon = ({ pokemon }: SpritesPokemonProps) => {
    return (
        <>
            <View style={{ ...styles.container, marginTop: 20 }}>
                <Text style={{ ...styles.title, marginTop: 20 }}>Sprites</Text>
            </View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={styles.basicSprite}
                />

                <FadeInImage
                    uri={pokemon.sprites.back_default}
                    style={styles.basicSprite}
                />

                <FadeInImage
                    uri={pokemon.sprites.front_shiny}
                    style={styles.basicSprite}
                />

                <FadeInImage
                    uri={pokemon.sprites.back_shiny}
                    style={styles.basicSprite}
                />
            </ScrollView>
        </>
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
