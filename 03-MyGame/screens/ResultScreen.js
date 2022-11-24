import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import win from "../assets/images/win.jpg";
import lose from "../assets/images/gameOver.jpg";

const ResultScreen = ({ result, userNumber }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    handleImage();
  }, []);

  const handleImage = () => {
    if (result === "Win") {
      setImage(win);
      return;
    }
    setImage(lose);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.imageContainer} source={image} />
      <Card>
        <Text>
          {`Usted ha: ${result}, ya que el numero del oponente era el: ${userNumber}`}
        </Text>
      </Card>
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    height: 220,
    width: 220,
    marginBottom: 50,
  },
});
