import React from "react";
import { Text, StyleSheet, View, TextInput, ScrollView } from "react-native";
import Header2 from "../Components/Header2";
import { Feather } from "@expo/vector-icons";
import SvgImport from "../Components/SvgImport";
import upper from "../../assets/Svgs/upper";
import Lower from "../../assets/Svgs/Lower";
import FlatItems from "../Components/FlatItems";
import Start from "../../assets/Svgs/Start";
import { FlatList } from "react-native";
import FlatItems2 from "../Components/FlatItems2";
import BottomNav from "../Components/BottomNav";
import House2 from "../../assets/Svgs/House2";
import Cart from "../../assets/Svgs/Cart";
import Handbag from "../../assets/Svgs/Handbag";
import Chat_Dots from "../../assets/Svgs/Chat_Dots";
import User from "../../assets/Svgs/User";
import { Pressable } from "react-native";
import data from "../Components/Data";
import Option from "../../assets/Svgs/Option";


export default function Home({navigation}){


    return(
        <View style={styles.container}>
            <Header2 image={require('../../assets/Profile.png')} text={'Home'} image2={Option}/>
            <ScrollView style={{flex:1}}> 
            <View
            style={{
             padding:10,
            }}>
            <Text
            style={styles.text}>👋 Hello!</Text>
            <Text
            style={{
                width:'100%',
                fontWeight:'600',
                fontSize:24,
                width:256,
                height:80,
                lineHeight:36,
            }}>What would you like to book</Text>
            <View style={{
            flexDirection:'row',
            alignItems:'center',
            paddingTop:10,
            width:345,
            height:51
            }}>
                <View style={{ flexDirection:"row",
                         borderRadius:10, 
                         width:270,
                         height:51,
                         borderRadius:8,
                         elevation:8,
                         backgroundColor:'white',
                         padding:10
                         }}>
                    <Feather name="search" size={20} color={'#767F9D'} style={{marginTop:5}}/>
                    <TextInput 
                         placeholder="Find for a digger..."
                    style={{
                         width:250,
                         color:'#8E8E8E',
                         fontSize:14,
                         fontWeight:'400',
                         lineHeight:21,
                         marginLeft:5
                         }}/>
               </View>
               <View style={{ height:51, width:51, marginLeft:15, borderRadius:8, alignItems:'center', elevation:8, backgroundColor:'white', }}>
                <SvgImport svg={upper} style={{marginTop:16}}/>
                <SvgImport svg={Lower}/>
               </View>
            </View>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', width:350, alignItems:'center'}}>
                <Text style={{fontWeight:'600', fontSize: 22, lineHeight:33, width:173, height:33, marginLeft:15}}>Recommended</Text>
                <Pressable onPress={()=>{navigation.navigate('Shop')}}>
                <Text style={{fontWeight:'400', fontSize: 14, lineHeight:21}}>View All</Text>
                </Pressable>
            </View>
            <View style={{height:200}}>
            <FlatList
            style={{overflow:'scroll'}}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data}
            keyExtractor={(item)=> item._id}
            renderItem={({item})=>{
            return(
                <Pressable onPress={()=>{navigation.navigate('Details')}}>
            <View style={{padding:10}}> 
            <FlatItems image={item.image} text={item.text} star={Start} rate={item.rate} price={item.price}/>
            </View>
            </Pressable>
            );
            }}/>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', width:350, alignItems:'center'}}>
                <Text style={{fontWeight:'600', fontSize: 22, lineHeight:33, width:173, height:33, marginLeft:15}}>Most Popular</Text>
                <Pressable onPress={()=>{navigation.navigate('Shop')}}>
                <Text style={{fontWeight:'400', fontSize: 14, lineHeight:21}}>View All</Text>
                </Pressable>
            </View>
            <FlatList
            data={data}
            numColumns={2}
            keyExtractor={(item)=> item._id}
            renderItem={({item})=>{
            return(
            <View style={{padding:10}}> 
            <Pressable onPress={()=>{navigation.navigate('Details')}}>
            <FlatItems2 image={item.image} text={item.text} star={Start} rate={item.rate} price={item.price}/>
            </Pressable>
            </View>
            );
            }}/>
            </ScrollView>
         <BottomNav 
         houseclr={'#F9AC16'}
         house={House2}
         cartclr={'white'}
          cart={Cart}
          handbagclr={'white'}
           handbag={Handbag}
           chatdotsclr={'white'} 
           chatdots={Chat_Dots}
           userclr={'white'} 
           user={User}
           /> 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        height:'100%',
    },
    text:{
        width:208,
        fontWeight:'600',
        fontSize:28,
        height:42,
    }
})