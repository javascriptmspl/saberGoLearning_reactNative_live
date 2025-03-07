import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../constants/theme';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DashboardStackParams, RootStackParams} from '../../navigation/types';
import MainLayout from '../../components/Layout/MainLayout';
import {FONTS} from '../../../assets/fonts';

const NotificationScreen = () => {
  const [view, setView] = useState(1);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <MainLayout title="Notifications" onBack={navigation.goBack}>
      <ScrollView
        style={{
          flex: 1,
        }}>
        <TouchableOpacity
          style={{
            height: 120,
            width: '95%',
            borderRadius: 5,
            borderWidth: 1,
            alignSelf: 'center',
            marginTop: 20,
            padding: 10,
            borderColor: 'rgba(0,0,0,0.1)',
            marginBottom: 5,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: 45,
                height: 45,
                borderRadius: 35,
                backgroundColor: '#FE9539',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                W
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginLeft: 10,
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  fontFamily: FONTS.Rajdhani.Bold,
                }}>
                Welcome to Meander
              </Text>
              {/* <Text
                style={{
                  fontSize: 11,
                  color: COLORS.gray,
                }}>
                20 min ago
              </Text> */}
            </View>
          </View>
          <Text
            style={{
              fontSize: 13,
              color: COLORS.gray,
              marginLeft: 44,
              marginTop: -10,
              fontFamily: FONTS.Rajdhani.Regular,
            }}>
            Enroll now and embark on a transformative journey to enhance your IT
            skills and career prospects.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 120,
            width: '95%',
            borderRadius: 5,
            borderWidth: 1,
            alignSelf: 'center',
            marginTop: 0,
            padding: 10,
            borderColor: 'rgba(0,0,0,0.1)',
            marginBottom: 5,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: 45,
                height: 45,
                borderRadius: 35,
                backgroundColor: COLORS.blue,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 25,

                  color: 'white',
                  fontFamily: FONTS.Rajdhani.Bold,
                }}>
                J
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginLeft: 10,
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  fontFamily: FONTS.Rajdhani.Bold,
                }}>
                Job placement assistance available!
              </Text>
              {/* <Text
                style={{
                  fontSize: 11,
                  color: COLORS.gray,
                }}>
                35 min ago
              </Text> */}
            </View>
          </View>
          <Text
            style={{
              fontSize: 13,
              color: COLORS.gray,
              marginLeft: 44,
              marginTop: -10,
              fontFamily: FONTS.Rajdhani.Regular,
            }}>
            Benefit from our extensive network of industry connections and let
            us help you find your dream job. for you.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 120,
            width: '95%',
            borderRadius: 5,
            borderWidth: 1,
            alignSelf: 'center',
            marginTop: 0,
            padding: 10,
            borderColor: 'rgba(0,0,0,0.1)',
            marginBottom: 5,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: 45,
                height: 45,
                borderRadius: 35,
                backgroundColor: COLORS.blue,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 25,

                  color: 'white',
                  fontFamily: FONTS.Rajdhani.Bold,
                }}>
                L
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginLeft: 10,
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  fontFamily: FONTS.Rajdhani.Bold,
                }}>
                Limited seats available!
              </Text>
              {/* <Text
                style={{
                  fontSize: 11,
                  color: COLORS.gray,
                }}>
                55 min ago
              </Text> */}
            </View>
          </View>
          <Text
            style={{
              fontSize: 13,
              color: COLORS.gray,
              marginLeft: 44,
              marginTop: -10,
              fontFamily: FONTS.Rajdhani.Regular,
            }}>
            Secure your spot in our highly sought-after training programs and
            gain valuable skills. Enroll now before it's too late!
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 120,
            width: '95%',
            borderRadius: 5,
            borderWidth: 1,
            alignSelf: 'center',
            marginTop: 0,
            padding: 10,
            borderColor: 'rgba(0,0,0,0.1)',
            marginBottom: 5,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: 45,
                height: 45,
                borderRadius: 35,
                backgroundColor: '#FE9539',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  color: 'white',
                  alignItems: 'center',
                }}>
                S
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginLeft: 10,
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',

                  fontFamily: FONTS.Rajdhani.Bold,
                }}>
                Stay Connected
              </Text>
              {/* <Text
                style={{
                  fontSize: 11,
                  color: COLORS.gray,
                }}>
                02 hr ago
              </Text> */}
            </View>
          </View>
          <Text
            style={{
              fontSize: 13,
              color: COLORS.gray,
              marginLeft: 44,
              marginTop: -10,
              fontFamily: FONTS.Rajdhani.Regular,
            }}>
            Stay connected with us for upcoming events, job fairs, and industry
            partnerships.
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </MainLayout>
  );
};

export default NotificationScreen;
