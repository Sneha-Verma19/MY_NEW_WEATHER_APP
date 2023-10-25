import { View, Text, ImageBackground, Image, TouchableOpacity, FlatList, TextInput } from 'react-native'
import {  useState } from 'react';

import { deviceHeight, deviceWidth } from './dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import Cards from './Cards';






export default function Home(props) {
  const [city, setCity] = useState('');



  const cities = [
    {
      name: 'New Delhi',
      image: require('../assets/Delhi.jpg')
    },
    {
      name: 'GOA',
      image: require('../assets/GOA.jpg')
    },
    {
      name: 'JAPAN',
      image: require('../assets/japan.jpg')
    },
    {
      name: 'MUMBAI',
      image: require('../assets/mumbaiimage.jpg')
    },
    {
      name: 'PARIS',
      image: require('../assets/Parisimage.jpg')
    },

    {
      name: 'SINGAPOR',
      image: require('../assets/singapor.webp')
    },
    {
      name: 'TAMIL',
      image: require('../assets/TAMIL.jpg')
    },
    {
      name: 'PUNJAB',
      image: require('../assets/PUNJAB.jpg')
    }


  ]



  return (
    <View>
      <ImageBackground source={require('../assets/image1.jpg')}
        style={{ height: deviceHeight, width: deviceWidth }} />


      <View style={{ position: 'absolute', }}>
        <View style={{
          flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
          width: deviceWidth - 20
        }}>
          <Icon name='menu' size={60} color='white' />

          <Icon name='partly-sunny-outline' size={60} color='black' />

        </View>




        <View style={{ paddingHorizontal: 60, marginTop: 50 }}>

          <Text style={{ fontSize: 45, color: 'white' }}>
            Hello Sneha
          </Text>

          <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>
            Search City , State or Country

          </Text>
          <View style={{
            flexDirection: 'row',
            justifyContent: "space-evenly",
            alignItems: 'center',
            borderRadius: 30,
            borderWidth: 3,
            borderColor: 'white',
            marginTop: 10,
            paddingHorizontal: 10,
          }}>
            <TextInput
              value={city}
              onChangeText={(val) => setCity(val)}


              placeholder='Search city or Country'
              placeholderTextColor="white"
              style={{ paddingHorizontal: 10, color: 'white' }}
            />



            <TouchableOpacity onPress={() => props.navigation.navigate('Secondscreen', {name: city})}>


              <Icon name='location'
               size={25} color='white' />
            </TouchableOpacity>



          </View>




          <View>
            <Text style={{ fontSize: 29, color: 'white', paddingHorizontal: 5, marginTop: 120, marginBottom: 20 }}>

              Country  Location
            </Text>
            <FlatList
              horizontal data={cities}


              renderItem={(
                { item }) => (
                <Cards name={item.name} image={item.image} navigation={props.navigation} />


              )} />

          </View>
        </View>
      </View>
    </View>

  )
}




