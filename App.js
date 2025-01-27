import { PaperProvider } from 'react-native-paper';
import * as React from 'react';
import { useColorScheme } from 'react-native';

import theme from './components/theme';
import darkTheme from './components/darkTheme';

import HomeScreen from './screens/homeScreen';

export default function App() {
  const colorScheme = useColorScheme(); 
  
  const selectedTheme = colorScheme === 'dark' ? darkTheme : theme;

  return (
    <PaperProvider theme={selectedTheme}>
      <HomeScreen />
    </PaperProvider>
  );
}