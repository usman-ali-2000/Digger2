import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import SvgImport from "../Components/SvgImport";
import ChevronLeft from "../../assets/Svgs/ChevronLeft";
import { Image } from "react-native";
import Trash from "../../assets/Svgs/Trash";
import { FlatList } from "react-native";
import House2 from "../../assets/Svgs/House";
import Cart from "../../assets/Svgs/Cart";
import Handbag from "../../assets/Svgs/Handbag2";
import Chat_Dots from "../../assets/Svgs/Chat_Dots";
import User from "../../assets/Svgs/User";
import BottomNav from "../Components/BottomNav";

export default function Orders({navigation}){

    const [completed, setCompleted] = useState(false);

    const handleComplete=()=>{
            setCompleted(true)
    }

    const handleActive=()=>{        
       setCompleted(false)
    }
    const data = [
        {
            _id:'0',
            profile:require('../../assets/DiannePic.png'),
            userName:'Alex Bravo',
            image:require('../../assets/BullDozer.png'),
            name:'BullDozer',
            date:'04-05-2023',
            price:'425',
        },
        {
            _id:'1',
            profile:require('../../assets/Max.png'),
            userName:'Helen Wellim',
            image:require('../../assets/Excavator.png'),
            name:'Excalator',
            date:'04-05-2023',
            price:'500',
        },
    ]

    const Active=()=>{

        return(
            <FlatList
            data={data}
            keyExtractor={(item)=> item._id}
            renderItem={({item})=>{
            return(
            <View style={{height:135, width:345, flexDirection:'column', alignItems:'center'}}>
            <View style={{height:50, width:320, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <Image source={item.image} style={{width:45, height:30}}/>
                <View style={{flexDirection:'column', width:160, marginRight:1}}>
                <Text style={{fontSize:18, fontWeight:500}} >{item.name}</Text>
                <Text style={{fontSize:12, fontWeight:400, color:'#7A7A7A'}}>{item.date}</Text>
                </View>
                <Text style={{fontSize:18, fontWeight:600, color:'#F9AC16', lineHeight:22}}>₤{item.price}</Text>
                <SvgImport svg={Trash}/>
            </View>
            <View style={{flexDirection:'row', height:50, width:320, alignItems:'center', justifyContent:'space-between', padding:10}}>
                <View style={{flexDirection:'row', alignItems:'center', width:115, justifyContent:'space-between'}}>
                    <Image source={item.profile} style={{width:30, height:30, borderRadius:30}}/>
                    <Text style={{color:'#7A7A7A', textAlign:'left', width:120, fontSize:14, fontWeight:500, paddingLeft:10}}>{item.userName}</Text>
                </View>
                <Text style={{width:96, height:28, color:'white', backgroundColor:'#3F33D3', textAlign:'center', padding:4, fontSize:12, fontWeight:500, borderRadius:5}}>IN PROGRESS</Text>
            </View>
            </View>
            )}}/>
        )
    }

    
    const Complete =()=>{

        return(
            <FlatList
            data={data}
            keyExtractor={(item)=> item._id}
            renderItem={({item})=>{
            return(
            <View style={{height:135, width:345, flexDirection:'column', alignItems:'center'}}>
            <View style={{height:50, width:320, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <Image source={item.image} style={{width:45, height:30}}/>
                <View style={{flexDirection:'column', width:160, marginRight:1}}>
                <Text style={{fontSize:18, fontWeight:500}} >{item.name}</Text>
                <Text style={{fontSize:12, fontWeight:400, color:'#7A7A7A'}}>{item.date}</Text>
                </View>
                <Text style={{fontSize:18, fontWeight:600, color:'#F9AC16', lineHeight:22}}>₤{item.price}</Text>
                <SvgImport svg={Trash}/>
            </View>
            <View style={{flexDirection:'row', height:50, width:320, alignItems:'center', justifyContent:'space-between', padding:10}}>
                <View style={{flexDirection:'row', alignItems:'center', width:115, justifyContent:'space-between'}}>
                    <Image source={item.profile} style={{width:30, height:30, borderRadius:30}}/>
                    <Text style={{color:'#7A7A7A', textAlign:'left', width:120, fontSize:14, fontWeight:500, paddingLeft:10}}>{item.userName}</Text>
                </View>
                <Text style={{width:96, height:28, color:'white', backgroundColor:'#3F33D3', textAlign:'center', padding:4, fontSize:12, fontWeight:500, borderRadius:5}}>Completed</Text>
            </View>
            </View>
            )}}/>
        )
    }

    return(
        <View style={{flexDirection:'column', height:'100%'}}>
        <View style={{flexDirection:'row', alignItems:'flex-start', marginTop:40, width:219, marginRight:120, height:40, justifyContent:'center'}}>
            <Pressable onPress={()=>{navigation.goBack()}}>
            <SvgImport svg={ChevronLeft} style={{marginTop:5}} />
            </Pressable>
            <Text style={{marginLeft:100, fontSize:20, fontWeight:600}}>Orders</Text>
        </View>
        <View style={{padding:10}}>
            <View style={{flexDirection:'row', width:325, height:58, justifyContent:'space-between'}}>
            <Pressable onPress={handleActive}>
            <Text style={{width:155, height:38, backgroundColor:completed?'#EEEEEE':'#F8AB16', textAlign:'center', padding:6, fontSize:16, fontWeight:500, borderRadius:6, color:completed?'#7A7A7A':'black'}}>Active</Text>
            </Pressable>
            <Pressable onPress={handleComplete}>
            <Text style={{width:155, height:38, textAlign:'center', padding:6, fontSize:16, fontWeight:500, borderRadius:6, color:completed?'black':'#7A7A7A', backgroundColor:completed?'#F8AB16':'#EEEEEE'}}>Completed</Text>
            </Pressable>
            </View>
        </View>
        {completed?<Complete/>:<Active/>}
        <BottomNav 
         houseclr={'white'}
         house={House2}
         cartclr={'white'}
          cart={Cart}
          handbagclr={'#F9AC16'}
           handbag={Handbag}
           chatdotsclr={'white'} 
           chatdots={Chat_Dots}
           userclr={'white'} 
           user={User}
           />
        </View>
    )
}