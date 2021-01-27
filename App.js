import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './src/Header';
import Menu from './src/Menu';
import Footer from './src/Footer';

export default function App (){
  return(
    <View style={styles.container}>
     <Header/>
     <Menu/>
     <Footer/>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  }
});