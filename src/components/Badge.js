import { StyleSheet, Text, View } from 'react-native';

export function Badge() {
  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>Đã hoàn thành</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#edf6ee',
    padding: 8,
  },
  badgeText: {
    color: '#48A659',
  },
});
