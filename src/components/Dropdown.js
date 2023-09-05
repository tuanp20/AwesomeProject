import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SelectCountry } from 'react-native-element-dropdown';

const local_data = [
  {
    value: '1',
    label: 'Năm',
  },
  {
    value: '2',
    label: 'Quý',
  },
  {
    value: '3',
    label: 'Tháng',
  },
];

const Dropdown = () => {
  const [country, setCountry] = useState('1');
  return (
    <SelectCountry
      style={styles.dropdown}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      maxHeight={200}
      value={country}
      data={local_data}
      valueField='value'
      labelField='label'
      placeholder='Select time'
      searchPlaceholder='Search...'
      onChange={(e) => {
        setCountry(e.value);
      }}
    />
  );
};

const styles = StyleSheet.create({
  dropdown: {
    // margin: 16,
    height: 40,
    width: 90,
    backgroundColor: '#fff',
    color: '#F58F00',
    // borderRadius: 22,
    // paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 14,
    color: '#F58F00',
  },
  selectedTextStyle: {
    fontSize: 14,
    marginLeft: 8,
    color: '#F58F00',
  },
});

export default Dropdown;
