import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';
import {BigText, RegularText} from '../../components/MyText';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import {courseSelector} from '../../redux/feature/course/courseSlice';

const {width} = Dimensions.get('window');
const DescriptionComp = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const course = useSelector(courseSelector);
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          width,
          zIndex: 1,
          backgroundColor: 'white',
          padding: 10,
        }}>
        <BigText bold style={{marginLeft: 5, fontSize: 20}}>
          About Course
        </BigText>
        <Text style={{fontSize: 13, margin: 5}}>{course?.about}</Text>
        {/* <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 5}}>
          <FontAwesome
            style={{}}
            onPress={() => navigation.goBack()}
            name="circle"
            size={10}
            color={'#FE9539'}
          />
          <View style={{marginLeft: 10, marginTop: -5}}>
            <Text style={{fontSize: 13}}>
              Distracted by the readable content of a
            </Text>
            <Text style={{fontSize: 13}}>page when looking at its layout.</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            marginBottom: 15,
            marginLeft: 5,
          }}>
          <FontAwesome
            style={{}}
            onPress={() => navigation.goBack()}
            name="circle"
            size={10}
            color={'#FE9539'}
          />
          <View style={{marginLeft: 10, marginTop: -5}}>
            <Text style={{fontSize: 13}}>
              Distracted by the readable content of a
            </Text>
            <Text style={{fontSize: 13}}>page when looking at its layout.</Text>
          </View>
        </View> */}
        <RegularText bold style={{marginLeft: 5}}>
          Service & Offers
        </RegularText>
        <Text style={{fontSize: 13, marginTop: 5, marginLeft: 5}}>
          Contrary to popular beliefInosi mplyran dom and text. It has do roots
          in a piece of classical Latin literature 45 BC, making it over 2000
          years old.
        </Text>
        <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 5}}>
          <FontAwesome
            style={{}}
            onPress={() => navigation.goBack()}
            name="circle"
            size={10}
            color={'#FE9539'}
          />
          <View style={{marginLeft: 10, marginTop: -5}}>
            <Text style={{fontSize: 13}}>
              Distracted by the readable content of a
            </Text>
            <Text style={{fontSize: 13}}>page when looking at its layout.</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            marginBottom: 15,
            marginLeft: 5,
          }}>
          <FontAwesome
            style={{}}
            onPress={() => navigation.goBack()}
            name="circle"
            size={10}
            color={'#FE9539'}
          />
          <View style={{marginLeft: 10, marginTop: -5}}>
            <Text style={{fontSize: 13}}>
              Distracted by the readable content of a
            </Text>
            <Text style={{fontSize: 13}}>page when looking at its layout.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DescriptionComp;
