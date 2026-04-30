import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import { useState } from 'react';

export default function Screen1({ navigation }) {
  const [users, setUsers] = useState([
    { id: '1', name: 'Hadeel' },
    { id: '2', name: 'Ali' },
  ]);

  const [query, setQuery] = useState('');
  const [newName, setNewName] = useState('');

  // فلترة
  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(query.toLowerCase())
  );

  // إضافة عنصر
  const addUser = () => {
    if (newName.trim() === '') return;

    const newUser = {
      id: Date.now().toString(),
      name: newName,
    };

    setUsers([...users, newUser]);
    setNewName('');
  };

  return (
    <View style={styles.container}>
      {/* search */}
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={query}
        onChangeText={setQuery}
      />

      {/* add user */}
      <TextInput
        style={styles.input}
        placeholder="Add new user"
        value={newName}
        onChangeText={setNewName}
      />

      <Button title="Add" onPress={addUser} />

      <FlatList
        data={filtered}
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
  container: { flex: 1, padding: 20 },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },

  card: {
    backgroundColor: '#4CAF50',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
  },

  text: {
    color: 'white',
    fontSize: 18,
  },
});