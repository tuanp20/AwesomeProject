import { StyleSheet, View } from 'react-native';

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 16,
    elevation: 13,
    shadowOffset: { width: 0, height: 20 },
    shadowColor: '#000',
    shadowRadius: 16,
    shadowOpacity: 1,
    marginHorizontal: 15,
    marginVertical: 10,
  },
});

export default Card;
