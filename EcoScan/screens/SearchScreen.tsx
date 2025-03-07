import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  ScrollView, 
  TouchableOpacity,
  FlatList
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import ProductCard from '../components/ProductCard';
import { StatusBar } from 'expo-status-bar';

// Sample search results data
const searchResultsData = [
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
  {
    id: '5',
    name: 'Bamboo Toothbrush',
    brand: 'EcoSmile',
    category: 'Personal Care',
    score: 4.6,
    imageUrl: 'https://api.a0.dev/assets/image?text=bamboo%20toothbrush%20sustainable%20biodegradable&aspect=1:1',
  },
  {
    id: '6',
    name: 'Organic Cotton T-shirt',
    brand: 'NatureWear',
    category: 'Fashion',
    score: 4.3,
    imageUrl: 'https://api.a0.dev/assets/image?text=organic%20cotton%20tshirt%20sustainable%20fashion&aspect=1:1',
  },
];

export default function SearchScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Home Goods', 'Electronics', 'Fashion', 'Food', 'Beauty', 'Personal Care'];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.screenTitle}>Search Products</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#5F9EA0" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search sustainable products..."
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

      {/* Filters */}
      <View style={styles.filtersContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {filters.map((filter) => (
            <TouchableOpacity 
              key={filter} 
              style={[
                styles.filterPill, 
                activeFilter === filter && styles.activeFilterPill
              ]}
              onPress={() => setActiveFilter(filter)}
            >
              <Text 
                style={[
                  styles.filterText, 
                  activeFilter === filter && styles.activeFilterText
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Search Sort & Options */}
      <View style={styles.searchOptionsContainer}>
        <Text style={styles.resultsText}>
          {searchResultsData.length} results
        </Text>
        <View style={styles.sortContainer}>
          <Text style={styles.sortByText}>Sort by: </Text>
          <TouchableOpacity style={styles.sortButton}>
            <Text style={styles.sortButtonText}>Eco Score</Text>
            <Ionicons name="chevron-down" size={16} color="#2E8B57" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Results Grid */}
      <FlatList
        data={searchResultsData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.resultsContainer}
        renderItem={({ item }) => (
          <View style={styles.productCardContainer}>
            <ProductCard product={item} onPress={() => {}} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2E8B57',
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
  filtersContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  filterPill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#E8F5E9',
    marginRight: 8,
  },
  activeFilterPill: {
    backgroundColor: '#2E8B57',
  },
  filterText: {
    color: '#2E8B57',
    fontWeight: '500',
  },
  activeFilterText: {
    color: 'white',
  },
  searchOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  resultsText: {
    color: '#666',
    fontSize: 14,
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortByText: {
    color: '#666',
    fontSize: 14,
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 4,
  },
  sortButtonText: {
    color: '#2E8B57',
    fontWeight: '500',
    marginRight: 4,
  },
  resultsContainer: {
    padding: 16,
  },
  productCardContainer: {
    width: '50%',
    paddingHorizontal: 4,
    marginBottom: 16,
  },
});