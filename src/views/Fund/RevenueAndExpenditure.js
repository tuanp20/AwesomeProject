import { useState } from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import BarChartCustom from '../../components/BarChartCustom';
import DropDownPicker from 'react-native-dropdown-picker';
import Dropdown from '../../components/Dropdown';

const listTab = [
  {
    category: 'Thu quỹ',
  },
  {
    category: 'Thu',
  },
  {
    category: 'Chi',
  },
];

const data = [
  { name: 'A', category: 'Thu quỹ' },
  { name: 'B', category: 'Thu' },
  { name: 'C', category: 'Thu' },
  { name: 'D', category: 'Chi' },
];

// const filters = ['Năm', 'Quý', 'Tháng'];

const RevenueAndExpenditure = () => {
  //   const [open, setOpen] = useState(false);
  //   const [filters, setFilters] = useState(['Năm', 'Quý', 'Tháng']);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([
    'italy',
    'spain',
    'barcelona',
    'finland',
  ]);
  const [items, setItems] = useState([
    { label: 'Spain', value: 'spain' },
    { label: 'Madrid', value: 'madrid', parent: 'spain' },
    { label: 'Barcelona', value: 'barcelona', parent: 'spain' },

    { label: 'Italy', value: 'italy' },
    { label: 'Rome', value: 'rome', parent: 'italy' },

    { label: 'Finland', value: 'finland' },
  ]);
  const [category, setCategory] = useState('Thu quỹ');
  const setCategoryFilter = (category) => {
    setCategory(category);
  };
  console.log('category', category);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listTab}>
        {listTab.map((e) => (
          <TouchableOpacity
            style={[
              styles.btnTab,
              category === e.category && styles.btnTabActive,
            ]}
            onPress={() => setCategoryFilter(e.category)}
          >
            <Text
              style={[
                styles.textTab,
                category === e.category && styles.textTabActive,
              ]}
            >
              {e.category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.headerChart}>
        <View style={styles.headerChartLeft}>
          <Text style={styles.titleChartLeft}>Tổng thu tháng này</Text>
          <Text style={styles.totalAmount}>10.000.000 đ</Text>
        </View>
        <View style={styles.headerChartRight}>
          <Text style={styles.textColor}>Xem:</Text>
          <Dropdown />
        </View>
      </View>
      <BarChartCustom />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listTab: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: '#F1F4F9',
    borderRadius: 15,
    borderColor: '#E2E8F0',
    borderWidth: 2,
    height: 35,
  },
  btnTab: {
    width: Dimensions.get('window').width / 3.5,
    flexDirection: 'row',
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderColor: '#E2E8F0',
  },
  textTab: {
    fontSize: 14,
    color: '#64748B',
  },
  btnTabActive: {
    backgroundColor: '#fff',
  },
  textTabActive: {
    color: '#27364B',
    fontWeight: '700',
  },
  headerChart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
    paddingHorizontal: 22,
  },
  headerChartLeft: {
    flex: 1,
  },
  headerChartRight: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textColor: {
    color: '#64748B',
  },
  titleChartLeft: {
    fontSize: 12,
    color: '#64748B',
    marginBottom: 5,
  },
  totalAmount: {
    fontSize: 18,
    color: '#48A659',
    fontWeight: '700',
  },
});

export default RevenueAndExpenditure;
