import React from 'react'
import { StyleSheet,Text } from 'react-native'

export default function TitleLogin() {
  return (
    <Text style={styles.titleStyle}>
        Vauth <Text style={styles.titleSpan}>v1.0</Text>
    </Text>
  )
}
const styles = StyleSheet.create({
    titleStyle:{
        color:'#ff5656',
        fontSize:33,
        fontFamily:'Lato-Bold'
    },
    titleSpan:{
        fontSize:15,
        fontFamily:'Lato-Bold'
    }
})
