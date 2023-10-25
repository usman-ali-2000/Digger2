import React from "react";
import { View, FlatList, Pressable } from "react-native";
import BottomNav from "../Components/BottomNav";
import House from "../../assets/Svgs/House";
import Cart2 from "../../assets/Svgs/Cart2";
import Handbag from "../../assets/Svgs/Handbag";
import Chat_Dots from "../../assets/Svgs/Chat_Dots";
import User from "../../assets/Svgs/User";
import Header2 from "../Components/Header2";
import Slider from "../../assets/Svgs/Slider";
import data from "../Components/Data";
import FlatItems2 from "../Components/FlatItems2";


export default function Shop({navigation}){

    return(
        <View style={{flexDirection:'column', height:'100%'}}>
            <View style={{height:'90%'}}>
            <Header2 image={false} text={'Shop'} image2={Slider}/>
            <FlatList
            data={data}
            numColumns={2}
            keyExtractor={(item)=> item._id}
            renderItem={({item})=>{
            return(
                <Pressable onPress={()=>{navigation.navigate('Details')}}>
            <View style={{padding:10}}> 
            <FlatItems2 image={item.image} text={item.text} star={Start} rate={item.rate} price={item.price}/>
            </View>
            </Pressable>
            );
            }}/>
            </View>
            <View>
                <BottomNav
         houseclr={'white'}
         house={House}
         cartclr={'#F9AC16'}
          cart={Cart2}
          handbagclr={'white'}
           handbag={Handbag}
           chatdotsclr={'white'} 
           chatdots={Chat_Dots}
           userclr={'white'} 
           user={User}
                />
            </View>
        </View>
    )
}