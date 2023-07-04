import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';

const App = () => {
  const [isReady, setIsReady] = useState(false)
  const init = async () => {
    await tf.ready()
    setIsReady(true)
  }
  useEffect(() => {
    init()
  }, [])
  return (
    <View>
      <Text>App - {isReady.toString()}</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
