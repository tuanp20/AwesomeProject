import { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Card from '../../components/Card';

const FundDetailScreen = () => {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState([
    {
      transactionAmoud: 200000,
      balance: 4000000,
      date: '20/06/2023',
      content: 'Alejandro Garnacho đóng quỹ tháng 6',
    },
    {
      transactionAmoud: 200000,
      balance: 4000000,
      date: '20/06/2023',
      content: 'Alejandro Garnacho đóng quỹ tháng 6',
    },
    {
      transactionAmoud: 200000,
      balance: 4000000,
      date: '20/06/2023',
      content: 'Alejandro Garnacho đóng quỹ tháng 6',
    },
    {
      transactionAmoud: 200000,
      balance: 4000000,
      date: '20/06/2023',
      content: 'Alejandro Garnacho đóng quỹ tháng 6',
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      {/* <DatePicker value={date} onChange={(date) => setDate(date)} /> */}
      <Text style={styles.transactionMoneyChange}>Lịch sử thu chi</Text>
      <Card>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => (
            <View style={styles.itemTransaction}>
              <View style={styles.transaction}>
                <View style={styles.transactionMoney}>
                  <Text style={styles.titleTransactionMoney}>
                    Số tiền GD:{' '}
                    <Text
                      style={[styles.transactionMoneyChange, styles.colorAdd]}
                    >
                      {item.transactionAmoud}
                    </Text>
                  </Text>
                  <Text style={[styles.titleTransactionMoney]}>
                    Số quỹ dư:{' '}
                    <Text
                      style={[
                        styles.transactionMoneyChange,
                        styles.colorBalance,
                      ]}
                    >
                      {item.balance}
                    </Text>
                  </Text>
                </View>
                <View>
                  <Text style={styles.titleTransactionMoney}>{item.date}</Text>
                </View>
              </View>
              <Text style={styles.colorBalance}>{item.content}</Text>
            </View>
          )}
        />
        {/*          
          <View style={styles.itemTransaction}>
            <View style={styles.transaction}>
              <View style={styles.transactionMoney}>
                <Text style={styles.titleTransactionMoney}>
                  Số tiền GD:{' '}
                  <Text
                    style={[styles.transactionMoneyChange, styles.colorAdd]}
                  >
                    200.000
                  </Text>
                </Text>
                <Text style={[styles.titleTransactionMoney]}>
                  Số quỹ dư:{' '}
                  <Text
                    style={[styles.transactionMoneyChange, styles.colorBalance]}
                  >
                    9.200.000
                  </Text>
                </Text>
              </View>
              <View>
                <Text style={styles.titleTransactionMoney}>14/08/2023</Text>
              </View>
            </View>
            <Text style={styles.colorBalance}>
              Alejandro Garnacho đóng quỹ tháng 6
            </Text>
          </View> */}
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 3,
  },
  transactionMoney: {
    flex: 1,
  },
  itemTransaction: {
    borderBottomColor: '#8DA0D0',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 15,
  },
  titleTransactionMoney: {
    fontSize: 12,
    fontWeight: '400',
    color: '#64748B',
  },
  transactionMoneyChange: {
    fontSize: 16,
    fontWeight: '600',
  },
  colorAdd: {
    color: '#48A659',
  },
  colorBalance: {
    color: '#27364B',
  },
  colorReduce: {
    color: '#E14C3C',
  },
});

export default FundDetailScreen;
