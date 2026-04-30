import { View, Button, TextInput, Text } from 'react-native';
import { useState } from 'react';

export default function Screen1({ navigation, route }) {
  const [name, setName] = useState('');

  const returnedName = route.params?.name;

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

      {returnedName && <Text>Returned: {returnedName}</Text>}
    </View>
  );
}