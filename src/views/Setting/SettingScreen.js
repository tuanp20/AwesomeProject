import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ArrowRight from '../../../assets/icon/arrow-right-icon.svg';
import Logout from '../../../assets/icon/logout-icon.svg';
import { configSetting, premium } from '../../constants/setting';

const SettingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleSetting}>General settings</Text>
        <FlatList
          data={configSetting}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate(item.name)}>
              <View style={styles.itemSetting}>
                <View style={styles.optionSetting}>
                  {item.icon}
                  <Text style={styles.itemText}>{item.title}</Text>
                </View>
                <ArrowRight size={30} color='blue' />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.premium}>
        <Text style={styles.titleSetting}>Premium</Text>
        <FlatList
          data={premium}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate(item.name)}>
              <View style={styles.itemSetting}>
                <View style={styles.optionSetting}>
                  {item.icon}
                  <Text style={styles.itemText}>{item.title}</Text>
                </View>
                <ArrowRight size={30} color='blue' />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.logout}>
        <Logout size={30} color='blue' />
        <Text style={styles.logoutText}>Logout</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  itemText: {
    fontSize: 16,
    paddingLeft: 10,
  },
  itemSetting: {
    marginHorizontal: 25,
    paddingVertical: 15,
    borderBottomColor: '#8DA0D0',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionSetting: {
    flexDirection: 'row',
  },
  titleSetting: {
    color: '#64748B',
    fontSize: 16,
    marginLeft: 25,
  },
  premium: {
    marginTop: 30,
  },
  logout: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  logoutText: {
    fontSize: 18,
    color: '#E14C3C',
    marginLeft: 15,
  },
});

export default SettingScreen;
