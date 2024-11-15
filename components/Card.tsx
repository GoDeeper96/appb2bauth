import { PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';


export default function Card({children}:PropsWithChildren) {
  return (
    <View style={styles.card}>
        {children}

    </View>
  )
}
const styles = StyleSheet.create({
    card:{
        borderRadius:6,
        borderWidth:2,
        marginTop:20,
        marginBottom:50,
        paddingHorizontal:40,
        paddingBottom:20,
        shadowOpacity:0.25,
        shadowRadius:10,
        elevation:20,
        shadowOffset: {
            width: 0,
            height: -0,
          },
        shadowColor: 'black',
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#FFFFFF',
    
        backgroundColor:'#FFFFFF'
    }
})
