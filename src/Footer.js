import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Footer (){
  return(
    <View style={styles.footer}>
      <Text style={styles.content}> Post Something </Text>
    </View>
    
  );
}

const styles = StyleSheet.create ({
  footer: {
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