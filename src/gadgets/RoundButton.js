
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const RoundButton = ({ title, color, background, onPress, disabled }) => {
    return (
        <TouchableOpacity
        onPress={() => !disabled && onPress()}
        style={[ !disabled? styles.button :styles.buttonDisabled, { backgroundColor: background }]}
        activeOpacity={disabled ? 1.0 : 0.7}
      >
            <View style={styles.buttonBorder}>
            <Text style={[ styles.buttonTitle, { color }]}>{title}</Text>
            </View>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonDisabled:{
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        opacity:0.5
      },
      buttonBorder: {
        width: 76,
        height: 76,
        borderRadius: 38,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonTitle: {
        fontSize: 18,
      },
});

export default RoundButton;
