import react from 'react';
import {
    View,
    Text,
    SafeAreaView,
    useColorScheme,
    StyleSheet
} from 'react-native';

function Apppro(): JSX.Element { //jsx.element is for typescript to reurn jsx
    const isDarkMode = useColorScheme() === 'dark'
    return (

        <View style={styles.dir}>
            <View>
                <Text style={{ fontSize: 20 }}>Card Box</Text>
            </View>
            <View style={styles.main}>
                <View style={styles.container}>
                    <Text style={isDarkMode ? styles.WhiteText : styles.DarkText}>hello world</Text>
                </View>
            </View>
            <View style={styles.main}>
                <View style={styles.container}>
                    <Text style={isDarkMode ? styles.WhiteText : styles.DarkText}>hello world</Text>
                </View>
            </View>
            <View style={styles.main}>
                <View style={styles.container}>
                    <Text style={isDarkMode ? styles.WhiteText : styles.DarkText}>hello world</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dir: {
        flex: 1,
        flexDirection: 'column',
        padding: 5
    },
    main: {
        height: 100,
        width: 100,
        backgroundColor: 'red',
        borderRadius: 4,
        margin: 4
    },
    WhiteText: {
        color: '#ffffff'
    },
    DarkText: {
        color: '#000000'
    }

})

export default Apppro;
