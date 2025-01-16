import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export default class ElevatedCards extends Component {
    render() {
        return (
            <View>
                <Text style={styles.headingText}>Elevated Cards </Text>

                <ScrollView horizontal={true} style={styles.container} >
                    <View style={[styles.card, styles.cardElevated]} >
                        <Text>Tap</Text>
                    </View>
                    <View style={[styles.card, styles.cardElevated]} >
                        <Text>Tap</Text>
                    </View>
                    <View style={[styles.card, styles.cardElevated]} >
                        <Text>Tap</Text>
                    </View>
                    <View style={[styles.card, styles.cardElevated]} >
                        <Text>Tap</Text>
                    </View>
                    <View style={[styles.card, styles.cardElevated]} >
                        <Text>Tap</Text>
                    </View>

                </ScrollView>

            </View >
        )
    }
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: '600'
    },
    card: {
        width: 100,
        height: 100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
        borderRadius: 2,

    },
    cardElevated: {
        backgroundColor: '#EF5354',
        elevation: 4,

    },
    container: {
        padding: 8,
    }

})
