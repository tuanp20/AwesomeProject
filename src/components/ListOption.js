import { View, Text } from 'react-native';

const ListOption = (item) => {
  console.log('item', item);
  return (
    <View>
      <Text>{item.icon}</Text>
      <Text>{item.title}</Text>
    </View>
  );
};

export default ListOption;
