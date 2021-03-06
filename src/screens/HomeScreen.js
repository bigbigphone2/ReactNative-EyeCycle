import React, { Component } from 'react'
import {
  StyleSheet, Text, View,TouchableOpacity
  } from 'react-native'

import Timer from '../components/Timer'
import Status from '../components/Status'
import RoundButton from '../gadgets/RoundButton'
import PushNotification from 'react-native-push-notification'
import IconTriangle from 'react-native-vector-icons/AntDesign'
import SettingIcon from 'react-native-vector-icons/Ionicons';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false,
      contTime: 3599999,
      //contTime: 2000,
      isWorking: true,
      isShowResume: false,
      start: 0,
      now: 0,
    }
    this.creatCahnnel()
  }
  creatCahnnel =() =>{
    PushNotification.createChannel({
      channelId:"test-channel",
      channelName:"Test channel",
      soundName: "default",
      playSound: true,
    })
  }
  handleNotificationRest=()=>{
    PushNotification.cancelAllLocalNotifications();
    PushNotification.localNotification({
      channelId:"test-channel",
      message:"Time to Rest",
      playSound: true,
      soundName: "default",
      vibrate: true,
    })
  }
  handleNotificationWork=()=>{
    PushNotification.cancelAllLocalNotifications();
    PushNotification.localNotification({
      channelId:"test-channel",
      message:"Time to Work",
      playSound:true,
      soundName: "default",
      vibrate:true,
    })
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  switch = () =>{
    clearInterval(this.timer)
    const { isWorking } = this.state
    if (isWorking===false){
      this.setState({
        isWorking: true,
        contTime: 3599999,
        //contTime: 2000,
      })
    }else{
      this.setState({
        isWorking: false,
        contTime: 300000,
        //conTime: 1000,
      })
    }
    
  }
  switchAndStart = () =>{
    
    clearInterval(this.timer)
    const { isWorking,contTime } = this.state
    if (isWorking===false){
      this.setState({
        isActive: false,
        isWorking: true,
        contTime: 3599999,
        //contTime: 2000,
      })
      this.handleNotificationWork()
    }else{
      this.setState({
        isActive: false,
        isWorking: false,
        contTime: 300000,
        //conTime: 1000,
      })
      this.handleNotificationRest()
    }  
    this.start()
  }
  start = () => {
    this.setState({
      start: new Date().getTime(),
      now: new Date().getTime(),
      isActive: true,
    })
    this.timer = setInterval(() => {
      const { contTime,start,now} = this.state
      this.setState({ now: new Date().getTime()})
      if (contTime+ start - now<0){
        this.switchAndStart()
      }
    }, 100)

  }
  stop = () => {
    clearInterval(this.timer)
    const { now, start } = this.state
    this.setState({
      isActive: false,
      isShowResume: true,
    })
  }
  reset = () => {
    this.setState({
      isActive: false,
      start: 0,
      now: 0,
      isShowResume: false,
    })
  }
  resume = () => {
    this.setState({
      isActive: true,
    })
    this.timer = setInterval(() => {
      const { contTime,start,now} = this.state
      this.setState({ now: new Date().getTime()})
      if (contTime+ start - now<0){
        this.switchAndStart()
      }
    }, 100)
  }
  render() {
    const { now, start,isActive,isShowResume,isWorking,contTime } = this.state
    const timer = contTime+ start - now;
    return (
      <View style={styles.container}>
        {/* <Text style={styles.title}>{isWorking===true?'Working':'Resting'}</Text> */}
        <View style={styles.clockContainer}>
            {/* <TouchableOpacity
            onPress={() =>
              navigation.navigate('Setting')}
              activeOpacity={0.7}
              style={styles.setting}
          >
            <SettingIcon name="settings-sharp" size={30} color='#FFFFFF'  />
          </TouchableOpacity> */}
          <Text style={{color:'#FFFFFF', fontSize:20,fontWeight: 'bold',marginTop:120}}>Eye Cycle</Text>
          <IconTriangle name="caretdown" size={20} color='#FFFFFF'/>
          <Timer
            interval={timer}
          />
          {isActive=== true && (
            <View style={styles.buttonsRow}>
              <RoundButton
                title='Switch'
                color='#FFFFFF'
                background='#3D3D3D'
                onPress={this.switch}
                disabled
              />
              <RoundButton
                title='Stop'
                color='#E33935'
                background='#3C1715'
                onPress={this.stop}
              />
            </View>
          )}
          { isActive=== false && isShowResume===false && (
            <View style={styles.buttonsRow}>
              <RoundButton
                title='Switch'
                color='#FFFFFF'
                background='#3D3D3D'
                onPress={this.switch}
              />
              <RoundButton
                title='Start'
                color='#50D167'
                background='#1B361F'
                onPress={this.start}
              />
            </View>
          )}
          { isActive=== false && isShowResume===true &&(
            <View style={styles.buttonsRow}>
              <RoundButton
                title='Reset'
                color='#FFFFFF'
                background='#3D3D3D'
                onPress={this.reset}
              />
              <RoundButton
                title='Resume'
                color='#50D167'
                background='#1B361F'
                onPress={this.resume}
              />
            </View>
          )}
        </View>
        <Status isWorking={isWorking}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'space-between',
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    width: '100%',
  },
  clockContainer:{
    flex:2,
    width:'100%',
    paddingHorizontal: 20, 
    alignItems: 'center',
    position: 'relative'
  },

  buttonsRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginTop: 80,
    marginBottom: 30,
  },
  title:{
    color:'#FFFFFF',
    fontSize:30
  },
  setting:{
    position:'absolute',
    left:30,
    top: 30,
  }
})
