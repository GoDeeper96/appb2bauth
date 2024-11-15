import React from 'react'
import { Alert, Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import InputLoggin from './InputLoggin'

export default function ButtonLogin() {
  return (
   <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}>
    <Pressable style={styles.button}
    
   >
        <Text style={styles.text}>
            Iniciar Sesion
        </Text>
      
    </Pressable>
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