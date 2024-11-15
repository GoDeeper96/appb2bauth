import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Image } from 'expo-image';
export default function ImageLogin() {
  return (
    <View style={styles.imgView}>
        <Image
        style={styles.imgItself}
           source={require('../assets/images/VegaAuth4.jpg')} // Ruta relativa a la imagen
           
        />
    </View>
  )
}
const styles = StyleSheet.create({
    imgView:{
        padding:20
    },
    imgItself:{
        width:140,
        height:140
    }
})
