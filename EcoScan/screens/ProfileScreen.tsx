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

// Sample user data
const userData = {
  name: 'Sarah Johnson',
  username: '@sarahj_eco',
  bio: 'Passionate about sustainable living and reducing environmental impact through conscious consumer choices.',
  avatar: 'https://api.a0.dev/assets/image?text=woman%20with%20curly%20hair%20smiling%20profile%20picture&aspect=1:1',
  level: 'Sustainability Champion',
  points: 1250,
  nextLevel: 1500,
  achievements: [
    {
      id: '1',
      name: 'Eco Explorer',
      icon: 'trophy',
      color: '#FFD700',
    },
    {
      id: '2',
      name: 'Waste Reducer',
      icon: 'trash-bin',
      color: '#4682B4',
    },
    {
      id: '3',
      name: 'Carbon Cutter',
      icon: 'leaf',
      color: '#2E8B57',
    },
  ],
  favoriteProducts: [
    {
      id: '1',
      name: 'Bamboo Toothbrush',
      brand: 'EcoSmile',
      score: 4.6,
      imageUrl: 'https://api.a0.dev/assets/image?text=bamboo%20toothbrush%20sustainable%20biodegradable&aspect=1:1',
    },
    {
      id: '2',
      name: 'Reusable Coffee Cup',
      brand: 'GreenSip',
      score: 4.8,
      imageUrl: 'https://api.a0.dev/assets/image?text=reusable%20coffee%20cup%20sustainable%20bamboo&aspect=1:1',
    },
    {
      id: '3',
      name: 'Organic Cotton Tote',
      brand: 'EcoBag',
      score: 4.7,
      imageUrl: 'https://api.a0.dev/assets/image?text=organic%20cotton%20tote%20bag%20reusable&aspect=1:1',
    },
  ],
};

// Profile sections data
const profileSections = [
  {
    id: '1',
    title: 'Settings',
    icon: 'settings-outline',
  },
  {
    id: '2',
    title: 'Saved Products',
    icon: 'bookmark-outline',
  },
  {
    id: '3',
    title: 'Eco Impact Report',
    icon: 'analytics-outline',
  },
  {
    id: '4',
    title: 'Help & Support',
    icon: 'help-circle-outline',
  },
  {
    id: '5',
    title: 'About',
    icon: 'information-circle-outline',
  },
];

export default function ProfileScreen() {
  const renderAchievement = ({ item }) => (
    <View style={styles.achievementItem}>
      <View style={[styles.achievementIcon, { backgroundColor: item.color }]}>
        <Ionicons name={item.icon} size={18} color="white" />
      </View>
      <Text style={styles.achievementName}>{item.name}</Text>
    </View>
  );

  const renderFavoriteProduct = ({ item }) => (
    <TouchableOpacity style={styles.favoriteItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.favoriteImage} />
      <View style={styles.favoriteInfo}>
        <Text style={styles.favoriteText}>{item.name}</Text>
        <Text style={styles.favoriteBrand}>{item.brand}</Text>
        <View style={styles.favoriteScore}>
          <Ionicons name="leaf" size={14} color="#2E8B57" />
          <Text style={styles.favoriteScoreText}>{item.score.toFixed(1)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.screenTitle}>Profile</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="create-outline" size={24} color="#2E8B57" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* User Profile Card */}
        <View style={styles.profileCard}>
          <Image source={{ uri: userData.avatar }} style={styles.avatar} />
          <Text style={styles.name}>{userData.name}</Text>
          <Text style={styles.username}>{userData.username}</Text>
          <Text style={styles.bio}>{userData.bio}</Text>
          
          {/* User Level */}
          <View style={styles.levelContainer}>
            <Text style={styles.levelText}>{userData.level}</Text>
            <View style={styles.progressContainer}>
              <View 
                style={[
                  styles.progressBar, 
                  { width: `${(userData.points / userData.nextLevel) * 100}%` }
                ]} 
              />
            </View>
            <Text style={styles.pointsText}>
              {userData.points} / {userData.nextLevel} points
            </Text>
          </View>
        </View>

        {/* Achievements Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Achievements</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={userData.achievements}
            renderItem={renderAchievement}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.achievementsContainer}
          />
        </View>

        {/* Favorite Products */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Favorite Products</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <FlatList
            data={userData.favoriteProducts}
            renderItem={renderFavoriteProduct}
            keyExtractor={item => item.id}
            scrollEnabled={false}
            contentContainerStyle={styles.favoritesContainer}
          />
        </View>

        {/* Profile Menu Options */}
        <View style={styles.menuContainer}>
          {profileSections.map((section) => (
            <TouchableOpacity key={section.id} style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <Ionicons name={section.icon} size={22} color="#2E8B57" style={styles.menuIcon} />
                <Text style={styles.menuText}>{section.title}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#888" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={20} color="#FF6B6B" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        {/* Bottom spacing for tab bar */}
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
    paddingBottom: 16,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2E8B57',
  },
  headerButton: {
    padding: 4,
  },
  profileCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 16,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
  },
  username: {
    fontSize: 14,
    color: '#5F9EA0',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 16,
  },
  levelContainer: {
    width: '100%',
    alignItems: 'center',
  },
  levelText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2E8B57',
    marginBottom: 8,
  },
  progressContainer: {
    width: '100%',
    height: 8,
    backgroundColor: '#E8F5E9',
    borderRadius: 4,
    marginBottom: 8,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#2E8B57',
    borderRadius: 4,
  },
  pointsText: {
    fontSize: 12,
    color: '#666',
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
  achievementsContainer: {
    paddingHorizontal: 16,
  },
  achievementItem: {
    alignItems: 'center',
    marginRight: 24,
    width: 80,
  },
  achievementIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  achievementName: {
    fontSize: 12,
    textAlign: 'center',
    color: '#333',
  },
  favoritesContainer: {
    paddingHorizontal: 16,
  },
  favoriteItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    overflow: 'hidden',
  },
  favoriteImage: {
    width: 70,
    height: 70,
  },
  favoriteInfo: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  favoriteText: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  favoriteBrand: {
    fontSize: 12,
    color: '#5F9EA0',
    marginBottom: 4,
  },
  favoriteScore: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  favoriteScoreText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2E8B57',
    marginLeft: 4,
  },
  menuContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: 12,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logoutText: {
    marginLeft: 8,
    color: '#FF6B6B',
    fontWeight: '600',
    fontSize: 16,
  },
  bottomSpacer: {
    height: 80,
  },
});