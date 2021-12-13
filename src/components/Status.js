
import React from 'react';
//import { Icon } from 'react-native-elements'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import WorkIcon from 'react-native-vector-icons/MaterialIcons';
import RestIcon from 'react-native-vector-icons/AntDesign';

import RoundButton from '../gadgets/RoundButton';


const Status = ({isWorking}) => {

  return (
      <View style={styles.container} >
        <View style={styles.sectionWrapper}>
          {isWorking===true?
            <><
              WorkIcon name="work" size={80} color="#900" />
              <Text style={styles.sectionTitle}>Work Hard</Text>
            </>
            :
            <>
              <RestIcon name="rest" size={80} color="#900" />
              <Text style={styles.sectionTitle}>Take a Break</Text>
            </>
        
          }

        </View>


      </View>
  );
};

const styles = StyleSheet.create({
  container:{
    height: 350, 
    backgroundColor: '#F2AA4CFF',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
    sectionWrapper:{
        flex:1,
        paddingHorizontal: 20,
        justifyContent:'center',
        alignItems:'center',
      },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        paddingTop: 20,
      },
      buttonsRow: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-around',
        marginTop: 80,
        marginBottom: 30,
      },
});

export default Status;
