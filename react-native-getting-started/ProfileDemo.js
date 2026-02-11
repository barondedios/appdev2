import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

export default function ProfileDemo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Information</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Course & Section:</Text>
        <Text style={styles.value}>BSIS - 3A</Text>

        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>Aaron Job Bacani</Text>

        <Text style={styles.label}>Age:</Text>
        <Text style={styles.value}>21</Text>

        <Text style={styles.label}>Favorite Hobby:</Text>
        <Text style={styles.value}>Drawing and Gaming</Text>

        <Text style={styles.label}>Short Bio:</Text>
        <Text style={styles.value}>
          I am an IS student who enjoys creating videos and digital art.
        </Text>

        <Text style={styles.label}>3 Pet Peeves in Class:</Text>
        <Text style={styles.value}>• Loud classmates</Text>
        <Text style={styles.value}>• Snitch</Text>
        <Text style={styles.value}>• Too many comments during discussions</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
  },
});
