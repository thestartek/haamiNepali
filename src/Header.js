import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header (){
  return(
    <View style={styles.header}>
      <Text style={styles.content}> Haami Nepali </Text>
    </View>
    
  );
}

const styles = StyleSheet.create ({
  header: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  content: {
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
  }
});