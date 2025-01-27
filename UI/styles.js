import { Dimensions, StyleSheet } from 'react-native';
import theme from '../components/theme';
import darkTheme from '../components/darkTheme';

const styles = StyleSheet.create({  
  appbar: {
    height: 56,
    backgroundColor: theme.colors.primaryContainer
  },
  flatListContainer: {
    flexGrow: 0,
    marginVertical: 10,
  },
  surfaceItem: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 10,
    width: Dimensions.get('screen').width / 5,
    marginVertical: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  surfaceText: {
    marginLeft: 10,
  },
  card: {
    marginHorizontal: 10,
    marginBottom: 20,
    paddingBottom: 10,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  chipContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  chip: {
    alignSelf: 'flex-start',
  },
  titleSmall: {
    marginLeft: 10,
  },
  titleLarge: {
    marginLeft: 10,
  },
  labelMedium: {
    marginLeft: 10,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 10,
    bottom: 20,
  },
  container: {
    flex: 1, 
    backgroundColor: theme.colors.primaryContainer
  }
});

export default styles;