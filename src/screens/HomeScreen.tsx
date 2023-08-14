/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginate';
import { PokemonCardItem } from '../components/PokemonCardItem';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { simplePokemonList, loadPokemons } = usePokemonPaginated();
    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokeBallBg}
            />

            <View
                style={{ alignItems: 'center' }}
            >
                <FlatList
                    showsVerticalScrollIndicator={false}
                    scrollEnabled
                    numColumns={2}

                    // Header
                    ListHeaderComponent={(
                        <Text
                            style={{
                                top: (top + 20),
                                marginBottom: top + 20,
                                paddingBottom: 10,
                                ...styles.title,
                                ...styles.globalMargin,
                            }}
                        >Pokédex</Text>
                    )}
                    data={simplePokemonList}
                    keyExtractor={(pokemon) => pokemon.id}
                    renderItem={({ item }) => <PokemonCardItem pokemon={item} />}
                    // Infinite scroll
                    onEndReached={loadPokemons}
                    onEndReachedThreshold={0.4}

                    ListFooterComponent={<ActivityIndicator style={{ height: 100 }} size={25} color="blue" />}
                />
            </View>
        </>
    );
};
