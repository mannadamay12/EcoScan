import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TipOfTheDay = () => {
  // In a real app, this would be fetched from a backend or rotated through a list
  const tip = {
    title: "Tip of the Day",
    content: "Bring your own reusable bags when shopping to reduce plastic waste. Even small changes can have a big impact!",
    icon: "bulb-outline"
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name={tip.icon} size={26} color="#fff" />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{tip.title}</Text>
        <Text style={styles.content}>{tip.content}</Text>
      </View>
      <TouchableOpacity style={styles.moreButton}>
        <Ionicons name="chevron-forward" size={20} color="#3CB371" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8F5E9',
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#3CB371',
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2E8B57',
    marginBottom: 4,
  },
  content: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  moreButton: {
    padding: 4,
  },
});

export default TipOfTheDay;