import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  ScrollView, 
  TouchableOpacity, 
  Image,
  FlatList
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import ProductCard from '../components/ProductCard';
import TipOfTheDay from '../components/TipOfTheDay';
import { StatusBar } from 'expo-status-bar';

// Sample data for recommendations
const recommendedProducts = [
  {
    id: '1',
    name: 'Eco-Friendly Water Bottle',
    brand: 'GreenLife',
    category: 'Home Goods',
    score: 4.5,
    imageUrl: 'https://api.a0.dev/assets/image?text=eco%20friendly%20reusable%20water%20bottle&aspect=1:1',
  },
  {
    id: '2',
    name: 'Recycled Paper Notebook',
    brand: 'EarthBound',
    category: 'Office Supplies',
    score: 4.2,
    imageUrl: 'https://api.a0.dev/assets/image?text=recycled%20paper%20notebook%20with%20bamboo%20cover&aspect=1:1',
  },
  {
    id: '3',
    name: 'Biodegradable Phone Case',
    brand: 'EcoTech',
    category: 'Electronics',
    score: 3.8,
    imageUrl: 'https://api.a0.dev/assets/image?text=biodegradable%20phone%20case%20with%20leaves%20pattern&aspect=1:1',
  },
  {
    id: '4',
    name: 'Solar Power Bank',
    brand: 'SunCharge',
    category: 'Electronics',
    score: 4.8,
    imageUrl: 'https://api.a0.dev/assets/image?text=solar%20powered%20portable%20charger%20with%20usb%20ports&aspect=1:1',
  },
];

export default function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appName}>EcoEvaluate</Text>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-circle-outline" size={32} color="#2E8B57" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#5F9EA0" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity>
            <Ionicons name="mic-outline" size={20} color="#5F9EA0" style={styles.searchIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="barcode-outline" size={20} color="#5F9EA0" style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Category Pills */}
        <View style={styles.categoriesContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
            <TouchableOpacity style={[styles.categoryPill, styles.categoryPillActive]}>
              <Text style={styles.categoryPillTextActive}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryPill}>
              <Text style={styles.categoryPillText}>Home Goods</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryPill}>
              <Text style={styles.categoryPillText}>Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryPill}>
              <Text style={styles.categoryPillText}>Food</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryPill}>
              <Text style={styles.categoryPillText}>Fashion</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryPill}>
              <Text style={styles.categoryPillText}>Beauty</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Recommendations Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recommended For You</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={recommendedProducts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ProductCard product={item} onPress={() => {}} />
            )}
            style={styles.recommendationsList}
          />
        </View>

        {/* Tip of the Day */}
        <TipOfTheDay />

        {/* Trending Sustainable Products */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Trending Eco Products</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={[...recommendedProducts].reverse()}
            keyExtractor={(item) => `trending-${item.id}`}
            renderItem={({ item }) => (
              <ProductCard product={item} onPress={() => {}} />
            )}
            style={styles.recommendationsList}
          />
        </View>

        {/* Challenges Section */}
        <View style={styles.challengeContainer}>
          <View style={styles.challengeCard}>
            <View style={styles.challengeContent}>
              <MaterialCommunityIcons name="leaf" size={28} color="#ffffff" style={styles.challengeIcon} />
              <View>
                <Text style={styles.challengeTitle}>Weekly Challenge</Text>
                <Text style={styles.challengeDescription}>Reduce plastic waste by using reusable containers</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Join</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Spacing for bottom tabs */}
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  appName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2E8B57',
  },
  profileButton: {
    padding: 4,
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  searchIcon: {
    marginHorizontal: 4,
  },
  searchInput: {
    flex: 1,
    height: 36,
    marginLeft: 8,
    fontSize: 16,
  },
  content: {
    flex: 1,
  },
  categoriesContainer: {
    marginVertical: 12,
  },
  categoriesScroll: {
    paddingHorizontal: 16,
  },
  categoryPill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#E8F5E9',
    marginRight: 8,
  },
  categoryPillActive: {
    backgroundColor: '#2E8B57',
  },
  categoryPillText: {
    color: '#2E8B57',
    fontWeight: '500',
  },
  categoryPillTextActive: {
    color: 'white',
    fontWeight: '500',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  seeAllText: {
    color: '#5F9EA0',
    fontWeight: '500',
  },
  recommendationsList: {
    paddingLeft: 16,
  },
  challengeContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  challengeCard: {
    backgroundColor: '#4682B4',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  challengeContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  challengeIcon: {
    marginRight: 12,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
    padding: 8,
  },
  challengeTitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 4,
  },
  challengeDescription: {
    color: 'white',
    fontSize: 14,
    opacity: 0.9,
    width: '90%',
  },
  joinButton: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  joinButtonText: {
    color: '#4682B4',
    fontWeight: '600',
  },
  bottomSpacer: {
    height: 80,
  },
});