import React from 'react'
import { Redirect } from 'expo-router';

const HomeScreen = () => {
  return <Redirect href='/allocations' />;
};

export default HomeScreen;