import React from 'react'
import { Alert, Button, Pressable, StyleProp, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View, ViewStyle } from 'react-native'
interface ButtonProps {
    title?: string;
    style?: StyleProp<ViewStyle>; // Permitir estilo adicional

}
export default function ButtonGenerator({title,style}:ButtonProps) {
    const getData = async()=>{
        
    }
  return (
    <TouchableOpacity style={[styles.button,style]} onPress={getData}>
   
    <Text style={styles.text}>
        {title}
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