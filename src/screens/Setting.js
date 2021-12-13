
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
      <ScrollView>
          <Text>Setting</Text>
          <View>

          </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
    //height: 350, 
    //height: 400,
    position:'relative',
    flex:1.5,
    width: '100%',
    backgroundColor: '#363636',
    borderTopRightRadius: 90,
  },
  container1:{
    position:'relative',
    flex:1,
    width: '100%',
  },
  container2:{
    //height: 350, 
    position:'relative',
    flex:15,
    backgroundColor: '#FFFFFF',
    width: '100%',
    //borderTopLeftRadius: 20,
    borderTopRightRadius: 90,
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
