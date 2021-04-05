import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGame from './screens/StartGame';
import MainGame from './screens/MainGame';
import GameOver from './screens/GameOver';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [rounds, setRounds] = useState(0);

  const newGameHandler = () => {
    setRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setRounds(0);
  };

  const gameOverHandler = (gameRounds) => {
    setRounds(gameRounds);
  };

  let content = <StartGame onStartGame={startGameHandler} />;
  if (userNumber && rounds <= 0) {
    content = <MainGame userNumber={userNumber} onGameOver={gameOverHandler} />;
  } else if (rounds > 0) {
    content = <GameOver roundsNumber={rounds} userNumber={userNumber} restart={newGameHandler} />;
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess a number' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#13192e',
  },
});
