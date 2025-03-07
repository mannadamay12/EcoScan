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

// Sample community posts
const communityPosts = [
  {
    id: '1',
    user: {
      name: 'Emily Green',
      avatar: 'https://api.a0.dev/assets/image?text=smiling%20female%20avatar%20with%20short%20hair&aspect=1:1',
      level: 'Eco Enthusiast',
    },
    content: 'Just switched to these bamboo utensils for my daily lunch! No more plastic waste. #SustainableLiving',
    image: 'https://api.a0.dev/assets/image?text=bamboo%20utensils%20set%20with%20carrying%20case&aspect=4:3',
    likes: 42,
    comments: 8,
    timeAgo: '2h ago',
  },
  {
    id: '2',
    user: {
      name: 'Alex Rivers',
      avatar: 'https://api.a0.dev/assets/image?text=young%20man%20avatar%20with%20glasses&aspect=1:1',
      level: 'Sustainability Advocate',
    },
    content: 'Found this amazing zero waste store in my neighborhood. They have everything from personal care to household items!',
    image: 'https://api.a0.dev/assets/image?text=zero%20waste%20store%20interior%20with%20bulk%20containers&aspect=4:3',
    likes: 76,
    comments: 15,
    timeAgo: '5h ago',
  },
];

// Active challenges data
const activeChallenges = [
  {
    id: '1',
    title: 'Plastic-Free Week',
    participants: 589,
    daysLeft: 3,
    image: 'https://api.a0.dev/assets/image?text=plastic%20free%20items%20reusable%20bags%20bottles&aspect=16:9',
  },
  {
    id: '2',
    title: 'Local Shopping Challenge',
    participants: 347,
    daysLeft: 5,
    image: 'https://api.a0.dev/assets/image?text=farmers%20market%20local%20produce%20shopping&aspect=16:9',
  },
];

export default function CommunityScreen() {
  const renderCommunityPost = ({ item }) => (
    <View style={styles.postCard}>
      <View style={styles.postHeader}>
        <Image source={{ uri: item.user.avatar }} style={styles.userAvatar} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{item.user.name}</Text>
          <Text style={styles.userLevel}>{item.user.level}</Text>
        </View>
        <Text style={styles.timeAgo}>{item.timeAgo}</Text>
      </View>
      
      <Text style={styles.postContent}>{item.content}</Text>
      
      {item.image && (
        <Image source={{ uri: item.image }} style={styles.postImage} />
      )}
      
      <View style={styles.postActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="heart-outline" size={20} color="#5F9EA0" />
          <Text style={styles.actionText}>{item.likes}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubble-outline" size={20} color="#5F9EA0" />
          <Text style={styles.actionText}>{item.comments}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="share-outline" size={20} color="#5F9EA0" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderChallenge = ({ item }) => (
    <TouchableOpacity style={styles.challengeCard}>
      <Image source={{ uri: item.image }} style={styles.challengeImage} />
      <View style={styles.challengeContent}>
        <Text style={styles.challengeTitle}>{item.title}</Text>
        <View style={styles.challengeStats}>
          <View style={styles.challengeStat}>
            <Ionicons name="people" size={16} color="#2E8B57" />
            <Text style={styles.challengeStatText}>{item.participants} participants</Text>
          </View>
          <View style={styles.challengeStat}>
            <Ionicons name="time-outline" size={16} color="#2E8B57" />
            <Text style={styles.challengeStatText}>{item.daysLeft} days left</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.joinChallengeButton}>
          <Text style={styles.joinChallengeText}>Join Challenge</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.screenTitle}>Community</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={24} color="#2E8B57" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="search" size={24} color="#2E8B57" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Create Post Section */}
        <View style={styles.createPostContainer}>
          <Image 
            source={{ uri: 'https://api.a0.dev/assets/image?text=default%20user%20avatar&aspect=1:1' }} 
            style={styles.userAvatar} 
          />
          <TouchableOpacity style={styles.createPostButton}>
            <Text style={styles.createPostText}>Share your sustainable journey...</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cameraButton}>
            <Ionicons name="camera-outline" size={24} color="#2E8B57" />
          </TouchableOpacity>
        </View>

        {/* Active Challenges Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Active Challenges</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={activeChallenges}
            renderItem={renderChallenge}
            keyExtractor={item => item.id}
            style={styles.horizontalList}
          />
        </View>

        {/* Latest Activity */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Community Feed</Text>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterText}>Recent</Text>
              <Ionicons name="chevron-down" size={16} color="#2E8B57" />
            </TouchableOpacity>
          </View>
          
          <FlatList
            data={communityPosts}
            renderItem={renderCommunityPost}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />
        </View>

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
  headerButtons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 16,
  },
  createPostContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  createPostButton: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    borderRadius: 20,
    padding: 12,
    marginHorizontal: 12,
  },
  createPostText: {
    color: '#888',
  },
  cameraButton: {
    padding: 4,
  },
  sectionContainer: {
    marginBottom: 16,
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
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    color: '#2E8B57',
    marginRight: 4,
  },
  horizontalList: {
    paddingLeft: 16,
  },
  challengeCard: {
    width: 280,
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
  challengeImage: {
    width: '100%',
    height: 120,
  },
  challengeContent: {
    padding: 12,
  },
  challengeTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  challengeStats: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  challengeStat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  challengeStatText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  joinChallengeButton: {
    backgroundColor: '#E8F5E9',
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: 'center',
  },
  joinChallengeText: {
    color: '#2E8B57',
    fontWeight: '600',
  },
  postCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  postHeader: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  userInfo: {
    flex: 1,
    marginLeft: 12,
  },
  userName: {
    fontWeight: '600',
    fontSize: 16,
  },
  userLevel: {
    color: '#5F9EA0',
    fontSize: 12,
  },
  timeAgo: {
    color: '#888',
    fontSize: 12,
  },
  postContent: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  postActions: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#F1F1F1',
    paddingTop: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  actionText: {
    color: '#666',
    marginLeft: 6,
  },
  bottomSpacer: {
    height: 80,
  },
});