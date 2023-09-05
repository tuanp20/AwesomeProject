import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import imageUrl from '../../assets/img/avatar/avatar1.png';
import { BarChart } from 'react-native-chart-kit';

const BarChartCustom = () => {
  const data = {
    // labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5'],
    labels: ['2012', '2013', '2014', '2015', '2016'],
    datasets: [
      {
        data: [39, 49, 88, 69, 79],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    barPercentage: 1.3,
    height: 5000,
    fillShadowGradient: `rgba(72, 166, 89, 1)`,
    fillShadowGradientOpacity: 1,
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(72, 166, 89, 1)`,
    labelColor: (opacity = 1) => `rgba(100, 116, 139, 1)`,
    style: {
      borderRadius: 16,
      fontFamily: 'Bogle-Regular',
      color: '#64748B',
    },
    propsForBackgroundLines: {
      strokeWidth: 1,
      stroke: '#fff',
      strokeDasharray: '0',
    },
    propsForLabels: {
      fontFamily: 'Bogle-Regular',
    },
  };

  return (
    <View>
      <BarChart
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        bezier
        data={data}
        width={Dimensions.get('window').width - 20}
        height={250}
        chartConfig={chartConfig}
        yAxisLabel={''}
      />
    </View>
  );
};

// const styles = StyleSheet.create({});

export default BarChartCustom;
