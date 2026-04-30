import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput,
} from 'react-native';
import { useState } from 'react';

export default function Screen1({ navigation }) {
  const users = [
    { id: '1', name: 'Hadeel' },
    { id: '2', name: 'Ali' },
    { id: '3', name: 'Sara' },
    { id: '4', name: 'Omar' },
  ];

  const [query, setQuery] = useState('');

  // فلترة حسب البحث (case-insensitive)
  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={query}
        onChangeText={setQuery}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.empty}>No results</Text>
        }
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
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
  empty: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
  },
});