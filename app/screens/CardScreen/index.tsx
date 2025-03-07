import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DashboardStackParams, RootStackParams} from '../../navigation/types';

import PrimaryBtn from '../../components/PrimaryBtn';
import {ScrollView} from 'react-native-gesture-handler';
import MainLayout from '../../components/Layout/MainLayout';
import {RegularText} from '../../components/MyText';
import {FONTS} from '../../../assets/fonts';

const Index = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParams>>();

  return (
    <MainLayout title="Card Details" onBack={navigation.goBack}>
      <ScrollView>
        <View>
          <Image
            source={require('../../../assets/images/Master.png')}
            style={styles.logo}
          />
          {/* {NAME} */}
          <RegularText
            bold
            style={{color: 'black', marginTop: 20, marginLeft: 10}}>
            Card Name
          </RegularText>
          <View style={styles.input1}>
            <TextInput
              style={styles.text}
              placeholder="Andrew Ainsley"
              placeholderTextColor={'grey'}
            />
          </View>
          <RegularText
            bold
            style={{color: 'black', marginTop: 20, marginLeft: 10}}>
            Card Number
          </RegularText>

          <View style={styles.input1}>
            <TextInput
              style={styles.text}
              placeholder="0537892778287572"
              placeholderTextColor={'grey'}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 100,
              marginTop: 20,
            }}>
            <RegularText bold style={{color: 'black', marginLeft: 10}}>
              Expiry Date
            </RegularText>

            <RegularText bold style={{color: 'black'}}>
              CVV
            </RegularText>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 100,
            }}>
            <View style={{backgroundColor: 'FAFAFA'}}>
              <TextInput
                style={styles.text}
                placeholder="05/09/2024"
                placeholderTextColor={'grey'}
              />
            </View>
            <View style={{backgroundColor: 'FAFAFA'}}>
              <TextInput
                style={styles.text}
                placeholder="145"
                placeholderTextColor={'grey'}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('OnlinePayment')}
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
                fontWeight: 'normal',
                textAlign: 'center',
                fontSize: 13,
              }}>
              Next
            </Text>
          </TouchableOpacity>
          <View style={{marginTop: 80}}></View>
        </View>
      </ScrollView>
    </MainLayout>
  );
};
const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 200,
    width: '100%',
    marginTop: 20,
  },

  text: {
    color: 'black',
    fontSize: 17,
    backgroundColor: '#FAFAFA',
    fontFamily: FONTS.Rajdhani.Regular,
  },
  input1: {
    borderRadius: 50,
    backgroundColor: '#FAFAFA',
    height: 57,
    flexDirection: 'row',
    marginTop: 15,
    paddingLeft: 20,

    alignItems: 'center',
  },

  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Index;
