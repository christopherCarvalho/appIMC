import React, { useState, useEffect } from "react";
import { View, Text, Share, Pressable } from 'react-native'
import styles from './style'


export default function ResultIMc(props) {

    const [weightIMC, setWeightIMC] = useState('')
    const [textColor, setTextColor] = useState('white')

    const onShare = async () => {
        const result = await Share.share({
            message: 'Meu imc hoje é: ' + props.resultIMC,
        })
    }
    useEffect(() => {
        if (props.resultIMC !== undefined && props.resultIMC !== null) {
            imcVerification()
        } else {
            setWeightIMC('')
        }
    }, [props.resultIMC])

    const imcVerification = () => {
        if (props.resultIMC < 18.5) {
            setWeightIMC('Abaixo do peso!');
            setTextColor('red')
        } else if (props.resultIMC >= 18.5 && props.resultIMC < 25) {
            setWeightIMC('Peso normal!');
            setTextColor('green')
        } else if (props.resultIMC >= 25 && props.resultIMC < 30) {
            setWeightIMC('Sobrepeso!');
            setTextColor('orange')
        } else {
            setWeightIMC('Obesidade!');
            setTextColor('darkred')
        }
    }

    return (
        <View style={styles.resultImc}>
        <View style={styles.boxShareButton}>
          {props.resultIMC != null ? (
            <>
              <Pressable style={styles.shared} onPress={onShare}>
                <Text style={styles.sharedText}>Share</Text>
              </Pressable>
              <Text style={styles.information}>{props.messageResultIMC}</Text>
              <Text style={styles.numberImc}>{props.resultIMC}</Text>
              <Text style={[styles.imcText, { color: textColor }]}>{weightIMC}</Text>
            </>
          ) : (
            <View />
          )}
        </View>
      </View>
    )
}