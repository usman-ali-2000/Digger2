import React from "react";
import { Text, TextInput, View } from "react-native";
import ExtraRequirement from "../../assets/Svgs/ExtraRequirement";
import SvgImport from "../Components/SvgImport";

export default function Requirements(){


    return(
        <View style={{flexDirection:'column', padding:10}}>
        <View style={{flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <Text style={{fontSize:20, fontWeight:600, top:10}}>
                Enter requirement/image
            </Text>
            </View>
            <Text style={{fontSize:16, fontWeight:500, top:20}}>Enter Requirement</Text>
            <View style={{borderWidth:1.5, top:30, borderColor:'rgba(142, 142, 142, 0.2)'}}>
            <TextInput
            placeholder="Enter your text here"
            textAlignVertical="top"
            multiline={true}
            style={{height:146, width:345, padding:5, textAlign:'justify'}}
            />
            <Text style={{textAlign:'right', color:'grey', padding:8, fontSize:12, fontWeight:400}}>143/250</Text>
            </View>
            <View style={{flexDirection:'column', alignItems:'center',width:345, height:173, borderWidth:1.5, top:40, borderStyle:'dashed', borderColor:'#F8AB16', right:2}}>
                <SvgImport svg={ExtraRequirement} style={{marginTop:20}}/>
                <Text style={{fontSize:17, fontWeight:600, marginTop:20}}>Insert image or video from gallery</Text>
                <Text style={{fontSize:14, fontWeight:400, marginTop:10}}>(Allowed only JPG, PNG or MP4)</Text>
            </View>
        </View>
    )
}