import { View, Text, TouchableOpacity } from 'react-native';

export default function Screen1({ navigation }) {
  const users = ['Hadeel', 'Ali', 'Sara', 'Omar'];

  return (
    <View>
      {users.map((user, index) => (
        <TouchableOpacity
          key={index}
          onPress={() =>
            navigation.navigate('Screen2', { name: user })
          }
        >
          <Text style={{ fontSize: 20, margin: 10 }}>
            {user}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}