import { View, Text, Button } from 'react-native';
import { useEffect } from 'react';

export default function Screen2({ route, navigation }) {
  const name = route.params?.name || 'Guest';

  useEffect(() => {
    navigation.setOptions({
      title: `Welcome ${name}`,
    });
  }, []);

  return (
    <View>
      <Text>Welcome {name} 🚀</Text>

      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}