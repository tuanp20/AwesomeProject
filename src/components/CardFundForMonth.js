import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Card from './Card';

import ArrowRight from '../../assets/icon/arrow-right-icon.svg';
import { Badge } from './Badge';
import UploadProgress from './UploadProgress';
import { IconAvatar } from './IconAvatar';

export function CardFundForMonth({ navigation }) {
  return (
    <Card>
      <View style={styles.header}>
        <View style={styles.title}>
          <Text style={styles.titleMonth}>Quỹ tháng 4 - 200k/TV</Text>
          <Text style={styles.subText}>01/05/2023</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowRight size={30} />
        </TouchableOpacity>
      </View>
      <UploadProgress style={{ marginVertical: 10 }} />

      <View style={styles.header}>
        <View style={styles.currentBalance}>
          <Text style={styles.subText}>Đã đóng</Text>
          <Text style={styles.currentBalance}>8.000.000 đ</Text>
          <IconAvatar />
        </View>
        <View>
          <Text style={styles.subText}>Chưa đóng</Text>
          <Badge />
          <IconAvatar />
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 5,
  },
  title: {
    flex: 1,
  },
  titleMonth: {
    fontWeight: '600',
    fontSize: 16,
  },
  subText: {
    color: '#64748B',
    fontSize: 14,
    fontWeight: '400',
  },
  textDetail: {
    color: '#F58F00',
    justifyContent: 'flex-start',
  },
  currentBalance: {
    fontSize: 18,
    fontWeight: '700',
    color: '#48A659',
    flex: 1,
  },
});
