import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
  },
});

export default function HomeScreen() {
  return (
    <Layout style={styles.container}>
      <Text category="h1">Welcome to the Tavern</Text>
      <Text>The place where every adventure begins</Text>
    </Layout>
  );
}
