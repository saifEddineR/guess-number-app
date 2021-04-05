import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
const GameOver = ({ roundsNumber, userNumber, restart }) => {
  return (
    <View style={styles.gameOver}>
      <Text style={{ color: 'white' }}> Game Over ! </Text>
      <Text style={{ color: 'white' }}> Number of rounds : {roundsNumber} </Text>
      <Text style={{ color: 'white' }}> the user Number : {userNumber} </Text>
      <Text style={{ color: 'white' }}> Thank you for playing !</Text>
      <Button title='NEW GAME' onPress={restart} />
    </View>
  );
};
const styles = StyleSheet.create({
  gameOver: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GameOver;
