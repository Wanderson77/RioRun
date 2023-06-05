import {
  useEffect,
  useState
} from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import styles from './styles';
import InputCustom from '../../components/InputCustom'

const index = () => {
  const [error, setError] = useState('');

  async function fetchAPI() {
    try {

    } catch (error) {
      console.log('Failed to fetch API', error);
    }
  }

  useEffect(() => {

  }, []);

  return (
    <SafeAreaView>
      <View
        style={styles.container}
      >
        <Text>index</Text>
        <InputCustom />
        <TouchableOpacity>0.5</TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default index
