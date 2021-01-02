import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const PasswordScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text style={(styles.title, { fontSize: 24 })}>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry
        autoCorrect={false}
        placeholder="Enter password"
        value={password}
        onChangeText={(newVlaue) => setPassword(newVlaue)}
      />
      <Text>
        {password.length < 5 ? (
          <Text>Password must be 5 characters</Text>
        ) : null}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    height: 50,
    padding: 10,
  },
});

export default PasswordScreen;
