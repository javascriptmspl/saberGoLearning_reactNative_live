import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import {COLORS} from '../../constants/theme';
import {RegularText} from '../../components/MyText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PrimaryBtn from '../../components/PrimaryBtn';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DashboardStackParams} from '../../navigation/types';
import {ScrollView} from 'react-native-gesture-handler';
import {FONTS} from '../../../assets/fonts';
const OnlinePaymentScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParams>>();
  const [like, setLike] = React.useState(false);
  const [isList, setList] = React.useState(false);
  const [isCard, setCard] = React.useState(false);
  const [isLike, setIsLike] = React.useState(false);
  return (
    <MainLayout title="Payment" onBack={navigation.goBack}>
      <ScrollView>
        <View
          style={{
            backgroundColor: 'white',

            height: 120,
            margin: 10,
            flexDirection: 'row',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
            borderRadius: 15,
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 90,
              height: 100,
              backgroundColor: COLORS.white,
              borderTopLeftRadius: 5,
              borderBottomRightRadius: 5,
              marginTop: 10,
              marginLeft: 10,
            }}>
            <Image
              source={require('../../../assets/images/computer.png')}
              style={{
                width: 90,
                height: 90,
                borderTopLeftRadius: 5,
                borderBottomRightRadius: 5,
                resizeMode: 'cover',
                borderRadius: 10,
              }}
            />
          </View>
          <View style={{marginLeft: 10, marginTop: -10}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'space-around',
                gap: 130,
              }}>
              <Text
                style={{
                  color: '#FF7438',
                  fontSize: 14,
                  fontFamily: FONTS.Rajdhani.Bold,
                }}>
                Web Full Stack
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                  fontFamily: FONTS.Rajdhani.Bold,
                }}>
                $6K
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                //@ts-ignore
                navigation.navigate('MeanStack');
              }}>
              <RegularText
                style={{
                  marginBottom: 2,
                  color: 'black',
                  fontFamily: FONTS.Rajdhani.Bold,
                }}>
                Mean Stack-Quick
              </RegularText>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
              <View
                style={{
                  flexDirection: 'row',
                  // marginLeft: 5,
                  alignItems: 'center',
                }}>
                <Entypo name="location-pin" size={14} color={COLORS.gray} />
                <RegularText
                  style={{
                    marginBottom: 2,
                    color: 'grey',
                    fontFamily: FONTS.Rajdhani.Regular,
                  }}>
                  English
                </RegularText>
              </View>
              <View
                style={{
                  flexDirection: 'row',

                  gap: 5,
                }}>
                <AntDesign name="user" size={14} color={COLORS.gray} />
                <RegularText
                  style={{
                    marginBottom: 2,
                    color: 'grey',
                    fontFamily: FONTS.Rajdhani.Regular,
                  }}>
                  Online
                </RegularText>
              </View>
            </View>
          </View>
        </View>
        <RegularText
          style={{
            marginTop: 10,
            marginLeft: 10,
            fontFamily: FONTS.Rajdhani.Bold,
          }}>
          Select the Payment Methods you Want to Use
        </RegularText>
        <View
          //@ts-ignore
          // onPress={() => navigation.navigate('BankDetail')}
          style={styles.buttonContainer}>
          <Image
            source={require('../../../assets/images/PayPal.png')}
            style={styles.logo}
          />
          <RegularText
            style={{marginLeft: 10, flex: 1, fontFamily: FONTS.Rajdhani.Bold}}>
            Pay Pal
          </RegularText>
          <MaterialIcons
            onPress={() => {
              setList(!isList);
            }}
            name={isList ? 'radio-button-off' : 'radio-button-on'}
            size={20}
            color={isList ? '#6D45F3' : '#6D45F3'}
          />
        </View>
        <View
          //@ts-ignore
          // onPress={() => navigation.navigate('BankDetail')}
          style={styles.buttonContainer}>
          <Image
            source={require('../../../assets/images/GooglePay.png')}
            style={styles.logo}
          />
          <RegularText bold style={{marginLeft: 10, flex: 1}}>
            Google Pay
          </RegularText>
          <MaterialIcons
            onPress={() => {
              setIsLike(!isLike);
            }}
            name={isLike ? 'radio-button-off' : 'radio-button-on'}
            size={20}
            color={isLike ? '#6D45F3' : '#6D45F3'}
          />
        </View>
        <View
          //@ts-ignore
          // onPress={() => navigation.navigate('BankDetail')}
          style={styles.buttonContainer}>
          <Image
            source={require('../../../assets/images/apple.png')}
            style={styles.logo}
          />
          <RegularText bold style={{marginLeft: 10, flex: 1}}>
            Apple Pay
          </RegularText>
          <MaterialIcons
            onPress={() => {
              setLike(!like);
            }}
            name={like ? 'radio-button-off' : 'radio-button-on'}
            size={20}
            color={like ? '#6D45F3' : '#6D45F3'}
          />
        </View>

        <View
          //@ts-ignore
          // onPress={() => navigation.navigate('BankDetail')}
          style={styles.buttonContainer}>
          <Image
            source={require('../../../assets/images/Icon.png')}
            style={styles.logo}
          />
          <RegularText bold style={{marginLeft: 10, flex: 1}}>
            ************5280
          </RegularText>
          <MaterialIcons
            onPress={() => {
              setCard(!isCard);
            }}
            name={isCard ? 'radio-button-off' : 'radio-button-on'}
            size={20}
            color={isCard ? '#6D45F3' : '#6D45F3'}
          />
        </View>
        <View style={styles.buttonContainer1}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Card')}
            style={{flexDirection: 'row'}}>
            <Entypo name="plus" size={20} color="black" />
            <RegularText bold>Add new card</RegularText>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer1}>
          <TouchableOpacity
            onPress={() => navigation.navigate('BankDetail')}
            style={{flexDirection: 'row'}}>
            <Entypo name="plus" size={20} color="black" />
            <RegularText bold>Add Bank</RegularText>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
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
            Pay Now
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </MainLayout>
  );
};

export default OnlinePaymentScreen;
const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'grey',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 15,
    height: 60,

    marginTop: 20,
  },
  logo: {
    height: 27,
    width: 27,
    borderRadius: 10,
  },
  buttonContainer1: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'center',
    borderRadius: 15,
    height: 60,

    marginTop: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
