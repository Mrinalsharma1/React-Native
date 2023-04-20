import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const FancyCard = () => {
    return (
        <View>
            <Text style={styles.textHeading}>Trending Places</Text>
            <View style={[styles.cards, styles.cardElivateds]}>
                <Image
                    source={{
                        uri: 'https://wallpaperaccess.com/full/354962.jpg',
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Chenab Bridge</Text>
                    <Text style={styles.cardLabel}>Kashmir, Heaven</Text>
                    <Text style={styles.cardDesc}>A collection of the top 47 Famous Places wallpapers and
                        backgrounds available for download for free</Text>
                    <Text style={styles.cardFooter}>12 Min From Airport</Text>
                </View>
            </View>
        </View>
    )
}

export default FancyCard

const styles = StyleSheet.create({
    textHeading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 8,
        color: '#f1f1f1',
    },
    cards: {
        width: 380,
        height: 340,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
        backgroundColor: '#fff'
    },
    cardElivateds: {
        elevation: 3,
        padding: 6,
        shadowOffset: {
            width: 1,
            height: 1,
        }
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    cardBody: {
        flex: 1,
        // flexShrink: 1,
        flexGrow: 1,
        paddingHorizontal: 12,

    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 5,
    },
    cardLabel: {
        color: '#000000',
        fontSize: 18,
        marginBottom: 5,
    },
    cardDesc: {
        color: '#242B2E',
        fontSize: 14,
        marginBottom: 7,
    },
    cardFooter: {
        color: '#000000',
        fontSize: 16,
        marginBottom: 12,
        textAlign: 'right',
        fontWeight: "bold"
        // justifyContent: 'flex-end'

    },

});