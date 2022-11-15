import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
  });

  const [userNumber, setUserNumber] = useState();

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={handleStartGame} />;

  if (userNumber) {
    content = <GameScreen />;
  }

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header title={"Adivina el numero"} newStyles={{fontFamily:'Montserrat'}}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
