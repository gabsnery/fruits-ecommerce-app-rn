import React from 'react'
import { Text,Image ,StyleSheet, Dimensions,View} from 'react-native'
import carrot from '../../../assets/cenoura.png'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
export default function Home() {
      return <>
      <Image source={carrot} style={style.header}/>
      <Text style={style.title}>Cart's details</Text>
      <View>
      <Text>Jenny Jack Farm</Text>
      <Text>Best place to buy your organic products</Text>
      <Text>$40</Text>
      </View>
      </>
}

const style=StyleSheet.create({
      header:{
            width:'100%',
            height:501/612*width
      },
      title:{
            position:'absolute',
            width:width,
            color:'white',
            fontSize:16,
            fontWeight:'bold',
            padding:16,
            lineHeight:26,
            textAlign:'center'
      }
})