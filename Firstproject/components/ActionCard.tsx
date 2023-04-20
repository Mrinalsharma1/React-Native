import React from "react";
import { View, Text, StyleSheet, Linking, Image, TouchableOpacity } from 'react-native'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.Card, styles.evevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        what's new in javascript 21 - ES12
                    </Text>
                </View>
                <Image source={
                    { uri: 'https://www.freecodecamp.org/news/content/images/size/w2000/2023/04/JavaScript-Blog-Cover.png' }
                } style={styles.cardImage} />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3} style={styles.bodyText}>
                        Here is a list of JavaScript image maniulation libraries that can help
                        you systemize and organize graphic elements of your app.n this JavaScript
                        project, we will create a photo frame, containing three images. The project
                        will use HTML, CSS, and JavaScript to create a beautiful photo
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={() => openWebsite('https://www.geeksforgeeks.org/johnson-trotter-algorithm/')}>
                        <Text style={styles.footerLink}>Read More...</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openWebsite('https://www.geeksforgeeks.org/johnson-trotter-algorithm/')}>
                        <Text style={styles.socialLink}>Follow Me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        paddingHorizontal: 8,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#f1f1f1',

    },
    Card: {
        padding: 6,
        borderRadius: 6,
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: '#EF9A53',
    },
    evevatedCard: {
        elevation: 3,
        padding: 6,
        shadowOffset: {
            width: 1,
            height: 1,
        }
    },
    headingContainer: {
        padding: 8
    },
    headerText: {
        marginTop: 5,
        fontSize: 20,
        fontWeight: '800',
        paddingBottom: 4,
        color: '#f1f1f1',
        textAlign: 'center'
    },
    cardImage: {
        height: 240,
    },
    bodyContainer: {
        padding: 6,
        marginVertical: 8,
        marginHorizontal: 8
    },
    bodyText: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'justify',
        color: "#f1f1f1",
    },
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        margin: 5
    },
    footerLink: {
        fontSize: 18,
        backgroundColor: '#000000',
        fontWeight: 'bold',
        color: '#f1f1f1',
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderRadius: 5,
        marginVertical: 5,
    },
    socialLink: {
        fontSize: 18,
        backgroundColor: '#000000',
        color: '#f1f1f1',
        fontWeight: 'bold',
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderRadius: 5,
    },
});
