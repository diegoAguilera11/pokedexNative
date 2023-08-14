import React from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import { FadeInImage } from './FadeInImage';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { dimensions } from '../theme/appTheme';


interface PokemonProps {
    pokemon: SimplePokemon
}

export const HeaderPokemonInfo = ({ pokemon }: PokemonProps) => {
    const { top } = useSafeAreaInsets();
    const { id, name, picture } = pokemon;
    return (
        <>
            {/* Name Pokemon */}
            <Text style={{ ...styles.pokemonName, top: top + 60 }}>{name + '\n'} # {id}</Text>

            <Image source={require('../assets/pokebola-blanca.png')} style={{ ...styles.pokeball }} />

            <FadeInImage uri={picture} style={styles.pokemonImage} />
        </>
    );
};


const styles = StyleSheet.create({
    pokemonName: {
        color: '#FFF',
        fontSize: 35,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        left: 20,
    },
    pokemonImage: {
        width: 220,
        height: 220,
        borderRadius: 100,
        position: 'absolute',
        bottom: -15,
    },
    pokeball: {
        width: 200,
        height: 200,
        bottom: -10,
        opacity: 0.6,
    },
});
