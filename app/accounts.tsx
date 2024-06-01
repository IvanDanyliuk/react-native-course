import { StyleSheet, Text, View } from 'react-native';
import AccountList from '@/components/AccountsList';

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Name</Text>
        <Text>CAP</Text>
        <Text>TAP</Text>
      </View>
      <AccountList />
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
});