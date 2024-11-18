import React from 'react'
import { View,Text, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import 'react-native-reanimated';
import {LinearGradient } from 'expo-linear-gradient'
import Card from '@/components/Card';
import ButtonLogin from '@/components/ButtonLogin';
import InputLoggin from '@/components/InputLoggin';
import ImageLogin from '@/components/ImageLogin';
import TitleLogin from '@/components/TitleLogin';

export default function Index() {
  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
    style={styles.gradientView}
  
    >
    
       <Card>
        <ImageLogin/> 
        <TitleLogin/>
       <View style={styles.viewLogin}>
         <InputLoggin  placeholder='Ingresa tu usuario'
       keyboardType='default'
       Titulo='Usuario'/>
       <InputLoggin 
       placeholder='*********'
       keyboardType='default'
       Titulo='Contraseña'
       />
         <ButtonLogin/>
         </View>
       </Card>
      
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    gradientView : {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
     
      backgroundColor:'#f1515e'
    },
    viewLogin:{
      marginTop:10,
      width:200
  },
  }) 
