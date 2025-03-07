import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DashboardStackParams, RootStackParams} from '../../navigation/types';

import PrimaryBtn from '../../components/PrimaryBtn';
import {RegularText} from '../../components/MyText';
import MainLayout from '../../components/Layout/MainLayout';
import {FONTS} from '../../../assets/fonts';
const BankDetail = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParams>>();
  return (
    <MainLayout title="Bank Details" onBack={navigation.goBack}>
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <RegularText style={{marginTop: 40}}>Bank Holder Name</RegularText>
          <View style={styles.input}>
            <TextInput
              style={styles.text}
              placeholder=" Name"
              placeholderTextColor={'grey'}
            />
          </View>
          <RegularText style={{marginTop: 30}}>Bank Name</RegularText>
          <View style={styles.input}>
            <TextInput
              style={styles.text}
              placeholder="CBE Name"
              placeholderTextColor={'grey'}
            />
          </View>
          <RegularText style={{marginTop: 30}}>Account Number</RegularText>
          <View style={styles.input}>
            <TextInput
              style={styles.text}
              placeholder="60000 6000 5555 6666"
              placeholderTextColor={'grey'}
            />
          </View>
          <RegularText style={{marginTop: 30}}>IfSC Number</RegularText>
          <View style={styles.input}>
            <TextInput
              style={styles.text}
              placeholder="CBE33GEO"
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
      </ScrollView>
    </MainLayout>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  input: {
    borderRadius: 10,

    height: 57,
    flexDirection: 'row',
    marginTop: 10,
    // paddingLeft: 20,
    backgroundColor: '#FAFAFA',
  },
  text: {
    color: 'white',
    fontSize: 17,
    fontFamily: FONTS.Rajdhani.Regular,
  },
});
export default BankDetail;
