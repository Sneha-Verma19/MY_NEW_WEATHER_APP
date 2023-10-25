import { View, Text, ImageBackground, Image } from 'react-native';
import {useState, useEffect} from 'react';

import { deviceHeight, deviceWidth } from './dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import { API_KEY } from './shivkey';



export default function Secondscreen(props) {
  const [data, setData] = useState();

  const { name } = props.route.params;

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`,)
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.log(err));


  }, []);
  const Data = ({ title, value }) => <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
        <Text style={{ color: 'white', fontSize: 22 }}> {title}</Text>
        <Text style={{ color: 'white', fontSize: 22 }}>
            {value}
        </Text>
    </View>

  return (
    <View>
      <ImageBackground source={require('../assets/image3.jpg')}

        style={{ height: deviceHeight, width: deviceWidth }} />


      <View style={{ position: 'absolute', }}>
        <View style={{
          flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
          width: deviceWidth - 20
        }}>
          <Icon name='ellipsis-vertical-sharp' size={39} color='black' />
          





          <Icon name='cloud' size={50} color='white' />


        </View>
    
      {
        data ? <View style={{

          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: deviceHeight - 100
        }}>
          <View>
            <Text style={{ color: 'white', fontSize: 40 }}>
              {name}
            </Text>
            <Text style={{ fontSize: 22, color: 'white', textAlign: 'center' }}>



              {data['weather'][0]['main']}
            </Text>
          </View>

          <Text style={{ color: 'white', fontSize: 40 }}>  {(data['main']['temp'] - 273).toFixed(2)} & deg; C
          </Text>

          <View>
            <Text style={{ color: 'white', fontSize: 22, marginBottom: 16 }}>
              Weather Details
              </Text>

            <View style={{ width: deviceWidth - 60,  }}>
              
              <Data value={data['wind']['speed']} title='wind' />
              <Data value={data['main']['pressure']} title='Pressure' />
              <Data value={`${data['main']['humidity']}%`} title='Humidity' />
              <Data value={data['visibility']} title='Visibility' />
              
            </View>
          </View>

        </View> : null
      }
    </View>


        </View >
        

    )

}




