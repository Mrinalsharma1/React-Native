import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
    return (
        <View>
            <Text style={styles.headingText}>Elevated Card</Text>
            <ScrollView horizontal={true} style={styles.Container}>
                <View style={[styles.card, styles.CardEleveted]}>
                    <View style={styles.textdir}>
                        <Text style={styles.textsize}>ADD</Text>
                    </View>
                </View>
                <View style={[styles.card, styles.CardEleveted]}>
                    <View style={styles.textdir}>
                        <Text style={styles.textsize}>UPDATE</Text>
                    </View>
                </View>
                <View style={[styles.card, styles.CardEleveted]}>
                    <View style={styles.textdir}>
                        <Text style={styles.textsize}>DELETE</Text>
                    </View>
                </View>
                <View style={[styles.card, styles.CardEleveted]}>
                    <View style={styles.textdir}>
                        <Text style={styles.textsize}>MOVE</Text>
                    </View>
                </View>
                <View style={[styles.card, styles.CardEleveted]}>
                    <View style={styles.textdir}>
                        <Text style={styles.textsize}>PRICE</Text>
                    </View>
                </View>
                <View style={[styles.card, styles.CardEleveted]}>
                    <View style={styles.textdir}>
                        <Text style={styles.textsize}>FILES</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color: "#f1f1f1",
    },
    Container: {
        flex: 1,
        flexDirection: 'row'
    },
    card: {
        width: 100,
        height: 100,
        margin: 8,
        borderRadius: 5,
    },
    textdir: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textsize: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    CardEleveted: {
        backgroundColor: '#CAD5E2',
        elevation: 4,
        shadowOffset: {
            width: 10,
            height: 20,
        },
        shadowColor: '#EF5354',
        shadowOpacity: 0.5,
        shadowRadius: 5,
    }
})