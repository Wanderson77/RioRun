import { useState, useEffect } from 'react'
import { SafeAreaView, View, Text } from 'react-native'

export default function index() {
  const [error, setError] = useState();

  useEffect(() => {}, []);

  return (
    <SafeAreaView>
      <View>
        <Text>index</Text>
      </View>
    </SafeAreaView>
  )
}
