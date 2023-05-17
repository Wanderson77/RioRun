import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView
} from 'react-native'

const SignInScreen = () => {

  async function fetchAPI() {
    const greeting = 'FB Inc'
    try {

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView>
      <View>
        <Text>Sign</Text>
        <TouchableOpacity>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SignInScreen
