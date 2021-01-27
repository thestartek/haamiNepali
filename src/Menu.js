import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';

export default function Menu (){
  return(
    <View style={styles.menu}>
     <View style={styles.icon}>
     
      <Image style={styles.image}
      source={require('../assets/news.png')}/>
      <Text style={styles.text}> News </Text>
     </View>

     <View style={styles.icon}>
      <Image style={styles.image}
      source={require('../assets/jobs.png')}/>
      <Text style={styles.text}> Jobs </Text>
     </View>

     <View style={styles.icon}>
      <Image style={styles.image}
      source={require('../assets/shop.png')}/>
      <Text style={styles.text}> Shop </Text>
     </View>

     <View style={styles.icon}>
      <Image style={styles.image}
      source={require('../assets/rent.png')}/>
      <Text style={styles.text}> Rent </Text>
     </View>

     <View style={styles.icon}>
      <Image style={styles.image}
      source={require('../assets/community.png')}/>
      <Text style={styles.text}> Community </Text>
     </View>

     <View style={styles.icon}>
      <Image style={styles.image}
      source={require('../assets/support.png')}/>
      <Text style={styles.text}> Support </Text>
     </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  menu: {
    width: '100%',
    height: '80%',
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'blue',
  },
  icon: {
    width: '50%',
    height: '30%',
    padding: 30,
  },
  image: {
    height: 110,
    width: 110,
  },
  text: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});