import { StyleSheet, View } from 'react-native'

import Title from './src/components/title/Title'
import Main from './src/components/main/Main'

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Main />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
