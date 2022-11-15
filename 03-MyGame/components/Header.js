import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = ({title,newStyles}) => {
  return (
    <View style={styles.header}>
      <Text style={{...styles.headerTitle, ...newStyles}}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#006d77",
    height: 110,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
    width: 400,
  },
  headerTitle: {
    color: "white",
    fontSize: 40
  },
});
