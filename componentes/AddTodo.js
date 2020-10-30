import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';

const AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState('');

  const changeHandler = (value) => {
    setText(value);
  };

  const onSubmit = () => {
    if (text.length > 0) {
      submitHandler(text);
      setText('');
    } else {
      Alert.alert('OOPS!', 'Item must have value', [{ text: 'Understood', onPress: () => console.log('Closed') }]);
    }
  };

  return (
    <View>
      <TextInput style={styles.input} value={text} placeholder="Type todo item..." onChangeText={changeHandler} />
      <Button onPress={() => onSubmit()} title="Add" color="coral" />
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
