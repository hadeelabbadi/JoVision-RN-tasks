import { View, Text } from 'react-native';

export default function Screen2({ route }) {
  const name = route.params?.name || 'Guest';

  return (
    <View>
      <Text>Welcome {name} 🚀</Text>
    </View>
  );
}