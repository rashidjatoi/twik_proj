import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class FlatCards extends Component {
    render() {
        return (
            <View>
                <Text style={styles.headingText}> This is a Title </Text>
                <View style={styles.container} >
                    <View style={[styles.card, styles.cardOne]} >
                        <Text style={styles.cardText} >One</Text>
                    </View>
                    <View style={[styles.card, styles.cardTwo]} >
                        <Text style={styles.cardText} >Two</Text>
                    </View>
                    <View style={[styles.card, styles.cardThree]} >
                        <Text style={styles.cardText} >Three</Text>
                    </View>


                </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: '600'
    },

    cardText: {
        color: 'white'
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center',


    },
    card: {
        width: 100,
        height: 100,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8
    },
    cardOne: {
        backgroundColor: '#EF5354'
    },

    cardTwo: {
        backgroundColor: '#c22343'
    },
    cardThree: {
        backgroundColor: '#515163'
    }
})
