/** Simple comp */
import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { styles } from './style'

const Index = () => {
  const [password, setPassword] = useState ("");
  const [user, setUser] = useState ("");

  useEffect(() => {},[]);

  return (
    <View style={styles.container}>
      <Text>Mobile Marketing</Text>
    </View>
  )
}

export default Index
