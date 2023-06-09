import React from 'react'
import type { PropsWithChildren } from 'react'
import { StyleSheet, Text, View } from 'react-native';

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
    value: number;
}>


const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
    return (
        <View style={styles.buttonContainer}>
            <View style={styles.flagbox}>
                <Text style={styles.flag}>{props.flag}</Text>
            </View>
            <View style={styles.countrybox}>
                <Text style={styles.country}>{props.name.toLocaleUpperCase()}</Text>
            </View>
            <View style={styles.valuebox}>
                <Text style={styles.value}>{props.value.toFixed(3)}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        // alignItems: 'center',
    },
    flag: {
        fontSize: 28,
        color: '#000',
        marginBottom: 1,
    },
    flagbox: {
        width: 100,
        paddingHorizontal: 15,
        paddingVertical: 9,
        alignItems: 'center',
        // backgroundColor: '#fff'
    },
    country: {
        fontSize: 16,
        color: '#000',
        fontWeight: '800',

    },
    countrybox: {
        paddingHorizontal: 10,
        width: 170,
        paddingVertical: 18,
        // backgroundColor: '#65d567',
        alignItems: 'center'
    },
    valuebox: {
        paddingHorizontal: 10,
        width: 100,
        paddingVertical: 18,
        // backgroundColor: '#6576f6',
        alignItems: 'center'
    },
    value: {
        fontSize: 16,
        color: '#B31312',
        fontWeight: '700',
    }
})

export default CurrencyButton