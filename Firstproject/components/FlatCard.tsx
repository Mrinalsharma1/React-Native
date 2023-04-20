import React from "react";
import { StyleSheet, Text, View } from 'react-native';

function FlatCard() {
    return (
        <View>
            <Text style={styles.headingText}>Flat Cards</Text>
            <View style={styles.Container}>
                <View style={[styles.card, styles.CardOne]}>
                    <Text style={styles.cardText}>Red</Text>
                </View>
                <View style={[styles.card, styles.CardTwo]}>
                    <Text style={styles.cardText}>Blue</Text>
                </View>
                <View style={[styles.card, styles.CardThree]}>
                    <Text style={styles.cardText}>Green</Text>
                </View>
                <View style={[styles.card, styles.CardThree]}>
                    <Text style={styles.cardText}>Green</Text>
                </View>
            </View>
        </View>
    )
}
export default FlatCard;

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 4,
        color: '#f1f1f1',
    },
    Container: {
        flex: 1,
        flexDirection: 'row'
    },
    card: {
        flex: 1,
        width: 110,
        height: 100,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8
    },
    cardText: {
        fontSize: 18,
        color: '#f1f1f1'
    },
    CardOne: {
        backgroundColor: '#EF5354',
    },
    CardTwo: {
        backgroundColor: '#50DBB4',
    },
    CardThree: {
        backgroundColor: '#5DA3FA',
    }

});