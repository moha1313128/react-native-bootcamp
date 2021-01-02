import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <Text style={styles.title}>Text Screen</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Enter name"
        value={name}
        onChangeText={(newVlaue) => setName(newVlaue)}
      />
      <Text style={styles.title}>My name is</Text>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 24,
    paddingTop: 20,
  },
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    height: 50,
    padding: 10,
  },
});

export default TextScreen;
