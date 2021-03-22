import React from "react";
import { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  var showScreen = state.find((item) => item.id === navigation.getParam("id"));
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Text>{showScreen.id} </Text>
        <Text>{showScreen.title} </Text>
        <Text>{showScreen.content} </Text>
      </TouchableOpacity>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  // const header_title = navigation.state;
  // console.log(navigation);
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" size={32} />
      </TouchableOpacity>
    ),
    // title:
    headerStyle: {
      backgroundColor: "#f4511e",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };
};

const styles = StyleSheet.create({});

export default ShowScreen;
