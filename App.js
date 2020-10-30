import React, { useState } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './componentes/Header';
import TodoItem from './componentes/TodoItem';
import AddTodo from './componentes/AddTodo';

export default function App() {
  const [data, setData] = useState([
    { text: 'Buy Coffe', key: '1' },
    { text: 'Create an app', key: '2' },
    { text: 'Buy a plain', key: '3' },
  ]);

  const pressHandler = (key) => {
    setData((prevData) => prevData.filter((dataItem) => key !== dataItem.key));
  };

  const submitHandler = (text) => {
    const newDataItem = { text, key: Math.random().toString() };
    setData((prevData) => [newDataItem, ...prevData]);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList data={data} renderItem={({ item }) => <TodoItem item={item} pressHandler={pressHandler} />} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
