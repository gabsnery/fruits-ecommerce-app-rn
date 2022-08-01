import React from 'react'
import { Text,Image ,StyleSheet, Dimensions,View} from 'react-native'
import carrot from '../../../assets/cenoura.png'
import logo from '../../../assets/logo.png'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
export default function Home() {
      return <>
      <Image source={carrot} style={style.header}/>
      <Text style={style.title}>Cart's details</Text>
      <View style={style.farm}>
      <Text style={style.title2}>Items</Text>
      <View style={style.farmHeader}>
      <Image source={logo} style={style.farmLogo}/>
      <Text style={style.farmName}>Jenny Jack Farm</Text>
      </View>
      <Text style={style.farmDescription}>Best place to buy your organic products</Text>
      <Text style={style.price}>$40</Text>
      </View>
      </>
}

const style=StyleSheet.create({
      header:{
            width:'100%',
            height:501/612*width
      },
      title:{
            width:'100%',
            position:'absolute',
            textAlign:'center',
            color:'black',
            fontSize:16,
            lineHeight:26,
            fontWeight:'bold',
            padding:16,
      },
      farm:{
            paddingVertical:8,
            paddingHorizontal:16
      },
      title2:{
            color: "#464646",
            fontSize: 26,
            lineHeight: 42,
      },
      farmHeader:{
            flexDirection:"row",
            paddingVertical:12
      },
      farmLogo:{
            width:32,
            height:32
      },
      farmName:{
            fontSize:16,
            lineHeight:26,
            marginLeft:12,
            lineHeight:42
      },
      farmDescription:{
            color:"#A3A3A3",
            fontSize:16,
            lineHeight:26
      },
      price:{
            color:"#2A9",
            fontWeight:'bold',
            fontSize:26,
            lineHeight:42,
            marginTop:8
      }
})