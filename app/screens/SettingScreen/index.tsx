import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {BigText, RegularText, SmallText} from '../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DashboardStackParams, RootStackParams} from '../../navigation/types';
import MainLayout from '../../components/Layout/MainLayout';
import PrimaryBtn from '../../components/PrimaryBtn';
import ToggleSwitch from 'toggle-switch-react-native';
import {SettingStackParams} from '../../navigation/drawer/types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {FONTS} from '../../../assets/fonts';

const SettingScreen = () => {
  const [notification, setNotification] = useState(false);
  const [courseAlert, setCourseAlert] = useState(false);
  const [email, setEmail] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<SettingStackParams>>();
  return (
    <MainLayout title="Settings" onBack={navigation.goBack}>
      <View
        style={{
          flex: 1,
          //   padding: 10,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ChangePassword')}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 40,
            padding: 10,
            marginBottom: 10,
            marginTop: 40,
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              height: 30,

              alignItems: 'center',
            }}>
            <AntDesign
              style={{marginRight: 15}}
              name="lock1"
              size={18}
              color={'gray'}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                fontFamily: FONTS.Rajdhani.Regular,
              }}>
              Change Password
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          //@ts-ignore
          onPress={() => navigation.navigate('Notification')}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 40,
            padding: 10,
            marginBottom: 10,
            marginTop: 10,
          }}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', height: 30}}>
            <MaterialIcons
              style={{marginRight: 15}}
              name="notifications-none"
              size={18}
              color={'gray'}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                fontFamily: FONTS.Rajdhani.Regular,
              }}>
              Notification
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          //@ts-ignore
          onPress={() => navigation.navigate('ContactUs')}
          style={{
            flexDirection: 'row',
            //justifyContent: 'space-between',
            height: 40,
            padding: 10,
            marginBottom: 10,
            marginTop: 10,
          }}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', height: 30}}>
            <AntDesign
              style={{marginRight: 15}}
              name="contacts"
              size={18}
              color={'gray'}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                fontFamily: FONTS.Rajdhani.Regular,
              }}>
              Contact Us
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          //@ts-ignore
          onPress={() => navigation.navigate('PrivacyPolicy')}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 40,

            marginBottom: 10,
            marginTop: 10,
            marginLeft: 10,
          }}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', height: 30}}>
            <MaterialIcons
              style={{marginRight: 15}}
              name="privacy-tip"
              size={18}
              color={'gray'}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 14,
                fontFamily: FONTS.Rajdhani.Regular,
              }}>
              Privacy Policy
            </Text>
          </View>
        </TouchableOpacity>

        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 40,
            padding: 10,
            marginBottom: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <AntDesign
              style={{marginRight: 15}}
              name="bells"
              size={18}
              color={'gray'}
            />
            <Text style={{color: 'black'}}>Notification</Text>
          </View>
          <ToggleSwitch
            isOn={notification}
            onColor={COLORS.blue}
            offColor="rgba(0,0,0,0.2)"
            size="small"
            onToggle={isOn => setNotification(isOn)}
          />
        </View> */}

        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 40,
            padding: 10,
            marginBottom: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Fontisto
              style={{marginRight: 15}}
              name="stopwatch"
              size={18}
              color={'gray'}
            />
            <Text style={{color: 'black'}}>Course Alert</Text>
          </View>
          <ToggleSwitch
            isOn={courseAlert}
            onColor={COLORS.blue}
            offColor="rgba(0,0,0,0.2)"
            size="small"
            onToggle={isOn => setCourseAlert(isOn)}
          />
        </View> */}

        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 40,
            padding: 10,
            marginBottom: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <AntDesign
              style={{marginRight: 15}}
              name="mail"
              size={18}
              color={'gray'}
            />
            <Text style={{color: 'black'}}>Email</Text>
          </View>
          <ToggleSwitch
            isOn={email}
            onColor={COLORS.blue}
            offColor="rgba(0,0,0,0.2)"
            size="small"
            onToggle={isOn => setEmail(isOn)}
          />
        </View> */}
      </View>
    </MainLayout>
  );
};

export default SettingScreen;
