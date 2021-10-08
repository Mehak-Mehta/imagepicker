import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
const logo = require( './assets/logo.jpg')

// PS: i was high when i was coding this

export default function App() {

  // idk i usually dont write comments ill write it for my future self (if i ever want to see some legacy code)

  // this thing is for opening the image or requesting perms to open it
  let openImage = async () => {
    let prems = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (prems.granted === false) {
      alert("perms needed")
      return
    }

    let res = await ImagePicker.launchImageLibraryAsync()
    console.log(res)
  }

  // below is the actual code 
  // can i separate the functions? bruhh

  return ( // this is the text
    <View style={styles.container}> 
      <Text >Hello from expo react native</Text>
      <Image source= {logo}/>
      <StatusBar style="auto" />

    <TouchableOpacity // this is for the button
      onPress = {openImage} style= {styles.button}>
      <Text style= {styles.button}>Pick a pic</Text>
    </TouchableOpacity>
    </View>
  );
}

// some cssssssssssssss 
// i think i can separate this 

// brb
// ok i tried to separate it but i messed up leave it

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8CFC9',
    textAlign: 'CENTER',
    justifyContent: 'center',
  },

  buttontext: {
    fontSize: 18,
  },

  button: {
    backgroundColor: "blue",
    borderRadius: 5,
    width: "100",
    margin: "100",
    color: "#fff",
  }


});
