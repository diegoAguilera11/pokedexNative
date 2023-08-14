import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';


export const BackButton = ({ navigation }: any) => {
    const { top } = useSafeAreaInsets();

    return (
        <TouchableOpacity
            style={{ ...styles.backButton, top: top + 15 }}
            activeOpacity={0.5}
            onPress={() => navigation.goBack()}
        >
            <Icon name="arrow-back-outline" size={50} color="#FFF" />
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        left: 20,
    },
});
