import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import BottomNav from "../Components/BottomNav";
import House2 from "../../assets/Svgs/House";
import Cart from "../../assets/Svgs/Cart";
import Handbag from "../../assets/Svgs/Handbag";
import Chat_Dots from "../../assets/Svgs/Chat_Dots";
import User from "../../assets/Svgs/User2";
import ThreeDots from "../../assets/Svgs/ThreeDots";
import IconEdit from "../../assets/Svgs/IconEdit";
import Notebook from "../../assets/Svgs/Notebook";
import Shield from "../../assets/Svgs/Shield";
import File from "../../assets/Svgs/File";
import { ImageBackground } from "react-native";
import SvgImport from "../Components/SvgImport";
import ProfileItem from "../Components/ProfileItem";
import UserCircle from "../../assets/Svgs/UserCircle";


export default function Profile({navigation}){

    return(
        <View style={{flexDirection:'column', height:'100%', alignItems:'center'}}>
            <View style={{flexDirection:'row', alignItems:'center', marginTop:40, justifyContent:'space-between', width:210, marginLeft:130}}>
                <Text style={{fontSize:20, fontWeight:600}}>My Profile</Text>
                <SvgImport svg={ThreeDots}/>
                </View>
            <ScrollView>
            <View style={{height:'90%', flexDirection:'column', alignItems:'center'}}>
            <ImageBackground source={require('../../assets/img.png')} style={{borderRadius:70, height:120, width:120, marginTop:40}}>
             <SvgImport svg={IconEdit} style={{marginLeft:75,  marginTop:75}}/>
            </ImageBackground>
            <Text style={{fontSize:20, fontWeight:600, marginTop:15}}>Cora Smith</Text>
            <Text style={{fontSize:14, fontWeight:400, color:'#A7A7A7', marginBottom:40}}>corasmith@mail.com</Text>
            <Pressable onPress={()=>{navigation.navigate('EditProfile')}}>
            <ProfileItem image={UserCircle} text={"Edit Profile"}/>
            </Pressable>
            <ProfileItem image={Notebook} text={"Billing History"}/>
            <Pressable onPress={()=>{navigation.navigate('DeactivateAcc')}}>
            <ProfileItem image={Shield} text={"Activate or Deactivate"}/>
            </Pressable>
            <Pressable onPress={()=>{navigation.navigate('About')}}>
            <ProfileItem image={File} text={"About"}/>
            </Pressable>
            <ProfileItem image={File} text={"FAQ"}/>
            <ProfileItem image={File} text={"Privacy"}/>
            </View>
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