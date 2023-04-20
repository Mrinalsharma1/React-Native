import React from "react";
import { StyleSheet, TextInput, Text, View, ScrollView } from "react-native";
import { Image, SearchBar } from 'react-native-elements';
import { color } from "react-native-elements/dist/helpers";


export default function WhatsApp() {
    const dummyProfile = [
        {
            uid: 1,
            image: 'https://i.pinimg.com/564x/a8/2d/17/a82d17868738f73a21c85d843b6fdff1.jpg',
            name: 'Raushan Sahi',
            message: 'hey there i am using whatsApp',
            time: '04.01',
            messageno: 0,
        },
        {
            uid: 2,
            image: 'https://i.pinimg.com/550x/7d/21/58/7d2158a62278451cc65c48f49b3d15e8.jpg',
            name: 'Sam Sanju',
            message: 'Wow looking amazing ',
            time: '05.30',
            messageno: 5,
        },
        {
            uid: 3,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSIBgNtwM8M1g78KCixVfJZvi-2-gn-DxdGPWvU7ophQ&s',
            name: 'Zakir Ali',
            message: 'hope you are doing good',
            time: '12.51',
            messageno: 2,
        },
        {
            uid: 4,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhgWbv2DZveR5UfOcpQhWr6vik1AAfODxogw&usqp=CAU',
            name: 'Luna Maya',
            message: 'Nice to meet with you',
            time: '03.11',
            messageno: 12,
        },
        {
            uid: 5,
            image: 'https://i.pinimg.com/474x/ec/bf/54/ecbf5400891ad07ab64f1d936f45c0ba.jpg',
            name: 'Solani Kumari',
            message: 'Hello Dear, what you are doing ',
            time: 'sunday',
            messageno: 0,
        },
        {
            uid: 6,
            image: 'https://funkylife.in/wp-content/uploads/2023/03/whatsapp-dp-574-2-1024x1024.jpg',
            name: 'Muskan Sharma',
            message: 'Can we meet tomorrow ',
            time: '10.31',
            messageno: 2,
        },
        {
            uid: 7,
            image: 'https://i.pinimg.com/736x/1c/4f/e8/1c4fe8fde61e51a69538dfe439206a34.jpg',
            name: 'Rangit Thapa',
            message: 'hey there i am using whatsApp',
            time: '05.51',
            messageno: 4,
        }
    ]
    return (
        <View>
            <Text style={styles.heading}>WhatsApp - Chats</Text>
            <TextInput
                style={styles.SearchBar}
                placeholder="     Search Your Friends"
            // onChangeText={text => this.searchItems(text)}
            // value={this.state.value}
            />
            <View style={styles.userProfile}>
                <Text style={styles.profileHeading}>RECENTS UPDATE</Text>
                <ScrollView horizontal={true} style={styles.container}>
                    {
                        dummyProfile.map(({ uid, image }) => (
                            <View style={styles.userImage}>
                                <Image key={uid}
                                    source={{
                                        uri: image
                                    }}
                                    style={styles.recentImage}
                                />
                                <Text style={styles.profileStatus}>..</Text>
                            </View>
                        ))
                    }
                </ScrollView>
                {/* <Text style={styles.horizontalLine}>-------------------</Text> */}
                <ScrollView scrollEnabled={false} style={styles.chatContainer}>
                    {dummyProfile.map((item, uid) => (
                        <View key={uid} style={[styles.charCard, styles.elevated]}>
                            <Image source={{
                                uri: item.image
                            }}
                                style={styles.chatprofile}
                            />
                            <View style={styles.chatContainer}>
                                <Text style={styles.userName}>{item.name}</Text>
                                <Text style={styles.chatMessage}>{item.message}</Text>
                            </View>
                            <View style={styles.chatTime}>
                                <Text style={styles.messageTime}>{item.time}</Text>
                                <Text style={styles.messageno}>{item.messageno ? item.messageno : ''}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color: '#fff',
        paddingTop: 8
    },
    SearchBar: {
        height: 60,
        borderColor: '#000',
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        marginTop: 10,
        padding: 10,
        fontSize: 20,
    },
    userProfile: {
    },
    profileStatus: {
        height: 15,
        width: 15,
        borderRadius: 15 / 2,
        backgroundColor: '#4EAF2B',
        position: "absolute",
        marginTop: 60,
        marginLeft: 6,
    },
    profileHeading: {
        fontSize: 20,
        fontWeight: '800',
        paddingHorizontal: 10,
        color: '#EC7921',
        paddingTop: 10,
    },
    container: {},
    userImage: {
        paddingHorizontal: 4,
        paddingVertical: 10,
        marginLeft: 2,
        position: 'relative',
    },
    recentImage: {
        height: 70,
        width: 70,
        borderRadius: 70 / 2,
    },
    horizontalLine: {
        height: 5,
        color: '#fff',
        padding: 10
    },
    chatContainer: {
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    charCard: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        paddingVertical: 11,
        // paddingHorizontal: 11,
        // backgroundColor: '#767B74',
        // margin: 3,
        // borderRadius: 4
    },
    elevated: {},
    chatprofile: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
    },
    userName: {
        fontSize: 18,
        fontWeight: '800',
        color: '#fff',
    },
    chatMessage: {
        fontSize: 16,
        fontWeight: '400',
        color: '#fff',
    },
    chatTime: {
        flex: 1,
        alignItems: 'flex-end'
    },
    messageTime: {
        color: '#AFAC54',
        fontWeight: '600',
    },
    messageno: {
        height: 20,
        width: 20,
        borderRadius: 20 / 2,
        backgroundColor: '#0070da',
        color: '#fff',
        textAlign: 'center',
        marginTop: 5,

    },

});