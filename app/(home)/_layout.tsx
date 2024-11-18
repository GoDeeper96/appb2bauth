import { Link, Stack } from 'expo-router'
import React from 'react'
import { View,Text, StyleSheet } from 'react-native'
import ImageVauth from '@/components/ImageVauth'
import { LinearGradient } from 'expo-linear-gradient'
export default function LayoutRoot() {
  return (
    <Stack
    
    screenOptions={{
        header:()=>(
        
         <View style={{ backgroundColor: '#FFFFFF', 
        margin:17,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:10,
          elevation:8}}>
         
            <View style={{ 
            
           
            
            flexDirection: 'row', // Alinea los elementos en fila
            alignItems: 'center', // Centra los elementos verticalmente
            padding:5,
           }}>
            <View style={{ 

            flexDirection: 'column', // Alinea los elementos en fila
            alignItems: 'center', // Centra los elementos verticalmente
            padding:10,
           }}>
            <Text style={{ color: '#f75d5d', textAlign: 'center', fontSize: 30,fontFamily:'Lato-Bold' }}>Vauth</Text>
            <Text style={{ color: '#f75d5d', textAlign: 'center', fontSize: 12,fontFamily:'Lato-Bold' }}> v1.0</Text>
            </View>
            <ImageVauth 
            styleImg={styles.image}
             srcImage={require('../../assets/images/VegaAuth4.jpg')}/>
            </View>
     
           
          </View>
      
        ),

    }}>

  
    {/* Optionally configure static options outside the route.*/}
    <Stack.Screen   name="home" options={{}} />
  </Stack>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      marginLeft:5,
      width: 50,
      height: 50,
    },
  });