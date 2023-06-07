import React, { useState } from "react";
import { Image, ImageSourcePropType, Pressable, StyleSheet, TouchableWithoutFeedback, Text, View } from "react-native";
import type { PropsWithChildren } from "react";
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import { Vibration } from 'react-native';


import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}

function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
      default:
        setDiceImage(DiceOne)
        break;
    }
    ReactNativeHapticFeedback.trigger("impactMedium", options);
  }
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable onPressIn={() => Vibration.vibrate()}>
        <Text style={styles.rollDiceBtnText}>
          Roll The Dice
        </Text>
      </Pressable>
      {/* <TouchableWithoutFeedback
        onPressIn={() => Vibration.vibrate()}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'red',
    backgroundColor: 'green',
    fontSize: 16,
    color: '#fff',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
})
export default App