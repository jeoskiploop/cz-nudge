import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { CzView } from 'cz-view'

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 70,
    paddingBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
  },
  subtitle: {
    fontSize: 15,
  },
})

export default function App() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>CzView</Text>
      <CzView />
      <Text style={styles.subtitle}>create-react-native-plugin</Text>
    </View>
  )
}
