
import React,{useState, useEffect} from 'react';
import Timer from '../components/Timer';
import RoundButton from '../gadgets/RoundButton';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


const Home = () => {
    const [seconds, setSeconds] = useState(100000);
    const [isWorking,setIsWorking] = useState(true);
    const [isActive, setIsActive] = useState(false);
  
    function toggle() {
      setIsActive(!isActive);
    }
  
    function reset() {
      setSeconds(0);
      setIsActive(false);
    }
  
    useEffect(() => {
        console.log(seconds);
        // setSeconds(setInterval(10000, 100));
    }, [isActive, seconds]);

    return (
        <View >
            <Timer interval={seconds} style={styles.timer}/>
            <View style={{height: 300, backgroundColor: '#baf5e5'}} >
                    <View style={styles.sectionWrapper}>
                        <Text style={styles.sectionTitle}>Eye Cycle3</Text>
                        {isWorking ?<Text style={styles.sectionTitle}>Working</Text>: <Text style={styles.sectionTitle}>Resting</Text>}
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.buttonsRow}>
                        <RoundButton              
                            title='Clear'
                            color='#FFFFFF'
                            background='#3D3D3D'
                            onPress={()=>reset()}
                        />
                        {isActive==true ?
                            <RoundButton              
                                title='Stop'
                                color='#FFFFFF'
                                background='#3D3D3D'
                                onPress={()=>toggle()}
                            /> :
                            <RoundButton              
                            title='Start'
                            color='#FFFFFF'
                            background='#3D3D3D'
                            onPress={()=>toggle()}
                            /> 
                        }
                    </View>
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    timer: {
        color: '#FFFFFF',
        fontSize: 50,
        fontWeight: '200',
        width: 110,
      },
      sectionWrapper:{
        paddingTop: 50,
        paddingHorizontal: 20,
      },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
      },
      buttonsRow: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-around',
        marginTop: 80,
        marginBottom: 30,
      },
});

export default Home;
