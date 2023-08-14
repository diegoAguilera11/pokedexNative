/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
import React, { useState, useEffect } from 'react';
import { View, Platform, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { ActivityIndicator } from 'react-native';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native';
import { PokemonCardItem } from '../components/PokemonCardItem';
import { styles as globalStyles } from '../theme/appTheme';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';


export const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);
  const { isFetching, simplePokemonList } = usePokemonSearch();
  const { top } = useSafeAreaInsets();


  useEffect(() => {
    if (term.length === 0) {
      return setPokemonFiltered([]);
    }

    if (isNaN(Number(term))) {
      setPokemonFiltered(
        simplePokemonList.filter(
          pokemon => pokemon.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
        )
      );
    } else {
      const pokemonById = simplePokemonList.find(pokemon => pokemon.id === term)!;
      setPokemonFiltered(
        (pokemonById) ? [pokemonById] : []
      );
    }

  }, [term]);


  if (isFetching) {
    return (
      <View style={styles.activityContainer}>
        <ActivityIndicator color="gray" size={50} />
      </View>
    );
  }
  return (
    <View style={{
      flex: 1,
      marginHorizontal: 20
    }}>
      <SearchInput
        onDebounce={(value) => setTerm(value)}
        style={{ zIndex: 999, position: 'absolute', marginTop: (Platform.OS === 'ios') ? top : top + 10, }}
      />

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
              ...globalStyles.title,
              ...globalStyles.globalMargin,
            }}
          >{term}</Text>
        )}
        data={pokemonFiltered}
        keyExtractor={(pokemon) => pokemon.id}
        renderItem={({ item }) => <PokemonCardItem pokemon={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  activityContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});
