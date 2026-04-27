import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Task16 = () => {
  const [showName, setShowName] = useState(false);

  function toggleName() {
    setShowName(!showName);
  }

  return (
    <View style={styles.container}>
      <Button title="Show" onPress={toggleName} />

      {showName && (
        <Text style={styles.text}>Hadeel</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 20,
    fontSize: 20,
  },
});

export default Task16;