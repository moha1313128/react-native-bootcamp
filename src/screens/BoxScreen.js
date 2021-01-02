import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScren = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Box #1</Text>
      <Text style={styles.box2}>Box #2</Text>
      <Text style={styles.box3}>Box #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    // flexDirection: "row",
    // marginHorizontal: 10,
    // alignItems: "flex-end",
    // justifyContent: "flex-start",
    borderColor: "black",
    borderWidth: 1,
    height: 200,
  },
  box1: {
    color: "red",
    flex: 4,
    alignSelf: "flex-end",
  },
  box2: {
    color: "blue",
    flex: 4,
    alignSelf: "center",
  },
  box3: {
    color: "green",
    flex: 2,
    alignSelf: "flex-start",
  },
});

export default BoxScren;
