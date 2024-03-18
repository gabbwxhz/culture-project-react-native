import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

import { useState } from 'react'

import ResultIMC from './result-imc/ResultIMC'

export default function Form() {
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageIMC, setMessageIMC] = useState('Preencha o peso e altura')
  const [resultIMC, setRestulIMC] = useState(null)
  const [textButton, setTextButton] = useState('Calcular')

  function calculateIMC() {
    return setRestulIMC((weight / (height * height)).toFixed(2))
  }

  function validationIMC() {
    if (weight !== null && height !== null) {
      calculateIMC()
      setHeight(null)
      setWeight(null)
      setMessageIMC('Seu IMC é igual a:')
      setTextButton('Calcular novamente')
      return
    } else {
      setRestulIMC(null)
      setTextButton('Calcular')
      setMessageIMC('Preencha o peso e altura')
    }
  }

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
        />

        <Text>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex. 60.85"
          keyboardType="numeric"
        />

        <Button title={textButton} onPress={() => validationIMC()} />
      </View>
      <ResultIMC messageResultIMC={messageIMC} resultIMC={resultIMC} />
    </View>
  )
}
