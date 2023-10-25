import React from "react";
import { View, Text } from "react-native";
import BottomNav from "../Components/BottomNav";
import House from "../../assets/Svgs/House";
import Cart from "../../assets/Svgs/Cart";
import Handbag from "../../assets/Svgs/Handbag";
import Chat_Dots from "../../assets/Svgs/Chat_Dots2";
import User from "../../assets/Svgs/User";
import ChatItems from "../Components/ChatItems";

export default function ChatList(){

    return(
        <View style={{height:'100%'}}>
            <View style={{flexDirection:'column', alignItems:'center', marginTop:33}}>
            <Text style={{fontSize:20, fontWeight:600, padding:10}}>Messages</Text>
            </View>
            <ChatItems/>
            <BottomNav
         houseclr={'white'}
         house={House}
         cartclr={'white'}
          cart={Cart}
          handbagclr={'white'}
           handbag={Handbag}
           chatdotsclr={'#F9AC16'} 
           chatdots={Chat_Dots}
           userclr={'white'} 
           user={User}
           /> 
        </View>
    )
}