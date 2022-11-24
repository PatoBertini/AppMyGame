import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Card = ({ children, newStyles }) => {
  return (
    <View style={{ ...styles.inputContainer, ...newStyles }}>{children}</View>
  );
};

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    width: '80%',
    minWidth: 300,
    alignItems: "center",
    padding: 20,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
});
