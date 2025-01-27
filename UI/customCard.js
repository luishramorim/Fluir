import React from 'react';
import { View } from 'react-native';
import { Card, Chip, Text } from 'react-native-paper';
import styles from './styles';

const CustomCard = ({ title, description, hour }) => {
  return (
    <Card mode="elevated" style={styles.card}>
      <Card.Content>
        <View style={styles.cardContent}>
          <View>
            <Text variant="headlineSmall">{title}</Text>
            <Text>{description}</Text>
          </View>
        </View>
        <View style={styles.chipContainer}>
          <Chip mode="outlined" style={styles.chip} icon="clock">{hour}</Chip>
        </View>
      </Card.Content>
    </Card>
  );
};

export default CustomCard;