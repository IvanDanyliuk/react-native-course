import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

export default function AllocationsScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Allocations' }} />
      <Link href='/allocations/new'>New allocation</Link>
      <Text>Allocations</Text>
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