import {
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import {RegularText} from '../../components/MyText';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DashboardStackParams, RootStackParams} from '../../navigation/types';
import PrimaryBtn from '../../components/PrimaryBtn';
import {COLORS} from '../../constants/theme';
import {Linking} from 'react-native';
import {Platform} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {FONTS} from '../../../assets/fonts';

const ContactUsScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParams>>();
  const [loading, setLoading] = React.useState(false);

  const handlePhonePress = () => {
    const no = '918090549054';
    try {
      Linking.openURL(`whatsapp://send?text=&phone=${no}`);
    } catch (err) {
      console.log(err);
    }
  };
  const handleAddressPress = () => {
    const lat = '30.736845213002077';
    const lng = '76.68081189441375';
    const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
    const latLng = `${lat},${lng}`;
    const label = 'Meander Software';
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });
    Linking.openURL(url!);
  };
  const handleMailPress = () => {
    const data = 'hi@meander.software';
    Linking.openURL(`mailto:${data}`);
  };

  return (
    <MainLayout title="Contact Us" onBack={navigation.goBack}>
      <ScrollView
      // scrollEnabled={false}
      >
        <Image
          source={require('../../../assets/images/contact-us.png')}
          style={{
            width: 280,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <Feather name="phone" size={20} color={'#6D45F3'} />
          <RegularText bold>+91-8052346789</RegularText>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginTop: 10,
          }}>
          <MaterialCommunityIcons name="email" size={20} color={'#6D45F3'} />
          <RegularText bold>hi@meander-software</RegularText>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginTop: 10,
          }}>
          <Entypo name="location-pin" size={20} color={'#6D45F3'} />
          <RegularText bold>
            Tdi Busineess centre ,18-11th Floor,Sector118,Mohali,Punjab 160055
          </RegularText>
        </View>
        <View style={styles.input1}>
          <TextInput
            style={styles.text}
            placeholder="Andrew Ainsley"
            placeholderTextColor={'grey'}
          />
        </View>
        <View style={styles.input1}>
          <TextInput
            style={styles.text}
            placeholder="andrew@gmail.com"
            placeholderTextColor={'grey'}
          />
        </View>
        <View style={styles.input1}>
          <TextInput
            style={styles.text}
            placeholder="message"
            placeholderTextColor={'grey'}
          />
        </View>
        <TouchableOpacity
          style={{
            padding: 20,
            marginTop: 40,

            borderRadius: 10,
            backgroundColor: '#FF7438',
            alignItems: 'center',
            marginHorizontal: 10,
          }}>
          <Text
            style={{
              color: 'white',

              textAlign: 'center',
              fontSize: 13,
              fontFamily: FONTS.Rajdhani.Regular,
            }}>
            Submit Message
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </MainLayout>
  );
};

export default ContactUsScreen;
const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 17,
    backgroundColor: '#FAFAFA',
    fontFamily: FONTS.Rajdhani.Regular,
  },
  input1: {
    borderRadius: 20,
    backgroundColor: '#FAFAFA',
    height: 57,
    flexDirection: 'row',
    marginTop: 15,
    paddingLeft: 20,

    alignItems: 'center',
  },
});
