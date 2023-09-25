import React from 'react'
import {SafeAreaView, Text, StyleSheet, Button} from 'react-native'
import Header from "@/components/Header";

export default function DetailsScreen({route,navigation}: any) {
    return (
        <SafeAreaView style={styles.container}>
            <Header title={"Details"}></Header>
            <Text>This is the Details Page</Text>
            <Button
                title="Go Back Home"
                onPress={() => navigation.goBack()}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});