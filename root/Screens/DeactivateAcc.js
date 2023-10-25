import React from "react";
import { View, Text } from "react-native";
import SvgImport from "../Components/SvgImport";
import ChevronLeft from "../../assets/Svgs/ChevronLeft";
import RemoveAccount from "../../assets/Svgs/RemoveAccount";
import Button2 from "../Components/Button2";
import { Pressable } from "react-native";
import House2 from "../../assets/Svgs/House";
import Cart from "../../assets/Svgs/Cart";
import Handbag from "../../assets/Svgs/Handbag";
import Chat_Dots from "../../assets/Svgs/Chat_Dots";
import User from "../../assets/Svgs/User2";
import BottomNav from "../Components/BottomNav";

export default function DeactivateAcc({navigation}){

    return(
        <View style={{flexDirection:'column', height:'100%', marginTop:40, padding:10}}>
            <Pressable onPress={()=>{navigation.goBack()}}>
            <SvgImport svg={ChevronLeft} style={{marginLeft:10}}/>
            </Pressable>
            <Text style={{fontSize:30, fontWeight:600, marginTop:10}}>Deactivate Account</Text>
            <Text style={{fontSize:15, fontWeight:400, width:345, lineHeight:21.75, color:'#7A7A7A'}}>Are you want to sure to deactivate your account because after once deactivate you can't backup your account</Text>
            <SvgImport svg={RemoveAccount}/>
            <Pressable style={{marginTop:50, marginBottom:20}}>
            <Button2 text={"Deactivate My Account"}/>
            </Pressable>
            <View style={{alignItems:'center'}}>
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
        </View>
    )
}