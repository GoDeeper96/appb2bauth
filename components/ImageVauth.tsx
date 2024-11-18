import React from 'react'
import { StyleProp, StyleSheet, View, ViewStyle,ImageStyle } from 'react-native'
import { Image } from 'expo-image';
interface PropsImage {
    srcImage:NodeRequire,
    style?:StyleProp<ViewStyle>,
    styleImg?:StyleProp<ImageStyle>
}
export default function I({srcImage,style,styleImg}:PropsImage) {
  return (
  
        <Image
        style={[styles.imgItself, styleImg]}
           source={srcImage} // Ruta relativa a la imagen
           contentFit="cover"
        />
    
  )
}
const styles = StyleSheet.create({
    imgView:{
     
        width:'100%'
    },
    imgItself:{
        borderRadius:9,
        width:'100%',
        height:180
    }
})