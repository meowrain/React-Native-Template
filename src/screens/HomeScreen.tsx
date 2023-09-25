import React, {useState} from 'react'
import {StyleSheet, SafeAreaView} from 'react-native'
import {NFTCard} from "@/components";
import Header from "@/components/Header";

export default function HomeScreen({navigation}: any) {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Header title={"Home"} ></Header>
        <NFTCard />
        </SafeAreaView>
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