import React from "react";
import { View, Text } from "react-native";
import SvgImport from "../Components/SvgImport";
import ChevronLeft from "../../assets/Svgs/ChevronLeft";
import Check from "../../assets/Svgs/Check";
import Button2 from "../Components/Button2";
import { Pressable } from "react-native";

export default function Booked({navigation}){

    return(
        <View style={{flexDirection:'column', alignItems:'center', height:'100%', width:'100%'}}>
            <SvgImport svg={ChevronLeft} style={{marginTop:40, right:150}}/>
            <Text style={{width:345, fontSize:30, fontWeight:600, textAlign:'center', padding:5, marginTop:20}}>Your Digger is Successfully Booked!</Text>
            <SvgImport svg={Check} style={{marginTop:60}}/>
            <Pressable onPress={()=>{navigation.navigate('Home')}} style={{marginTop:60}}>
            <Button2 text={"Back to Home"}/>
            </Pressable>
        <View style={{width:120, height:5, backgroundColor:'black', borderRadius:15, bottom:10, marginTop:40 }}/>
             </View>
    )
}