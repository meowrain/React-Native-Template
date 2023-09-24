import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

export default function HomeScreen({navigation}: any) {
    return (
        <View style={styles.container}>
            <Text>This is the Home Page</Text>
            <Button
                title="Go to Details"
                onPress={() => {
                    navigation.navigate('DetailsScreen',{
                        theme: 'dark'
                    })
                }}
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