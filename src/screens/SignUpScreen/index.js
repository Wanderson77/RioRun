import {
  useState,
  useEffect}
from 'react'
import { SafeAreaView, View, Text } from 'react-native'

const SignUpScreen = () => {
  const [user, setUser] = useState([]);

  const greeting = 'UIKit'

  async function fetchAPI(){
    try {

    } catch (error) {
      console.log(error);
    }
  }

  if(loading){
    return <View>Loading</View>
  }

  useEffect(() => {
    
  }, [])

  return (
    <SafeAreaView>
      <View>
        <Text>community</Text>
      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen
