import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { deviceHeight, deviceWidth } from './dimensions';

export default function Cards({ name, image, navigation }) {
    return (
        <TouchableOpacity
            style={{
                marginHorizontal: 10
            }}

            onPress={() =>  navigation.navigate('Secondscreen', {name})}>
            <ImageBackground source={image} 
            style={{
                height: deviceHeight / 5,
                width: deviceHeight / 4 - 50
            }}
                imageStyle={{ borderRadius: 16 }} />
            <View style={{ position: "absolute", height: "100%", width: "100%" }}>

                <Text style={{ fontSize: 29, width: "100%", height: "100%", textAlign: "center", textAlignVertical: "center", color: "blue" }}>
                    

                    {name}</Text>
            </View>

        </TouchableOpacity>


    );

}


