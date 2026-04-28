import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from 'react-native';

const Task26 = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);

  const addName = () => {
    if (name.trim() === '') return;

    setList([...list, { id: Date.now().toString(), value: name }]);
    setName('');
  };

  const deleteItem = (id) => {
    const newList = list.filter(item => item.id !== id);
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

      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.text}>{item.value}</Text>
            <Button
              title="Delete"
              onPress={() => deleteItem(item.id)}
            />
          </View>
        )}
      />
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

export default Task26;