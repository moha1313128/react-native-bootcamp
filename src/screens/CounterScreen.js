import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter Screen</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          //   counter++;
          setCounter(counter + 1);
        }}
      >
        <Text style={styles.btnTitle}>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          //   counter++;
          setCounter(counter - 1);
        }}
      >
        <Text style={styles.btnTitle}>Decrease</Text>
      </TouchableOpacity>
      <Text style={styles.subTitle}>Current value: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  subTitle: {
    textAlign: "center",
  },
  btn: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 8,
    textAlign: "center",
  },
  btnTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  container: {
    padding: 24,
    flex: 1,
    // justifyContent: "center",
  },
});

export default CounterScreen;
