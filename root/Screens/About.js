import React from "react";
import { Text, Pressable } from "react-native";
import { View } from "react-native";
import ChevronLeft from "../../assets/Svgs/ChevronLeft";
import SvgImport from "../Components/SvgImport";
import House2 from "../../assets/Svgs/House";
import Cart from "../../assets/Svgs/Cart";
import Handbag from "../../assets/Svgs/Handbag";
import Chat_Dots from "../../assets/Svgs/Chat_Dots";
import User from "../../assets/Svgs/User2";
import BottomNav from "../Components/BottomNav";

export default function About({navigation}){

    return(
        <View style={{flexDirection:'column', height:'100%'}}>
        <View style={{flexDirection:'row', alignItems:'flex-start', marginTop:40, width:219, marginRight:120, height:40, justifyContent:'center'}}>
            <Pressable onPress={()=>{navigation.goBack()}}>
            <SvgImport svg={ChevronLeft} style={{marginTop:5}} />
            </Pressable>
            <Text style={{marginLeft:100, fontSize:20, fontWeight:600}}>About</Text>
        </View>
        <View style={{padding:10, marginTop:20, height:'77%'}}>
        <Text style={{fontSize:14, fontWeight:600, lineHeight:20}}>These Terms and Conditions May Change</Text>
        <Text style={{fontSize:12, fontWeight:400, lineHeight:20, color:'#111111'}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</Text>
        <Text style={{fontSize:14, fontWeight:600, lineHeight:20}}>Terms and Conditions</Text>
        <Text style={{fontSize:12, fontWeight:400, lineHeight:20, color:'#111111'}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</Text>
        <Text style={{fontSize:12, fontWeight:400, lineHeight:20, color:'#111111'}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</Text>
        </View>
        <BottomNav
         houseclr={'white'}
         house={House2}
         cartclr={'white'}
          cart={Cart}
          handbagclr={'white'}
           handbag={Handbag}
           chatdotsclr={'white'} 
           chatdots={Chat_Dots}
           userclr={'#F9AC16'} 
           user={User}
           />
        </View>
    )
}