import React from "react";
import { View, Text } from "react-native";
import EditProfileItem from "../Components/EditProfileItem";
import SvgImport from "../Components/SvgImport";
import ChevronLeft from "../../assets/Svgs/ChevronLeft";
import { ScrollView } from "react-native";
import House2 from "../../assets/Svgs/House";
import Cart from "../../assets/Svgs/Cart";
import Handbag from "../../assets/Svgs/Handbag";
import Chat_Dots from "../../assets/Svgs/Chat_Dots";
import User from "../../assets/Svgs/User2";
import BottomNav from "../Components/BottomNav";
import { Pressable } from "react-native";

export default function EditProfile({navigation}){

return(
<View style={{flexDirection:'column', alignItems:'center', height:'100%'}}>
            <View style={{flexDirection:'row', alignItems:'center', marginTop:40, justifyContent:'space-between', width:345, padding:5}}>
                <Pressable onPress={()=>{navigation.goBack()}}>
                <SvgImport svg={ChevronLeft}/>
                </Pressable>
                <Text style={{fontSize:20, fontWeight:600}}>My Profile</Text>
                <Text style={{fontSize:16, fontWeight:500}}>Save</Text>
                </View>
                <ScrollView>
        <EditProfileItem/>
        </ScrollView>
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