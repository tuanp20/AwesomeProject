import { View, Text, StyleSheet, Dimensions } from 'react-native';
import ImgNoData from '../../assets/img/no-data.svg';

const NoData = ({ style }) => {
  return (
    <View style={[styles.container, { ...style }]}>
      <ImgNoData size={50} />
      <Text style={styles.title}>Chưa có dữ liệu</Text>
      <Text style={styles.textSub}>
        Hiện tại bạn chưa có dữ liệu, vui lòng quay lại sau.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#27364B',
    marginVertical: 8,
  },
  textSub: {
    fontSize: 14,
    fontWeight: '400',
    color: '#94A3B8',
    marginHorizontal: Dimensions.get('window').width / 3.5,
    textAlign: 'center',
  },
});

export default NoData;
