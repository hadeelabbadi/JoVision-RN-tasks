import { View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function Screen1({ navigation }) {
  const [name, setName] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Button
        title="Go"
        onPress={() =>
          navigation.navigate('Screen2', { name })
        }
      />
    </View>
  );
}