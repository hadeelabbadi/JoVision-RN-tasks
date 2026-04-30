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
  const [editingId, setEditingId] = useState(null);

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

  // ✏️ Start Edit
  const startEdit = (user) => {
    setNewName(user.name);
    setEditingId(user.id);
  };

  // 💾 Save Edit
  const saveEdit = () => {
    const updated = users.map(user =>
      user.id === editingId ? { ...user, name: newName } : user
    );

    setUsers(updated);
    setEditingId(null);
    setNewName('');
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

      {/* ➕ Add / Edit */}
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        value={newName}
        onChangeText={setNewName}
      />

      <Button
        title={editingId ? "Save" : "Add"}
        onPress={editingId ? saveEdit : addUser}
      />

      {/* 📋 List */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
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

            <View>
              <Button title="Edit" onPress={() => startEdit(item)} />
              <Button title="Delete" onPress={() => deleteUser(item.id)} />
            </View>
          </View>
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
});