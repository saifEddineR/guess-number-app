import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Button, Alert } from 'react-native';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const MainGame = ({ userNumber, onGameOver }) => {
  const [guessRounds, setGuessRounds] = useState(0);
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userNumber)
  );
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds);
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nexGuessHander = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert('wrong information !', 'dont try to cheat me !', [
        { text: 'try again!', style: 'cancel' },
      ]);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextGuess = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextGuess);
    setGuessRounds((currentRounds) => currentRounds + 1);
  };

  return (
    <View style={styles.gameScreen}>
      <Text style={styles.gameText}>opponent guessed :</Text>
      <View>
        <Text style={styles.gameText}>{currentGuess}</Text>
      </View>
      <Card style={styles.gameButtons}>
        <Button
          title='LOWER'
          onPress={() => {
            nexGuessHander('lower');
          }}
        />
        <Button
          title='HIGHER'
          onPress={() => {
            nexGuessHander('greater');
          }}
        />
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  gameScreen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    color: 'white',
  },
  gameButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
  gameText: {
    color: 'white',
  },
});

export default MainGame;
