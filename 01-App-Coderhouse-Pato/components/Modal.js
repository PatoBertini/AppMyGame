import React from "react";
import {
  Modal as NewModal,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";

const Modal = (props) => {
  const { isVisible, actionDeleteItem } = props;
  return (
    <NewModal animationType="fade" trasnparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={{ backgroundColor: "white" }}>
          <Text>Desea eliminar este articulo?</Text>
          <Pressable
            onPress={() => actionDeleteItem()}
            style={{ backgroundColor: "red" }}
          >
            <Text>Eliminar</Text>
          </Pressable>
        </View>
      </View>
    </NewModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
