import { StyleSheet, Text, View } from 'react-native';
import { Link, Stack } from 'expo-router'

export default function NewAllocationScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'New Allocation' }} />

      <Text>New allocation</Text>
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