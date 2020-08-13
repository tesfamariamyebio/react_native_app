import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Text() {
    return (
      <View style={styles.container}>
      
        <View>
        <p>Une avec une taille de police de 30</p>
        <p>Une autre centrée</p>
        <p>Et un dernier texte en gras</p>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
  
 
  