import React from "react";
import { TextInput } from "react-native";
import { View, Text, Pressable } from "react-native";
import Button2 from "../Components/Button2";

export default function EditProfileItem(){

    return(
        <View style={{width:345, height:'100%', flexDirection:'column', alignItems:'flex-start', justifyContent:'flex-start', marginTop:20}}>
            <Text style={{fontSize:16, fontWeight:'500', paddingBottom:15, paddingTop:10}}>First Name</Text>
            <View style={{width:345, borderWidth:1.5, borderColor:'#8E8E8E33'}}>
            <TextInput
            placeholder="Enter First Name"
            style={{fontSize:15, fontWeight:'300', width:345, padding:10, borderRadius:6}}
            />
        </View>
        <Text style={{fontSize:16, fontWeight:'500', paddingBottom:15, paddingTop:10}}>Last Name</Text>
            <View style={{width:345, borderWidth:1.5, borderColor:'#8E8E8E33'}}>
            <TextInput
            placeholder="Enter Last Name"
            style={{fontSize:15, fontWeight:'300', width:345, padding:10, borderRadius:6}}
            />
        </View>
        <Text style={{fontSize:16, fontWeight:'500', paddingBottom:15, paddingTop:10}}>User Name</Text>
            <View style={{width:345, borderWidth:1.5, borderColor:'#8E8E8E33'}}>
            <TextInput
            placeholder="Enter User Name"
            style={{fontSize:15, fontWeight:'300', width:345, padding:10, borderRadius:6}}
            />
        </View>
        <Text style={{fontSize:16, fontWeight:'500', paddingBottom:15, paddingTop:10}}>Email</Text>
            <View style={{width:345, borderWidth:1.5, borderColor:'#8E8E8E33'}}>
            <TextInput
            placeholder="Enter Email"
            style={{fontSize:15, fontWeight:'300', width:345, padding:10, borderRadius:6}}
            />
        </View>
        <Text style={{fontSize:16, fontWeight:'500', paddingBottom:15, paddingTop:10}}>Mobile Number</Text>
            <View style={{width:345, borderWidth:1.5, borderColor:'#8E8E8E33'}}>
            <TextInput
            placeholder="Enter Mobile Number"
            style={{fontSize:15, fontWeight:'300', width:345, padding:10, borderRadius:6}}
            />
        </View>
        <Text style={{fontSize:16, fontWeight:'500', paddingBottom:15, paddingTop:10}}>Date of birth</Text>
            <View style={{width:345, borderWidth:1.5, borderColor:'#8E8E8E33'}}>
            <TextInput
            placeholder="Select your date of birth"
            style={{fontSize:15, fontWeight:'300', width:345, padding:10, borderRadius:6}}
            />
        </View>
        <Pressable style={{marginTop:20, paddingBottom:20}}>
        <Button2 text={"Save Changes"}/>
        </Pressable>
        </View>
    )
}