import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

export default function Screen1({ navigation }) {
  const users = [
    { id: '1', name: 'Hadeel' },
    { id: '2', name: 'Ali' },
    { id: '3', name: 'Sara' },
    { id: '4', name: 'Omar' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('Screen2', { name: item.name })
            }
          >
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
  backgroundColor: '#4CAF50',
  padding: 20,
  marginVertical: 10,
  borderRadius: 10,
  elevation: 5,
},
  text: {
    color: 'white',
    fontSize: 18,
  },
});