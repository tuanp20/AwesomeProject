import { StyleSheet, View } from 'react-native';
import { Avatar } from 'react-native-elements';

export function IconAvatar() {
  return (
    <View style={styles.containerAvatar}>
      <Avatar
        rounded
        size={20}
        source={{
          uri: 'https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        }}
        overlayContainerStyle={styles.icon1}
      />
      <Avatar
        rounded
        size={20}
        source={{
          uri: 'https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        }}
        overlayContainerStyle={styles.icon2}
      />
      <Avatar
        rounded
        size={20}
        source={{
          uri: 'https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        }}
        overlayContainerStyle={styles.icon3}
      />
      <Avatar
        rounded
        size={20}
        source={{
          uri: 'https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        }}
        overlayContainerStyle={styles.icon4}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerAvatar: {
    flexDirection: 'row',
  },
  icon1: {
    // right: 4,
    borderColor: '#fff',
    borderWidth: 2,
  },
  icon2: {
    right: 6,
    borderColor: '#fff',
    borderWidth: 2,
  },
  icon3: {
    right: 12,
    borderColor: '#fff',
    borderWidth: 2,
  },
  icon4: {
    right: 18,
    borderColor: '#fff',
    borderWidth: 2,
  },
});
