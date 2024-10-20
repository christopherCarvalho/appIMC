import React, { useState } from "react";
import { View, TextInput, Text, Pressable, Vibration, Keyboard, Platform, FlatList, SafeAreaView } from 'react-native'
import ResultIMC from "./ResultImc";

import styles from './styles'

export default function Form() {

    const [height, setHeigth] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageIMC, setMessageIMC] = useState('Preencha peso e altura')
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')
    const [errorMessage, setErrorMessage] = useState(null)
    const [imcList, setImcList] = useState([])

    function imcCalculator() {
        let heightFormat = height.toString().replace(",", ".")
        let heightAsNumber = parseFloat(heightFormat)

        let weightFormat = weight.toString().replace(",", ".")
        let weightAsNumber = parseFloat(weightFormat)

        let totalImc = ((weightAsNumber / (heightAsNumber * heightAsNumber)).toFixed(2))
        setImcList((arr) => [...arr, { id: new Date().getTime(), imc: totalImc, height: heightFormat, weight: weightFormat }])
        setImc(totalImc)
        console.log(imcList)
    }

    function errorMessageText() {
        if (imc == null) {
            setErrorMessage('Campo Obrigatorio*')
            Vibration.vibrate();
        }
    }

    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            setMessageIMC('IMC é: ')
            setTextButton('Calcular novamente')
            setErrorMessage(null)
            setHeigth("")
            setWeight("")
        }
        else {
            setImc(null)
            setTextButton('Calcular')
            setMessageIMC('Preencha o peso e altura!')
            errorMessageText()
        }

    }

    return (
        <View style={styles.formContext}>
            <Pressable onPress={Platform.OS === 'web' ? Keyboard.isVisible() : Keyboard.dismiss} style={styles.form}>

                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.textErrorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.formInput}
                    placeholder="Ex. 1.70"
                    onChangeText={setHeigth}
                    value={height}
                    keyboardType="numeric"
                />

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.textErrorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.formInput}
                    placeholder="Ex. 72.3"
                    onChangeText={setWeight}
                    value={weight}
                    keyboardType="numeric"
                />
                <Pressable
                    style={styles.buttonCalculator}
                    onPress={() => {
                        Keyboard.dismiss(),
                            validationImc()
                    }}
                >

                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </Pressable>
                <View>
                    <ResultIMC messageResultIMC={messageIMC} resultIMC={imc} />
                </View>
            </Pressable >
            <View>
                <FlatList
                    style={styles.listImcs}
                    data={imcList.reverse()}
                    renderItem={({ item }) =>
                        <Text style={styles.textListImcs}>
                            <Text>({item.height})&#178; /</Text>
                            <Text>{item.weight} = </Text>
                            <Text>{item.imc}</Text>
                        </Text>


                    }
                    keyExtractor={item => item.id}
                />
            </View >
        </View>



    )
}