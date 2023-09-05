import { Button, StyleSheet, View } from 'react-native';

const ButtonCustom = ({ title, color }) => {
  return (
    <View>
      <Button title='+ Tạo Quỹ/thu/chi' style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    color: '#F58F00',
  },
});

export default ButtonCustom;
