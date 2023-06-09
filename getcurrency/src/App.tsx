import React, { useState } from "react";
import { FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import Snackbar from 'react-native-snackbar';


// constants
import { currencyByRupee } from "./constant";

//components
import CurrencyButton from "./components/CurrencyButton";

function App(): JSX.Element {

  const [inputValue, setInputValue] = useState('')
  const [resultValue, setResultValue] = useState('')
  const [targetCurrency, setTargetCurrency] = useState('')

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: "Enter a Value to Convert",
        backgroundColor: '#EA7773',
        textColor: '#000',
      })
    }
    const inputAmount = parseFloat(inputValue)
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`
      setResultValue(result)
      setTargetCurrency(targetValue.name)
    } else {
      return Snackbar.show({
        text: "Not a valid number to convert",
        backgroundColor: '#F4BE2C',
        textColor: '#000',
      })
    }
  }
  console.log("result", resultValue)
  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
              style={styles.textbox}
              maxLength={14}
              value={inputValue}
              clearButtonMode="always" //for IOS Only
              onChangeText={setInputValue}
              keyboardType='number-pad'
              placeholder="Enter Amount in Rupees 😃 "
            />
          </View>
          {resultValue && (
            <View>
              <View>
                <Text style={styles.resultTxt}>{resultValue}</Text>
              </View>
            </View>
          )}

        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={1}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <Pressable
                style={[
                  styles.button,
                  targetCurrency === item.name && styles.selected
                ]}
                onPress={() => buttonPressed(item)}
              >
                <CurrencyButton {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#FF8B13',
    fontWeight: '800',
  },
  textbox: {
    height: 40,
    width: 240,
    backgroundColor: "#434248",
    borderRadius: 4,
    paddingLeft: 15,
    fontSize: 16,
    fontWeight: '600'
  },
  rupee: {
    marginRight: 8,
    fontSize: 28,
    color: '#FF8B13',
    fontWeight: 'bold',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,
    margin: 12,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
})