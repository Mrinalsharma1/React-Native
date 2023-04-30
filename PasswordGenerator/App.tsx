import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';

//Form validation 
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Shoude be min of 4 Character')
    .max(16, 'Shoude be max of 16 Character')
    .required('Length of Required')
})
export default function App() {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '1234567890';
    const specialChars = '!@#$%^&*()_+?/';

    if (upperCase) {
      characterList += upperCaseChars;
    }
    if (lowerCase) {
      characterList += lowerCaseChars;
    }
    if (numbers) {
      characterList += digitChars;
    }
    if (symbols) {
      characterList += specialChars;
    }

    const passwordResult = createPassword(characterList, passwordLength);
    setPassword(passwordResult);
    setIsPassGenerated(true);

  }

  const createPassword = (character: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.floor(Math.random() * character.length);
      result += character.charAt(characterIndex);
    }
    return result;
  }

  const resetPassword = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowerCase(false);
    setUpperCase(false);
    setNumbers(false);
    setNumbers(false);
    setSymbols(false);
  }

  return (
    <View>
      <Text>hello</Text>
    </View>
  )
}

const style = StyleSheet.create({})