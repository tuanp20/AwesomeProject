import { StyleSheet, Text, View } from 'react-native';
import ArrowRight from '../../assets/icon/arrow-right-icon.svg';
import Win from '../../assets/icon/tick-circle-win-icon.svg';
import Draw from '../../assets/icon/minus-cirlce-draw-icon.svg';
import Lose from '../../assets/icon/close-circle-lose-icon.svg';
import Card from './Card';

export function Achievements() {
  return (
    <Card>
      <View style={styles.badge}>
        <Text style={styles.titleAchievement}>Thành tích</Text>
        <View style={styles.amount}>
          <View style={styles.result}>
            <Text style={styles.titleResult}>Thắng</Text>
            <Text style={[styles.subResult, styles.colorWin]}>8</Text>
          </View>
          <View style={styles.result}>
            <Text style={styles.titleResult}>Hòa</Text>
            <Text style={[styles.subResult, styles.colorDraw]}>18</Text>
          </View>
          <View style={styles.result}>
            <Text style={styles.titleResult}>Thua</Text>
            <Text style={[styles.subResult, styles.colorLose]}>2</Text>
          </View>
        </View>
        <View>
          <View style={styles.header}>
            <Text style={styles.titleHistoryMatch}>Lịch sử đấu</Text>
            <ArrowRight size={30} />
          </View>
          <View style={styles.achievementsIcon}>
            <Win size={30} />
            <Draw size={30} />
            <Lose size={30} />
          </View>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  achievementsIcon: {
    flexDirection: 'row',
  },
  amount: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12,
  },
  titleAchievement: {
    fontWeight: '600',
    fontSize: 16,
  },
  titleHistoryMatch: {
    fontWeight: '400',
    fontSize: 14,
    color: '#64748B',
    flex: 1,
  },
  result: {
    alignItems: 'center',
  },
  titleResult: {
    fontWeight: '600',
    fontSize: 14,
    color: '#64748B',
  },
  subResult: {
    fontWeight: '700',
    fontSize: 18,
    marginTop: 10,
  },
  colorWin: {
    color: '#48A659',
  },
  colorDraw: {
    color: '#64748B',
  },
  colorLose: {
    color: '#E14C3C',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 5,
  },
});
