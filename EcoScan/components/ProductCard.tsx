import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  score: number;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
  onPress: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
  // Function to render leaf icons based on score
  const renderLeafRating = (score: number) => {
    const leafCount = Math.floor(score);
    const hasHalfLeaf = score % 1 >= 0.5;
    const maxLeaves = 5;
    
    return (
      <View style={styles.leafContainer}>
        {[...Array(leafCount)].map((_, i) => (
          <Ionicons key={`leaf-${i}`} name="leaf" size={16} color="#2E8B57" />
        ))}
        {hasHalfLeaf && (
          <Ionicons name="leaf-outline" size={16} color="#2E8B57" />
        )}
        {[...Array(maxLeaves - leafCount - (hasHalfLeaf ? 1 : 0))].map((_, i) => (
          <Ionicons key={`leaf-empty-${i}`} name="leaf-outline" size={16} color="#2E8B57" />
        ))}
        <Text style={styles.scoreText}>{score.toFixed(1)}</Text>
      </View>
    );
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image 
        source={{ uri: product.imageUrl }} 
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text style={styles.name} numberOfLines={2}>{product.name}</Text>
        <Text style={styles.category}>{product.category}</Text>
        {renderLeafRating(product.score)}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    width: 160,
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  content: {
    padding: 12,
  },
  brand: {
    fontSize: 12,
    color: '#5F9EA0',
    fontWeight: '500',
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    marginVertical: 4,
    height: 40,
  },
  category: {
    fontSize: 12,
    color: '#666',
    marginBottom: 6,
  },
  leafContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  scoreText: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: '600',
    color: '#2E8B57',
  },
});

export default ProductCard;