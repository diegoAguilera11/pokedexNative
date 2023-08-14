import { StyleSheet, Dimensions } from 'react-native';
const heightScreen = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    pokeBallBg: {
        height: 300,
        position: 'absolute',
        top: -100,
        right: -100,
        width: 300,
        opacity: 0.3,
    },
    title:{
        color: '#000',
        fontSize: 35,
        fontWeight: 'bold',
    },
});


export const dimensions = {
    header:(heightScreen * 0.4),
    bottonBackTop:(heightScreen * 0.03),
    details:(heightScreen * 0.45),
};
