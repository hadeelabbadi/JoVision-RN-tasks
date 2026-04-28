import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Task22 = () => {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.text}>{name}</Text>
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
    fontSize: 20,
  },
});

export default Task22; 