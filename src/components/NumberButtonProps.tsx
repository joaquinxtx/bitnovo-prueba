import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { stylesCreatePaymentScreen } from '../styles/Styles';

interface NumberButtonProps {
  number: number;
  onPress: (number: number) => void;
}

const NumberButton: React.FC<NumberButtonProps> = ({ number, onPress }) => {
  return (
    <TouchableOpacity style={stylesCreatePaymentScreen.numberButton} onPress={() => onPress(number)}>
      <Text style={stylesCreatePaymentScreen.numberButtonText}>{number}</Text>
    </TouchableOpacity>
  );
};

export default NumberButton;