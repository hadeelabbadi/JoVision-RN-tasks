import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Task25 = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);

  const addName = () => {
    if (name.trim() === '') return;

    setList([...list, name]);
    setName('');
  };

  const deleteItem = (indexToDelete) => {
    const newList = list.filter((_, index) => index !== indexToDelete);
    setList(newList);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        value={name}
        onChangeText={setName}
      />

      <Button title="Add" onPress={addName} />

      {list.map((item, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.text}>{item}</Text>
          <Button title="Delete" onPress={() => deleteItem(index)} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    width: 200,
    padding: 10,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    marginRight: 10,
    fontSize: 18,
  },
});

export default Task25;