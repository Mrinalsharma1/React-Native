import react from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput
} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello world !</Text>
        <Text>Hello world !</Text>
        <Text>Hello world !</Text>
        <Text>Hello world !</Text>
        <View>
          <TextInput style={{ height: 30, borderWidth: 1 }} aria-label='input' aria-labelledby='formLabel' />
        </View>
      </View>
    </SafeAreaView>
  )

}
export default App;