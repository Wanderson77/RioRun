/** Simple comp */
import { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style'

const Index = () => {
  const [password, setPassword] = useState ("");
  const [user, setUser] = useState ("");
  const [error, setError] = useState (false);

  function handleActionUser() {
    console.log("Native");
  }

  useEffect(() => {
    console.log("RN");
    if (airbnb) {

    } else if {
      console.log(data);
    }
  },[]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mobile Marketing</Text>
      <TouchableOpacity
        style={styles.likeButton}
        onPress={() => {handleActionUser}}
      >

      </TouchableOpacity>
    </View>
  )
}

export default Index
