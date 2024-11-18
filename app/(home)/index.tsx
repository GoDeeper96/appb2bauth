import ButtonGenerator from '@/components/ButtonGenerator'
import ButtonLogin from '@/components/ButtonLogin'
import Card from '@/components/Card'
import ImageVauth from '@/components/ImageVauth'
import TitleNotification from '@/components/TitleNotification'
import React from 'react'
import { View,Text, StyleSheet } from 'react-native'

export default function Index() {
  
  return (
    <View>
    <Card  style={styles.cardNews}>
    <View style={styles.imagePart} >
        <ImageVauth
        srcImage={require('../../assets/images/hh1.jpg')}
        />
    </View>
    <View style={styles.NotificationPart}>
    <TitleNotification title='Autenticacion'/>
    <Text style={styles.TextPart}>
        La autenticacion permite validar las credenciales de los usuarios, asegurando la seguridad de la sesión y dispositivo.
    </Text>
    </View>
    </Card>
    <Card  style={styles.Generator}>
   
    <View style={styles.GeneratorPart}>
    <TitleNotification title='Genera un codigo' style={styles.TitleGenerator}/>
    <Text style={styles.TextGenerator}>
        Dale click a generar para crear un codigo.
    </Text>
       <ButtonGenerator
        title='Crear Codigo'
       />
    </View>
    </Card>
    <Card  style={styles.cardFooter}>
    <View style={styles.imagePart} >
       
    </View>
  
    </Card>
    </View>
  )
}
const styles = StyleSheet.create({
    TitleGenerator:{
        textAlign:'center',
        fontFamily:'Lato-Bold',
        
        
      
        
    },
    TextGenerator:{
        textAlign:'justify',
        fontWeight:'bold',
        
        paddingTop:8,
        fontSize:15,
        color:'#cacaca'
    },
    cardNews:{
        margin:15,
        marginBottom:10,
        padding:0,
        paddingHorizontal:0,
        paddingBottom:0,
        flexDirection:'row'
    },
    cardFooter:{
        margin:15,
        marginBottom:10,
        marginTop:90,
        padding:0,
        paddingHorizontal:0,
        paddingBottom:0,
        height:80,
      
        flexDirection:'row'  
    },
    Generator:{
        marginBottom:5,
        margin:15,
        padding:0,
        paddingHorizontal:0,
        paddingBottom:0,
        flexDirection:'row'
    },
    GeneratorPart:{
       padding:15
    },
    imagePart:{
        
        height:'100%',
        borderRadius:8,
        flex:1,
        // backgroundColor:'#fac259'
    },
    TextPart:{
        textAlign:'justify',
        fontWeight:'bold',
        fontFamily:'Lato-Bold',
        paddingTop:8,
        fontSize:13.5,
        color:'#ababab'
    },
    NotificationPart:{
        width:'50%',
        padding:15,
       
        flexDirection:'column'
    }
})