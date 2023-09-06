import { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

const UploadProgress = ({ style }) => {
  const [progress, setProgress] = useState(0.6);
  return (
    <View style={[styles.container, { ...style }]}>
      <ProgressBar
        progress={progress}
        width={Dimensions.get('window').width / 1.15}
        color='#F58F00'
        borderColor='transparent'
        backgroundColor='#E2E8F0'
        height={8}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UploadProgress;
