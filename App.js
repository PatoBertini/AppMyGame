import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <TextInput placeholder="Add Item" style={styles.inputItem} />
        <Button
          title="Agregar"
          color="black"
          onPress={() => console.log("Este boton funciona")}
        />
      </View>
      <View>
        <Text style={styles.text}>HOLA CODER!</Text>
        <Text style={styles.text}>fasfasf #2</Text>
        <Text style={styles.text}>Item #3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputItem: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 200,
  },
  text: {
    color: "red",
  },
});
