
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import moment from 'moment'

const Timer = ({ interval }) => {
    const pad = (n) => n < 10 ? '0' + n : n;
    const duration = moment.duration(interval);
    return (
        <View style={styles.timerContainer}>
            <Text style={styles.timer}>{pad(duration.minutes())}</Text>
            <Text style={styles.timer}>:</Text>
            <Text style={styles.timer}>{pad(duration.seconds())}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    timerContainer: {
        flexDirection: 'row',
        justifyContent:'center'
        
      },
      timer: {
        color: '#FFFFFF',
        fontSize: 76,
        fontWeight: '300',
      },
});

export default Timer;
