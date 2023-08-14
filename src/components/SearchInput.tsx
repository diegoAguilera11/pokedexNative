/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/self-closing-comp */
import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props {
    onDebounce: (value: string) => void
}

export const SearchInput = ({ onDebounce }: Props) => {

    const [textValue, setTextValue] = useState('');

    const debouncedValue = useDebouncedValue(textValue);

    useEffect(() => {
        onDebounce(debouncedValue);
    }, [debouncedValue]);

    return (
        <View style={styles.container}>
            <View style={styles.textBackground} >
                <TextInput
                    style={styles.textInput}
                    placeholder="Busca un pokémon"
                    placeholderTextColor="black"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue}
                />

                <Icon name="search-outline" size={30} color="grey" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: 'transparent',
    },
    textBackground: {
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center',
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    textInput: {
        color: 'black',
        flex: 1,
        fontSize: 18,
        paddingTop: 10,
    },

});
