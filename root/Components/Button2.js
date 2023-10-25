import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, Text, View } from "react-native";

export default function Button2(props){

    const navigation = useNavigation();

    return(
        <View style={{justifyContent:'center', alignItems:'center', height:51, width:345, backgroundColor:'white', borderRadius:12, elevation:6}}>
            <Text style={{fontSize:18, fontWeight:600, color:'white', textAlign:'center', backgroundColor:'#F8AB16', height:51, width:345, borderRadius:12, padding:10}}>{props.text}</Text>
        </View>
    )
}