import React from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import { ptBR } from 'date-fns/locale';
import { format, addDays, isToday } from 'date-fns';
import CustomCard from '../UI/customCard';
import styles from '../UI/styles';
import { Appbar, FAB, Surface, Text} from 'react-native-paper';

import theme from '../components/theme';

const HomeScreen = () => {
  const getDaysWithDate = () => {
    const today = new Date();
    const days = [];

    for (let i = 0; i < 7; i++) {
      const currentDate = addDays(today, i);
      const dayOfWeek = format(currentDate, 'EE', { locale: ptBR });
      const day = format(currentDate, 'd');
      const month = format(currentDate, 'MMMM', { locale: ptBR });

      days.push({
        id: `${i}`,
        dayOfWeek: capitalize(dayOfWeek),
        day,
        month: capitalize(month),
        date: currentDate, 
      });
    }

    return days;
  };

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const days = getDaysWithDate();

  return (
    <>
        <Appbar.Header mode="small" style={styles.appbar}>
        <Appbar.Content title="Fluir" />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" />
        </Appbar.Header>

        <View style={styles.container}>
            <FlatList
              style={styles.flatListContainer}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={days}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Surface
                  style={[
                    styles.surfaceItem,
                    isToday(item.date) && { backgroundColor: theme.colors.tertiaryContainer },
                  ]}
                >
                  <Text style={styles.surfaceText} variant="titleSmall">{item.dayOfWeek}</Text>
                  <Text style={styles.surfaceText} variant="titleLarge">{item.day}</Text>
                  <Text style={styles.surfaceText} variant="labelMedium">{item.month}</Text>
                </Surface>
              )}
            />

            <ScrollView>
              <View style={{ marginBottom: 40, marginTop: 10 }}>
                <CustomCard title="Card #1" description="Hello world!" hour="19:00" />
                <CustomCard title="Card #2" description="Hello world!" hour="14:00" />
                <CustomCard title="Card #3" description="Hello world!" hour="12:00" />
                <CustomCard title="Card #4" description="Hello world!" hour="16:00" />
                <CustomCard title="Card #5" description="Hello world!" hour="13:00" />
              </View>
            </ScrollView>
        </View>
        
        <FAB
            label='Novo'
            icon="plus"
            style={styles.fab}
            onPress={() => console.log('Pressed')}
        />
    </>
  );
};

export default HomeScreen;