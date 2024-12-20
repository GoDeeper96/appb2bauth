import React from 'react'
import { Alert, Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import InputLoggin from './InputLoggin'


export default function ButtonLogin() {
    const getData = async()=>{
        
    }
  return (
   <TouchableOpacity style={styles.button} onPress={getData}>
   
        <Text style={styles.text}>
            Iniciar Sesion
        </Text>
      
  
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
   
    button: {
        marginTop:13,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#f75d5d',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        fontFamily:'Lato-Bold',
        letterSpacing: 0.25,
        color: 'white',
      },
})