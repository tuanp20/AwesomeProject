import { Image, StyleSheet, Text, View } from 'react-native';
import ChangeLogo from '../../assets/icon/change-logo-icon.svg';

const ItemNotification = ({ logo, content, timeOfContent, icon }) => {
  return (
    <View style={styles.itemNoti}>
      {logo}
      <View style={styles.itemContent}>
        <Text>{content}</Text>
        <Text style={styles.subText}>{timeOfContent}</Text>
      </View>
      {icon}
    </View>
  );
};

const styles = StyleSheet.create({
  itemNoti: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 65,
    borderBottomColor: '#8DA0D0',
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 20,
  },
  itemContent: {
    flex: 2,
    paddingHorizontal: 30,
  },
  subText: {
    color: '#64748B',
    fontSize: 12,
    marginTop: 10,
  },
});

export default ItemNotification;
