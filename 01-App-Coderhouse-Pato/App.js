import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Modal from "./components/Modal";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [itemList, setItemList] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const onHandleChangeItem = (t) => {
    setTextItem(t);
  };
  const addItem = () => {
    setItemList((lista) => [
      ...lista,
      {
        id: Math.random().toString(),
        value: textItem,
      },
    ]);
    setTextItem("");
  };

  const deleteList = () => {
    setItemList("");
  };

  const selectedItem = (id) => {
    setItemSelected(itemList.find((item) => item.id === id));
    setModalVisible(true);
  };

  const deleteItem = () => {
    setItemList((currentState) =>
      currentState.filter((item) => item.id !== itemSelected.id)
    );
    setItemSelected({});
    setModalVisible(false);
  };


  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={()=>selectedItem(item.id)}>
      <Text style={styles.item}>{item.value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>
      <View style={styles.itemContainer}>
        <TextInput
          placeholder="Add Item"
          value={textItem}
          style={styles.inputItem}
          onChangeText={onHandleChangeItem}
        />
        <Button title="Add" color="blue" onPress={addItem} />
        <Button title="Delete" color="red" onPress={deleteList} />
      </View>
      <View>
        <FlatList
          data={itemList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Modal isVisible={modalVisible} actionDeleteItem={deleteItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
  title: {
    margin: 30,
    fontSize: 30,
    color: "green",
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
  items: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
});
