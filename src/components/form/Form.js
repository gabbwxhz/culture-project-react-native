import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

import ResultIMC from './result-imc/ResultIMC'

export default function Form() {
  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput placeholder="Ex. 1.75" keyboardType="numeric" />

        <Text>Peso</Text>
        <TextInput placeholder="Ex. 60.85" keyboardType="numeric" />

        <Button title="Calcular IMC" />
      </View>
      <ResultIMC messageResultIMC={messageResultIMC} resultIMC={resultIMC} />
    </View>
  )
}
