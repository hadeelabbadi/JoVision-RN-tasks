import { View, Text, TouchableOpacity, FlatList } from 'react-native';

export default function Screen1({ navigation }) {
  const users = [
    { id: '1', name: 'Hadeel' },
    { id: '2', name: 'Ali' },
    { id: '3', name: 'Sara' },
    { id: '4', name: 'Omar' },
  ];

  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Screen2', { name: item.name })
            }
          >
            <Text style={{ fontSize: 20, margin: 10 }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}