import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { dimensions } from '../theme/appTheme';

const TraitPokemon = ({data}) => {
    const {} = data;
    return (
        <View style={{ ...styles.container, marginTop: 20 }}>
            <Text style={{ ...styles.title, marginTop: 20 }}>Peso</Text>
            <Text style={{ ...styles.regularText, color: color }}>{(pokemon.weight / 10)} kg</Text>
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
    basicSprite: {
        width: 100,
        height: 100,
    },
});

