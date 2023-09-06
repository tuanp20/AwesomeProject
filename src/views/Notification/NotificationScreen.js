import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Empty from '../../../assets/img/empty.svg';
import { useState } from 'react';
import ChangeLogo from '../../../assets/icon/change-logo-icon.svg';
import ItemNotification from '../../components/ItemNotification';

const NotificationScreen = ({ navigation }) => {
  const [isContent, setIsContent] = useState(false);
  const [data, setData] = useState([
    {
      logo: <ChangeLogo color={'red'} size={100} />,
      content: 'Yêu cầu thay đổi biểu tượng app.',
      timeOfContent: '2 tiếng trước',
      icon: <ChangeLogo color={'red'} size={100} />,
    },
    {
      logo: <ChangeLogo color={'red'} size={100} />,
      content:
        'Rashford đã tạo vote Giao hữu câu lạc bộ Real Madrid 15/08/2023.',
      timeOfContent: '2 tiếng trước',
      icon: <ChangeLogo color={'red'} size={100} />,
    },
    {
      logo: <ChangeLogo color={'red'} size={100} />,
      content: 'Yêu cầu thay đổi biểu tượng app.',
      timeOfContent: '2 tiếng trước',
      icon: <ChangeLogo color={'red'} size={100} />,
    },
    {
      logo: <ChangeLogo color={'red'} size={100} />,
      content: 'Yêu cầu thay đổi biểu tượng app.',
      timeOfContent: '2 tiếng trước',
      icon: <ChangeLogo color={'red'} size={100} />,
    },
    {
      logo: <ChangeLogo color={'red'} size={100} />,
      content: 'Yêu cầu thay đổi biểu tượng app.',
      timeOfContent: '2 tiếng trước',
      icon: <ChangeLogo color={'red'} size={100} />,
    },
    {
      logo: <ChangeLogo color={'red'} size={100} />,
      content: 'Yêu cầu thay đổi biểu tượng app.',
      timeOfContent: '2 tiếng trước',
      icon: <ChangeLogo color={'red'} size={100} />,
    },
    {
      logo: <ChangeLogo color={'red'} size={100} />,
      content: 'Yêu cầu thay đổi biểu tượng app.',
      timeOfContent: '2 tiếng trước',
      icon: <ChangeLogo color={'red'} size={100} />,
    },
    {
      logo: <ChangeLogo color={'red'} size={100} />,
      content: 'Yêu cầu thay đổi biểu tượng app.',
      timeOfContent: '2 tiếng trước',
      icon: <ChangeLogo color={'red'} size={100} />,
    },
    {
      logo: <ChangeLogo color={'red'} size={100} />,
      content: 'Yêu cầu thay đổi biểu tượng app.',
      timeOfContent: '2 tiếng trước',
      icon: <ChangeLogo color={'red'} size={100} />,
    },
    {
      logo: <ChangeLogo color={'red'} size={100} />,
      content: 'Yêu cầu thay đổi biểu tượng app.',
      timeOfContent: '2 tiếng trước',
      icon: <ChangeLogo color={'red'} size={100} />,
    },
  ]);

  return (
    <View style={isContent ? styles.container : styles.containerData}>
      {isContent ? (
        <>
          <Empty size={50} />
          <Text style={styles.title}>Chưa có thông báo</Text>
          <Text style={styles.content}>
            Hiện tại bạn chưa có thông báo nào, vui lòng quay lại sau.
          </Text>
        </>
      ) : (
        <View>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ItemNotification
                  logo={item.logo}
                  content={item.content}
                  timeOfContent={item.timeOfContent}
                  icon={item.icon}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerData: {
    backgroundColor: '#fff',
  },
  title: {
    color: '#27364B',
    fontSize: 18,
    marginVertical: 10,
    // fontWeight: 600,
  },
  content: {
    color: '#94A3B8',
    textAlign: 'center',
    marginHorizontal: 80,
  },
});

export default NotificationScreen;
