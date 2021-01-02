import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.btn}>{color}</Text>
      <Button title={`Increase ${color}`} onPress={() => onIncrease()}></Button>
      <Text></Text>
      <Button title={`Decrease ${color}`} onPress={() => onDecrease()}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    // flex: 1,
    justifyContent: "center",
    textAlign: "center",
    fontSize: 24,
  },
});

export default ColorCounter;
