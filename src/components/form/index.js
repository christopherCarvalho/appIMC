import React, { useState } from "react";
import { View, TextInput, Text, Pressable } from 'react-native'
import ResultIMC from "./ResultImc";

import styles from './styles'

export default function Form() {

    const [heigth, setHeigth] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageIMC, setMessageIMC] = useState('Preencha peso e altura')
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')

    function imcCalculator() {
        return setImc((weight / (heigth * heigth)).toFixed(2))
    }

    function validationImc() {
        if (weight != null && heigth != null) {
            imcCalculator()
            setHeigth(null)
            setWeight(null)
            setMessageIMC('IMC é: ')
            setTextButton('Calcular novamente')
            return
        }
        setImc(null)
        setTextButton('Calcular')
        setMessageIMC('Preencha o peso e altura!')
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    style={styles.formInput}
                    placeholder="Ex. 1.70"
                    onChangeText={setHeigth}
                    value={heigth}
                    keyboardType="numeric"
                />

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    style={styles.formInput}
                    placeholder="Ex. 70.0"
                    onChangeText={setWeight}
                    value={weight}
                    keyboardType="numeric"
                />
                <Pressable
                    style={styles.buttonCalculator}
                    onPress={() => {
                        validationImc()

                    }}>

                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </Pressable>
            </View>
            <ResultIMC messageResultIMC={messageIMC} resultIMC={imc} />
        </View>
    )
}