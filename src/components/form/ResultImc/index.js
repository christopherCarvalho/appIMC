import React from "react";
import {View, Text} from 'react-native'


export default function ResultIMc(props){
    return(
        <View>            
           <Text>{props.messageResultIMC}</Text>
           <Text>{props.resultIMC}</Text>
        </View>
    )
}