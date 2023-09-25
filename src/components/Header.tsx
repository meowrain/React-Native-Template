import {Appbar} from 'react-native-paper';
import React from "react";

type prop = {
    title: string,
}
export default function Header(props:prop) {
    return (

        <Appbar.Header>
            {/*<Appbar.BackAction onPress={() => {}} />*/}
            <Appbar.Action icon="menu" onPress={()=>{}}></Appbar.Action>
            <Appbar.Content title={props.title}/>
            <Appbar.Action icon="magnify" onPress={() => {
            }}/>
        </Appbar.Header>

    )
}