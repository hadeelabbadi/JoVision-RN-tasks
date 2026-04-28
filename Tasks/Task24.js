import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Task24 = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);

  const addName = () => {
    if (name.trim() === '') return;

    setList([...list, name]);
    setName('');
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
        <Text key={index} style={styles.text}>
          {item}
        </Text>
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
  text: {
    marginTop: 10,
    fontSize: 18,
  },
});

export default Task24;