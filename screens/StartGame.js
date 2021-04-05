import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Alert,
} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';

const StartGame = (props) => {
  const [InputNumber, setInputNumber] = useState();
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const numberInputHandler = (value) => {
    setInputNumber(value.replace(/[^0-9]/g, ''));
  };

  const confirmInputHandler = (props) => {
    const chosenNumber = parseInt(InputNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      setConfirmed(false);
      Alert.alert('Invalid number !', 'Number should be between 1 and 99', [
        { text: 'Okay', style: 'destructive', onPress: () => setInputNumber('') },
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setInputNumber('');
  };
  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <View style={styles.startGame}>
        <Text style={{ color: 'white' }}>chosen Number: {selectedNumber}</Text>
        <View style={styles.startButton}>
          <Button title='Start Game' onPress={() => props.onStartGame(selectedNumber)} />
        </View>
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.startScreen}>
        <Text style={styles.title}>start game</Text>
        <Card style={styles.InputContainer}>
          <Input
            maxLength={2}
            blurOnSubmit
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='number-pad'
            onChangeText={numberInputHandler}
            value={InputNumber}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title='RESET' color='#ff6a19' onPress={() => setInputNumber('')} />
            </View>
            <View style={styles.button}>
              <Button title='CONFIRM' onPress={confirmInputHandler} />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  startScreen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    paddingTop: '40%',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    color: 'white',
  },
  InputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 80,
  },
  startGame: { marginTop: 10 },
  startButton: {
    width: 118,
  },
});

export default StartGame;
