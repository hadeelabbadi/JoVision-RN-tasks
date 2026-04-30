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

  // 🔍 Search
  const filtered = users.filter(u =>
    (u.name || '').toLowerCase().includes(query.toLowerCase())
  );

  // ➕ Add
  const addUser = () => {
    if (newName.trim() === '') return;

    const newUser = {
      id: Date.now().toString(),
      name: newName,
    };

    setUsers([...users, newUser]);
    setNewName('');
  };

  // ❌ Delete
  const deleteUser = (id) => {
    const newList = users.filter(user => user.id !== id);
    setUsers(newList);
  };

  return (
    <View style={styles.container}>
      {/* 🔍 Search */}
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={query}
        onChangeText={setQuery}
      />

      {/* ➕ Add */}
      <TextInput
        style={styles.input}
        placeholder="Add new user"
        value={newName}
        onChangeText={setNewName}
      />

      <Button title="Add" onPress={addUser} />

      {/* 📋 List */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.empty}>No users found</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate('Screen2', { name: item.name })
              }
            >
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>

            <Button
              title="Delete"
              onPress={() => deleteUser(item.id)}
            />
          </View>
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
    marginBottom: 10,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  card: {
    backgroundColor: '#4CAF50',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
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