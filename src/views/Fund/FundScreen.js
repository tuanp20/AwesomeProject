import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Card from '../../components/Card';
import BarChartCustom from '../../components/BarChartCustom';
import Wallet from '../../../assets/icon/wallet-orange-icon.svg';
import ButtonCustom from '../../components/Button';
import RevenueAndExpenditure from './RevenueAndExpenditure';
import UploadProgress from '../../components/UploadProgress';
import { CardFundForMonth } from '../../components/CardFundForMonth';
import { Achievements } from '../../components/Achievements';

const FundScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <View style={styles.header}>
            <View style={styles.title}>
              <Wallet size={30} color={'#F58F00'} />
              <Text style={{ fontWeight: '600', marginLeft: 5 }}>Quỹ đội</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.textDetail}>Xem chi tiết</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.hr} />
          <View style={styles.header}>
            <Text style={styles.currentBalance}>Số dư hiện tại</Text>
            <Text style={styles.textDetail}>0 đ</Text>
          </View>
        </Card>

        <View style={styles.btnRevenue}>
          <ButtonCustom />
        </View>
        <Text style={styles.titleRevenue}>Báo cáo thu chi</Text>
        <RevenueAndExpenditure />
        <CardFundForMonth />
        <Achievements />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  currentBalance: {
    color: '#64748B',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
  textDetail: {
    color: '#F58F00',
    justifyContent: 'flex-start',
  },
  hr: {
    height: 1,
    backgroundColor: '#E2E8F0',
    alignSelf: 'stretch',
  },
  titleRevenue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#27364B',
    margin: 20,
  },
  btnRevenue: {
    alignItems: 'center',
  },
});

export default FundScreen;
