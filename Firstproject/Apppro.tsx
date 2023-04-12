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
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={isDarkMode ? styles.WhiteText : styles.DarkText}>hello world</Text>
                <Text>worldjhdjh </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center'
    },
    WhiteText: {
        color: '#ffffff'
    },
    DarkText: {
        color: '#000000'
    }

})

export default Apppro;
