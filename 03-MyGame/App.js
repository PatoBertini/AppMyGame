import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { useFonts } from "expo-font";
import ResultScreen from "./screens/ResultScreen";

export default function App() {
  const [loaded] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
  });

  const [userNumber, setUserNumber] = useState();
  const [winOrLose, setWinOrLose] = useState(false);
  const [result, setResult] = useState("");

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const handleFinishGame = (selection, number) => {
    if (
      (selection === "lower" && userNumber < number) ||
      (selection === "greater" && userNumber > number)
    ) {
      setResult("Win");
    } else {
      setResult("Lose");
    }
    setWinOrLose(true);
  };

  let content = <StartGameScreen onStartGame={handleStartGame} />;

  if (userNumber && winOrLose === true) {
    content = <ResultScreen result={result} userNumber={userNumber} />;
  } else if (userNumber) {
    content = <GameScreen handleResult={handleFinishGame} />;
  }

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header
        title={"Adivina el numero"}
        newStyles={{ fontFamily: "Montserrat" }}
      />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
