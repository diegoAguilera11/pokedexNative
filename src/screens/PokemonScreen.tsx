/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/TabList';
import { usePokemon } from '../hooks/usePokemon';

import { dimensions } from '../theme/appTheme';
import { BackButton } from '../components/BackButton';
import { HeaderPokemonInfo } from '../components/HeaderPokemonInfo';
import { PokemonDetails } from '../components/PokemonDetails';


interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { }

export const PokemonScreen = ({ navigation, route }: Props) => {

    const { simplePokemon, color } = route.params;
    const { id } = simplePokemon;
    const { pokemon: fullPokemon, isLoading } = usePokemon(id);

    return (
        <View style={{ flex: 1 }}>
            {/* Header Container */}
            <View style={{ ...styles.headerContainer, backgroundColor: color }}>
                <BackButton navigation={navigation} />

                {/* Header Pokemon Info */}
                <HeaderPokemonInfo pokemon={simplePokemon} />
            </View >

            {/* Details and Loading */}
            {
                isLoading ? (
                    <View style={styles.activityIndicator}>
                        <ActivityIndicator
                            color={color}
                            size={60}
                        />
                    </View>
                )
                    :
                    <PokemonDetails pokemon={fullPokemon} color={color} />
            }
        </View>
    );
};


const styles = StyleSheet.create({
    headerContainer: {
        height: dimensions.header,
        alignItems: 'center',
        zIndex: 999,
        borderBottomLeftRadius: 500,
        borderBottomRightRadius: 500,
    },
    activityIndicator: {
        flex: 1,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
