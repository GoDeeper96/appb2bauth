import React from 'react'
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native'
import { useFonts } from 'expo-font';
interface InputLogginProps {
    keyboardType:KeyboardTypeOptions;
    placeholder: string; // Propiedad opcional
    // value: string;       // Propiedad opcional para el valor del input
    // onChangeText: (text: string) => void; // Función para manejar cambios de texto
    Titulo:string;
  
  }

export default function InputLoggin({ 
    placeholder, 
    keyboardType,
    // value, 
    // onChangeText,
    Titulo }: InputLogginProps) {
    const [loaded, error] = useFonts({
            'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    });
  return (
    <View style={styles.viewInput}>
    <Text style={styles.textInput}>{Titulo}</Text>
    <TextInput
    style={styles.input}
    // onChangeText={onChangeNumber}
    // value={number}
    placeholder={placeholder}
    keyboardType={keyboardType}
  />
  </View>
  )
}
const styles = StyleSheet.create({
 viewInput:{
    flexDirection:'column',
    marginBottom:10
 },
 textInput:{
    color:'#8d5555',
    fontSize:16,
    fontFamily:'Lato-Bold'
 },
 input: {
    borderColor:'#CD5C5C',
    
    marginTop:10,
    borderWidth: 1,
    padding: 13,
  },
})