import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const list = [
    { id: "1", name: "John", age: "33" },
    { id: "2", name: "Hillary", age: "27" },
    { id: "3", name: "Doe", age: "40" },
    { id: "4", name: "Moha", age: "32" },
    { id: "5", name: "John", age: "33" },
    { id: "6", name: "Hillary", age: "27" },
    { id: "7", name: "Doe", age: "40" },
    { id: "8", name: "Moha", age: "32" },
    { id: "9", name: "John", age: "33" },
    { id: "10", name: "Hillary", age: "27" },
    { id: "11", name: "Doe", age: "40" },
    { id: "12", name: "Moha", age: "32" },
    { id: "13", name: "John", age: "33" },
    { id: "14", name: "Hillary", age: "27" },
    { id: "15", name: "Doe", age: "40" },
    { id: "16", name: "Moha", age: "32" },
    { id: "17", name: "John", age: "33" },
    { id: "18", name: "Hillary", age: "27" },
    { id: "19", name: "Doe", age: "40" },
    { id: "20", name: "Doe", age: "40" },
  ];

  return (
    <FlatList
      //   horizontal
      //   showsHorizontalScrollIndicator={false}
      keyExtractor={(list) => list.id}
      data={list}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            Name: {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10,
  },
});

export default ListScreen;
