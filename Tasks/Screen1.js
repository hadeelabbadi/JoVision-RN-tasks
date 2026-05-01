import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Screen1({ navigation }) {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('');
  const [newName, setNewName] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const data = await AsyncStorage.getItem('users');
    if (data) setUsers(JSON.parse(data));
  };

  const saveUsers = async (data) => {
    await AsyncStorage.setItem('users', JSON.stringify(data));
  };

  const filtered = users.filter((u) =>
    (u.name || '').toLowerCase().includes(query.toLowerCase())
  );

  const addUser = () => {
    if (!newName.trim()) return;

    const updated = [...users, { id: Date.now().toString(), name: newName }];
    setUsers(updated);
    saveUsers(updated);
    setNewName('');
  };

  const deleteUser = (id) => {
    Alert.alert("Delete", "Are you sure?", [
      { text: "Cancel" },
      {
        text: "Delete",
        onPress: () => {
          const updated = users.filter(u => u.id !== id);
          setUsers(updated);
          saveUsers(updated);
        },
      },
    ]);
  };

  const startEdit = (user) => {
    setNewName(user.name);
    setEditingId(user.id);
  };

  const saveEdit = () => {
    if (!editingId) return;

    const updated = users.map((u) =>
      u.id === editingId ? { ...u, name: newName } : u
    );

    setUsers(updated);
    saveUsers(updated);
    setEditingId(null);
    setNewName('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users List</Text>

      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={query}
        onChangeText={setQuery}
      />

      <View style={styles.addRow}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Enter name"
          value={newName}
          onChangeText={setNewName}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={editingId ? saveEdit : addUser}
        >
          <Text style={styles.addText}>
            {editingId ? "Save" : "Add"}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Screen2', { name: item.name })
              }
            >
              <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>

            <View style={styles.actions}>
              <TouchableOpacity
                style={styles.editBtn}
                onPress={() => startEdit(item)}
              >
                <Text style={styles.btnText}>Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteBtn}
                onPress={() => deleteUser(item.id)}
              >
                <Text style={styles.btnText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },

  addRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  addButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 10,
    marginLeft: 10,
  },

  addText: {
    color: 'white',
    fontWeight: 'bold',
  },

  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 3,
  },

  name: {
    fontSize: 18,
    marginBottom: 10,
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  editBtn: {
    backgroundColor: '#2196F3',
    padding: 8,
    borderRadius: 8,
  },

  deleteBtn: {
    backgroundColor: '#f44336',
    padding: 8,
    borderRadius: 8,
  },

  btnText: {
    color: 'white',
  },
});