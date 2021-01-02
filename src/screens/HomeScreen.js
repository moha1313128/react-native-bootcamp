import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Go to Component Screen"
        onPress={() => navigation.navigate("Components")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
  },
});

export default HomeScreen;
