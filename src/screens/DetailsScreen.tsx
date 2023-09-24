import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

export default function DetailsScreen({route,navigation}: any) {
    const {theme} = route.params;
    return (
        <View style={styles.container}>
            <Text>This is the Details Page</Text>
            <Text>The props parameters are: {theme}</Text>
            <Button
                title="Go Back Home"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});