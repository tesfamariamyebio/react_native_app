import { StatusBar } from 'expo-status-bar';
// import Text from './component/Text';
import React from 'react';
import { StyleSheet, Text,Image,ScrollView,Button,View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Button 
        title='press it'
        onpress={()=>Alert.alert('Aller dans la documentation')}/>
      </View>
      <ScrollView>
      <Text style={styles.text1}> une taille de police de 30</Text>
      <Text style={styles.text2}> text centré</Text>
      <Text style={styles.text3}> text en gras</Text>
      </ScrollView>
      <View>
       <p> <Image source={require('./assets/konexio-logo_1.png')} style={{ width: 700, height: 100 }} /></p>
      </View>
        <View>
        <p><Image
          source={{ uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png' }}
          style={{ width: 600, height: 100 }} /> </p>
              
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text1:{
    fontSize:80,
    paddingTop:80,
    marginBottom:80
  },
  text2:{
    textAlign:'center',
    paddingTop:80,
    marginBottom:80
  },
  text3:{
    fontWeight:'bold',
    paddingTop:80,
    marginBottom:80
  }
});
