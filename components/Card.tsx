import { PropsWithChildren } from 'react';
import { View, StyleSheet, ViewProps, StyleProp, ViewStyle, ImageStyle } from 'react-native';

interface CardProps extends PropsWithChildren {
    style?: StyleProp<ViewStyle>; // Permitir estilo adicional
   
  }

export default function Card({ children, style }: CardProps) {
  return (
    <View style={[styles.card, style]} >
      {children}
    </View>
  );
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
