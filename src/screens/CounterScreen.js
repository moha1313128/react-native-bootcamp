import React, { useReducer } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const reducer = (state, action) => {
  // state === {count: number}
  // action === {type: 'increment' || type: 'decrement', payload: 1}
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};
const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter Screen</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => dispatch({ type: "increment", payload: 1 })}
      >
        <Text style={styles.btnTitle}>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => dispatch({ type: "decrement", payload: 1 })}
      >
        <Text style={styles.btnTitle}>Decrease</Text>
      </TouchableOpacity>
      <Text style={styles.subTitle}>Current value: {state.count}</Text>
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
