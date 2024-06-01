import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import AccountList from '@/components/AccountsList';
import { useState } from 'react';

export default function AccountScreen() {
  const [name, setName] = useState('');
  const [cap, setCap] = useState('');
  const [tap, setTap] = useState('');

  const createAccount = () => {
    console.warn('Create account', name)
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Name</Text>
        <Text>CAP</Text>
        <Text>TAP</Text>
      </View>

      <AccountList />

      <View style={styles.inputRow}>
        <TextInput value={name} placeholder='Name' onChangeText={setName} style={styles.input} />
        <TextInput value={cap} placeholder='CAP %' onChangeText={setCap} style={styles.input} />
        <TextInput value={tap} placeholder='TAP %' onChangeText={setTap} style={styles.input} />
      </View>

      <Button title='Add account' onPress={createAccount} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    gap: 5,
    padding: 5
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
  },
  input: {
    flex: 1
  }
});