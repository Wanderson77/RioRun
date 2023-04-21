/** Simple comp */
import { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { styles } from './style'

const Index = () => {
  const [password, setPassword] = useState ("");
  const [user, setUser] = useState ("");

  function handleActionUser() {
    console.log("Native");
  }

  useEffect(() => {
    console.log("RN");
  },[]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mobile Marketing</Text>
    </View>
  )
}

export default Index
