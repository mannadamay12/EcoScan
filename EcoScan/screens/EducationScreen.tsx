import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Image,
  FlatList
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const educationalContent = [
  {
    id: '1',
    title: 'Understanding Carbon Footprint',
    type: 'article',
    duration: '5 min read',
    imageUrl: 'https://api.a0.dev/assets/image?text=carbon%20footprint%20concept%20with%20globe%20and%20footprint&aspect=16:9',
  },
  {
    id: '2',
    title: 'Sustainable Materials Guide',
    type: 'video',
    duration: '8 min',
    imageUrl: 'https://api.a0.dev/assets/image?text=sustainable%20natural%20materials%20samples%20bamboo%20hemp&aspect=16:9',
  },
  {
    id: '3',
    title: 'Recycling Basics',
    type: 'interactive',
    duration: '10 min',
    imageUrl: 'https://api.a0.dev/assets/image?text=recycling%20bins%20sorting%20waste%20educational&aspect=16:9',
  },
];

const sustainabilityTerms = [
  {
    id: '1',
    term: 'Carbon Neutral',
    definition: 'A state where the net amount of carbon dioxide or other carbon compounds emitted into the atmosphere is reduced to zero.'
  },
  {
    id: '2',
    term: 'Biodegradable',
    definition: 'Capable of being decomposed by bacteria or other living organisms, reducing waste.'
  },
  {
    id: '3',
    term: 'Upcycling',
    definition: 'The process of transforming by-products, waste materials, or unwanted products into new materials or products of better quality.'
  },
];

export default function EducationScreen() {
  const renderEducationalItem = ({ item }) => (
    <TouchableOpacity style={styles.educationalCard}>
      <Image source={{ uri: item.imageUrl }} style={styles.educationalImage} />
      <View style={styles.educationalOverlay}>
        <View style={styles.educationalTypeContainer}>
          {item.type === 'video' ? (
            <Ionicons name="play-circle" size={16} color="white" />
          ) : item.type === 'interactive' ? (
            <MaterialCommunityIcons name="cursor-default-click" size={16} color="white" />
          ) : (
            <Ionicons name="document-text" size={16} color="white" />
          )}
          <Text style={styles.educationalTypeText}>{item.type}</Text>
        </View>
        <Text style={styles.educationalDuration}>{item.duration}</Text>
      </View>
      <View style={styles.educationalContent}>
        <Text style={styles.educationalTitle}>{item.title}</Text>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const renderGlossaryItem = ({ item }) => (
    <View style={styles.glossaryItem}>
      <Text style={styles.glossaryTerm}>{item.term}</Text>
      <Text style={styles.glossaryDefinition}>{item.definition}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.screenTitle}>Sustainability Learning</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Featured Content */}
        <TouchableOpacity style={styles.featuredContainer}>
          <Image 
            source={{ uri: 'https://api.a0.dev/assets/image?text=product%20lifecycle%20sustainability%20educational%20infographic&aspect=16:9' }} 
            style={styles.featuredImage} 
          />
          <View style={styles.featuredContent}>
            <View style={styles.featuredBadge}>
              <Text style={styles.featuredBadgeText}>Featured</Text>
            </View>
            <Text style={styles.featuredTitle}>Product Lifecycle: From Creation to Disposal</Text>
            <Text style={styles.featuredDescription}>
              Learn how products impact our environment throughout their lifecycle.
            </Text>
          </View>
        </TouchableOpacity>

        {/* Educational Content Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Latest Content</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={educationalContent}
            renderItem={renderEducationalItem}
            keyExtractor={item => item.id}
            style={styles.horizontalList}
          />
        </View>

        {/* Sustainability Quiz */}
        <View style={styles.quizContainer}>
          <View style={styles.quizCard}>
            <MaterialCommunityIcons name="lightbulb-on" size={32} color="#FFFFFF" style={styles.quizIcon} />
            <View style={styles.quizContent}>
              <Text style={styles.quizTitle}>Test Your Knowledge</Text>
              <Text style={styles.quizDescription}>Take our weekly sustainability quiz and earn eco-points!</Text>
            </View>
            <TouchableOpacity style={styles.quizButton}>
              <Text style={styles.quizButtonText}>Start Quiz</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Glossary Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Sustainability Glossary</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Full Glossary</Text>
            </TouchableOpacity>
          </View>
          
          <FlatList
            data={sustainabilityTerms}
            renderItem={renderGlossaryItem}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />
        </View>

        {/* Bottom Spacing */}
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
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2E8B57',
  },
  featuredContainer: {
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 24,
  },
  featuredImage: {
    width: '100%',
    height: 160,
  },
  featuredContent: {
    padding: 16,
  },
  featuredBadge: {
    backgroundColor: '#4682B4',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  featuredBadgeText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  featuredDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  sectionContainer: {
    marginBottom: 24,
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
  horizontalList: {
    paddingLeft: 16,
  },
  educationalCard: {
    width: 250,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  educationalImage: {
    width: '100%',
    height: 140,
  },
  educationalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  educationalTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(46, 139, 87, 0.8)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  educationalTypeText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
    marginLeft: 4,
  },
  educationalDuration: {
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    fontSize: 12,
    fontWeight: '500',
  },
  educationalContent: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  educationalTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    flex: 1,
    marginRight: 8,
  },
  startButton: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  startButtonText: {
    color: '#2E8B57',
    fontWeight: '600',
    fontSize: 12,
  },
  quizContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  quizCard: {
    backgroundColor: '#5F9EA0',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  quizIcon: {
    marginRight: 12,
  },
  quizContent: {
    flex: 1,
  },
  quizTitle: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 4,
  },
  quizDescription: {
    color: 'white',
    fontSize: 14,
    opacity: 0.9,
  },
  quizButton: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginLeft: 12,
  },
  quizButtonText: {
    color: '#5F9EA0',
    fontWeight: '600',
    fontSize: 14,
  },
  glossaryItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  glossaryTerm: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2E8B57',
    marginBottom: 4,
  },
  glossaryDefinition: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  bottomSpacer: {
    height: 80,
  },
});