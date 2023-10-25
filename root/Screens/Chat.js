import React, { useState } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import SvgImport from "../Components/SvgImport";
import ChevronLeft from "../../assets/Svgs/ChevronLeft";
import { Image } from "react-native";
import ChatCircle from "../../assets/Svgs/ChatCircle";
import Phone from "../../assets/Svgs/Phone";
import Pin from "../../assets/Svgs/Pin";
import Smily from "../../assets/Svgs/Smily";
import Record from "../../assets/Svgs/Record";
import { TextInput } from "react-native";
import ChatTick from "../../assets/Svgs/ChatTick";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const chats=[
    {
        _id:'0',
        user:'user1',
        msg:'Lorem ipsum is simply dummy text ',
        time: '1:10 PM',
        voice:false,
    },
    {
        _id:'1',
        user:'user2',
        msg:'Lorem ipsum is simply dummy text ',
        time: '1:10 PM',
        voice:false,
    },{
        _id:'2',
        user:'user1',
        msg:'Lorem ipsum is simply dummy text ',
        time: '1:10 PM',
        voice:false,
    },
    {
        _id:'3',
        user:'user2',
        msg:'Lorem ipsum is simply dummy text ',
        time: '1:10 PM',
        voice:false,
    },{
        _id:'4',
        user:'user1',
        msg:'Lorem ipsum is simply dummy text ',
        time: '1:10 PM',
        voice:false,
    },
    {
        _id:'5',
        user:'user2',
        msg:'Lorem ipsum is simply dummy text ',
        time: '1:10 PM',
        voice:false,
    },
    {
        _id:'6',
        user:'user2',
        msg:'Lorem ipsum is simply dummy text ',
        time: '1:10 PM',
        voice:false,
    },{
        _id:'7',
        user:'user1',
        msg:'Lorem ipsum is simply dummy text ',
        time: '1:10 PM',
        voice:false,
    },
    {
        _id:'8',
        user:'user2',
        msg:'Lorem ipsum is simply dummy text ',
        time: '1:10 PM',
        voice:false,
    },
    {
        _id:'9',
        user:'user1',
        msg:'',
        time: '1:10 PM',
        image:require('../../assets/SliderImage.png'),
        img:true,
        voice:true,
    },
]

export default function Chat({navigation}){


    const [playText, setPlayText] = useState("pause");

    const playPause=()=>{
        if(playText==="play"){
            setPlayText("pause")
        }else{
            setPlayText("play")
        }
    }

    return(
        <View style={{height:'100%', alignItems:'center', flexDirection:'column'}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', height:40, marginTop:40}}>
            <Pressable onPress={()=>{navigation.goBack()}}>
            <SvgImport svg={ChevronLeft} style={{marginLeft:5}}/>
            </Pressable>
            <View style={{height:40, width:40, borderRadius:30, alignItems:'center', justifyContent:'center', marginLeft:10}}><Image source={require('../../assets/Kyle.png')} style={{height:40, width:40, marginBottom:1}}/></View>
            <View style={{flexDirection:'column', padding:10}}>
                <Text style={{fontSize:18, fontWeight:600, width:150, lineHeight:21}}>Alexander</Text>
                <Text style={{fontSize:12, fontWeight:500, color:'#F9AC16'}}>Online</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', width:70, marginRight:20}}>
            <SvgImport svg={ChatCircle}/>
            <SvgImport svg={Phone}/>
            </View>
            </View>
            <FlatList
            data={chats}
            keyExtractor={(item)=> item._id}
            renderItem={({item})=>{
            return(
            <View style={{ flexDirection:'column', marginTop:10, paddingBottom:10}}>
                {item.user === 'user1'?<View style={{flexDirection:'row', marginRight:60}}>
                <Image source={require('../../assets/Max.png')} style={{height:30, width:30, borderRadius:30, marginRight:20, marginTop:10}}/>
                <View style={{flexDirection:'column', width:233, alignSelf:'flex-start', borderRadius:8, backgroundColor:'#EFEFF0', padding:5}}>
                <Text style={{fontSize:15, fontWeight:400, width:205, textAlign:'left'}}>{chats[0].msg}</Text>
                <Text style={{fontSize:10, fontWeight:400, color:'#232323', alignSelf:'flex-end'}}>{chats[0].time}</Text>
                {item.img?<Image source={item.image} style={{width:201, height:134, borderRadius:8}}/>:''}
                {item.voice?<View style={{width:268, height:49, flexDirection:'row', alignItems:'center', justifyContent:'center', backgroundColor:'#EFEFF0', borderRadius:8}}>
                 <Pressable onPress={playPause}>
                <MaterialCommunityIcons name={playText} size={22} color="white" style={{backgroundColor:'#F9AC16', borderRadius:30}} />
                </Pressable>
                <View style={{flexDirection:'row', alignItems:'center', padding:10}}>
                <View style={{width:10, backgroundColor:'#F9AC16', height:10, borderRadius:10}}/>
                <View style={{width:168, backgroundColor:'#F9AC16', height:3, opacity:0.5}}/>
                </View>
                <View style={{flexDirection:'column', marginTop:12}}>
                <Text style={{fontSize:10, fontWeight:400}}>0:52</Text>
                <View >
                <Text style={{fontSize:10, fontWeight:400, color:'#23232380', width:40, textAlign:'left'}}>{item.time}</Text>
                </View>
                </View>
                </View>:''}
            </View>
            </View>:''}
            {item.user === 'user2'?<View style={{flexDirection:'column', width:233, alignSelf:'flex-start', borderRadius:8, backgroundColor:item.msg !==''?'#F9AC16':'#EFEFF0', marginLeft:100, padding:5}}>
                {item.msg!==''?<Text style={{fontSize:15, fontWeight:400, width:205, textAlign:'left', color:'white'}}>{chats[0].msg}</Text>:''}
                <View style={{flexDirection:'row', justifyContent:'flex-end', alignItems:'center'}}>
                <Text style={{fontSize:10, fontWeight:400, color:'#232323', color:'white', marginRight:10}}>{chats[0].time}</Text>
                <SvgImport svg={ChatTick}/>
                </View>
                {item.img?<Image source={item.image} style={{width:201, height:134, borderRadius:8}}/>:''}
                {item.voice?<View style={{width:268, height:49, flexDirection:'row', alignItems:'center', justifyContent:'center', backgroundColor:'#EFEFF0', borderRadius:8, right:30, top:10}}>
                 <Pressable onPress={playPause}>
                <MaterialCommunityIcons name={playText} size={22} color="white" style={{backgroundColor:'#F9AC16', borderRadius:30}} />
                </Pressable>
                <View style={{flexDirection:'row', alignItems:'center', padding:10}}>
                <View style={{width:10, backgroundColor:'#F9AC16', height:10, borderRadius:10}}/>
                <View style={{width:168, backgroundColor:'#F9AC16', height:3, opacity:0.5}}/>
                </View>
                <View style={{flexDirection:'column', marginTop:12}}>
                <Text style={{fontSize:10, fontWeight:400}}>0:52</Text>
                <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:10, fontWeight:400, color:'#23232380', width:40, textAlign:'left'}}>{item.time}</Text>
                <SvgImport svg={ChatTick}/>
                </View>
                </View>
                </View>:''}
            </View>:''}
            </View>
            )}}
            />
            <View style={{height:40, width:345, flexDirection:'row', alignItems:'center'}}>
            <SvgImport svg={Pin} style={{marginRight:8}}/>
            <TextInput
            placeholder="Message"
            style={{ width:230}}/> 
            <SvgImport svg={Smily}/>
            <SvgImport svg={Record} style={{marginLeft:25}}/>
            </View>
        <View style={{width:120, height:5, backgroundColor:'black', top:10, borderRadius:15}}/>
        </View>
    )
}