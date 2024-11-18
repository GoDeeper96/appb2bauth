import React,{PropsWithChildren}from 'react'
import { StyleProp, StyleSheet, Text, TextStyle, ViewStyle, } from 'react-native'
interface TitleNotProps  {
    title?: string;
    style?: StyleProp<TextStyle>; // Permitir estilo adicional
  }

export default function TitleNotification({title,style}:TitleNotProps) {
  return (
    <Text style={[styles.Title, style]}>
        {title}
    </Text>

  )
}
const styles = StyleSheet.create({
    Title:{
        fontSize:20,
        fontFamily:'Lato-Bold',
        color:'#fa8059'
    }
})

