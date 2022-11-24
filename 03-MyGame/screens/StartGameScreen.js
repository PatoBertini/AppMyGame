import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  Pressable,
  Button,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";

const StartGameScreen = ({ onStartGame }) => {
  const [value, setValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");

  const handleConfirmation = () => {
    const chooseNumber = parseInt(value);
    if (chooseNumber === NaN || chooseNumber <= 0 || chooseNumber > 99) return;
    setConfirmed(true);
    setSelectedNumber(chooseNumber);
    console.log(chooseNumber);
    setValue("");
  };

  const handleResetInput = () => {
    setValue("");
    setConfirmed(false);
  };
  const handleInput = (text) => {
    console.log(text);
    setValue(text.replace(/[^0-9]/g, ""));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Card>
          <Text>Elije un numero</Text>
          <Input value={value} onChangeText={handleInput} />
          <View style={styles.buttonContainer}>
            <Pressable style={styles.cleanButton} onPress={handleResetInput}>
              <Text style={{ color: "white" }}>Limpiar</Text>
            </Pressable>
            <Pressable
              style={styles.confirmButton}
              onPress={handleConfirmation}
            >
              <Text style={{ color: "white" }}>Confirmar</Text>
            </Pressable>
          </View>
        </Card>
        {confirmed && (
          <Card newStyles={{ marginTop: 50, width: 150 }}>
            <Text>Tu numero</Text>
            <Text>{selectedNumber}</Text>
            <Button
              title="Empezar juego"
              onPress={() => onStartGame(selectedNumber)}
            />
          </Card>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    marginTop: 50,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  cleanButton: {
    backgroundColor: colors.secondary,
    height: 37,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  confirmButton: {
    backgroundColor: "green",
    height: 37,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
