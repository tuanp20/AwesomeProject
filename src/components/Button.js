import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ButtonCustom = ({ title, color, style }) => {
  console.log('style', style);
  return (
    <TouchableOpacity style={[styles.appButtonContainer, { ...style }]}>
      <Text style={styles.appButtonText}>+ Tạo Quỹ/Thu/Chi</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#F58F00',
    width: 180,
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'row',
  },
  appButtonText: {
    fontSize: 14,
    color: '#F58F00',
    fontWeight: 'bold',
    alignSelf: 'center',
    // textTransform: 'uppercase',
  },
});

export default ButtonCustom;
