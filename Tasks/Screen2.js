import { View, Text, Button } from 'react-native';

export default function Screen2({ route, navigation }) {
  const name = route.params?.name || 'Guest';

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