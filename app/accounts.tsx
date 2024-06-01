import { StyleSheet, Text, View } from "react-native";
import { Link } from 'expo-router'

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <Link href='/'>Go to Allocations</Link>
      <Text>Accounts</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});