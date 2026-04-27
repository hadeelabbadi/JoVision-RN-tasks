import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MyFunctionPage = () => {
  useEffect(() => {
    console.log("Loaded");

    return () => {
      console.log("Unloaded");
    };
  }, []);

  return <Text style={styles.text}>Hadeel</Text>;
};

const Task21 = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <View style={styles.container}>
      <Button title="Show" onPress={toggle} />

      {show && <MyFunctionPage />}
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
    fontSize: 20,
  },
});

export default Task21;