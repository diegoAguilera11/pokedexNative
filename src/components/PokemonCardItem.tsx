/* eslint-disable comma-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import ImageColors from 'react-native-image-colors';

const { width } = Dimensions.get('window');

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCardItem = ({ pokemon }: Props) => {
    const [bgColor, setBgColor] = useState('red');
    const isMounted = useRef(true);
    const navigation = useNavigation();
    useEffect(() => {
        ImageColors.getColors(pokemon.picture, { fallback: 'red' })
            .then(colors => {
                if (!isMounted) return;
                (colors.platform === 'android')
                    ?
                    setBgColor(colors.vibrant || 'red')
                    :
                    setBgColor(colors.background || 'red');
            });

        return () => {
            isMounted.current = false;
        };
    }, []);

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('PokemonScreen', { simplePokemon: pokemon, color: bgColor })}
        >
            <View style={{
                ...styles.cardContainer,
                backgroundColor: bgColor,
                width: (width * 0.4),
            }}>
                {/* Nombre y ID del pokemon */}
                <View>
                    <Text style={styles.name}>
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>

                <View style={styles.pokebolaContainer}>
                    <Image
                        source={require('../assets/pokebola-blanca.png')}
                        style={styles.pokebola}
                    />
                </View>
                <FadeInImage
                    uri={pokemon.picture}
                    style={styles.pokemonImage}
                />
            </View>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        // overflow: 'hidden',
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10,
        zIndex: 1,
    },
    pokebola: {
        width: 100,
        height: 100,
        right: -20,
        bottom: -20,

        // position: 'absolute',
        // bottom: -20,
        // right: -20,
        // opacity: 0.5,
    },
    pokemonImage: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -5,
        right: -5,
    },
    pokebolaContainer: {
        // backgroundColor: 'blue',
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        overflow: 'hidden',
        opacity: 0.6,

    },
});
