import {
  View,
  Text,
  Alert,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {RegularText} from '../../components/MyText';
import LinearGradient from 'react-native-linear-gradient';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DrawerNavigatorParams} from '../types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {onShareCourse} from '../../utils/helper';
import {
  authSelector,
  ghostSelector,
  logOut,
} from '../../redux/feature/auth/authSlice';
import {getImageUrl} from '../../api';
import {COLORS} from '../../constants/theme';
import {courseSelector} from '../../redux/feature/course/courseSlice';
const COLOR_A = '#6D45F3';
const COLOR_B = '#366AE6';

const DW = Dimensions.get('screen').width;
const MyDrawer = () => {
  const course = useSelector(courseSelector);
  const auth = useSelector(authSelector);
  const isGhost = useSelector(ghostSelector);

  const navigation =
    useNavigation<NativeStackNavigationProp<DrawerNavigatorParams>>();
  const handleClose = () => {
    navigation?.dispatch(DrawerActions.closeDrawer());
  };

  const dispatch = useDispatch();

  const logout = () => {
    console.log('logout');
    dispatch(logOut({}));
    // navigation.navigate('Welcome');
  };

  const verifyLogout = () => {
    Alert.alert('Alert', 'Are you sure want to Logout ?.', [
      {
        text: 'Cancel',
      },
      {
        text: 'Logout',
        onPress: () => logout(),
      },
    ]);
  };

  const handleGhostLoginAndSignupPress = () => {
    logout();
  };

  return (
    <View
      style={{
        width: DW,
        overflow: 'hidden',
        height: '100%',
      }}>
      <View
        // colors={[COLOR_A, COLOR_B]}
        style={{
          height: '100%',
          padding: 15,
          width: '100%',
          borderRadius: 5,
          backgroundColor: 'white',
        }}>
        {/* <Image
          source={require('../../../assets/images/MenuImage.png')}
          style={{
            resizeMode: 'contain',
            position: 'absolute',
            width: 200,
            top: 55,
            right: -15,
          }}
        /> */}

        <View style={{flexDirection: 'row', marginTop: 100}}>
          <View
            style={{
              height: 80,
              width: 80,
              borderRadius: 50,
              backgroundColor: COLOR_A,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {auth?.image ? (
              <Image
                source={{uri: getImageUrl(auth?.image)}}
                style={{
                  resizeMode: 'contain',
                  width: 80,
                  height: 80,
                  borderRadius: 80,
                }}
              />
            ) : (
              <Image
                source={require('../../../assets/images/ProfilePicImg.png')}
                style={{
                  borderRadius: 80,
                  resizeMode: 'contain',
                  width: 80,
                  height: 80,
                }}
              />
            )}
          </View>
          <View>
            {isGhost || (
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  marginLeft: 15,
                  fontSize: 18,
                }}>
                {auth?.name}
              </Text>
            )}
            {isGhost || (
              <Text
                style={{
                  color: 'black',
                  marginLeft: 15,
                  fontSize: 13,
                }}>
                {auth?.phone}
              </Text>
            )}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ProfileStack');
              }}
              style={{
                height: 30,
                width: 30,
                backgroundColor: '#FF7438',
                marginTop: 10,
                marginLeft: 20,
                borderRadius: 10,
                alignItems: 'center',
              }}>
              <AntDesign
                style={{alignItems: 'center', marginTop: 5}}
                color={COLORS.white}
                size={17}
                name="right"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            backgroundColor: 'grey',
            height: 0.5,
            marginTop: 10,
          }}></View>
        <View>
          {!isGhost || (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ProfileStack');
              }}
              style={{
                flexDirection: 'row',
                marginTop: 30,
                width: 145,
                backgroundColor: '#485EEA',

                height: 40,
                alignItems: 'center',
                borderTopRightRadius: 40,
                borderTopLeftRadius: 50,
                borderBottomRightRadius: 40,
              }}>
              <View
                style={{
                  backgroundColor: '#677AFB',
                  height: 40,
                  justifyContent: 'center',
                  width: 50,
                  borderTopLeftRadius: 20,
                  borderBottomRightRadius: 20,
                }}>
                <SimpleLineIcons
                  style={{marginLeft: 17}}
                  name="user"
                  size={17}
                  color={'black'}
                />
              </View>
              <RegularText
                bold
                style={{color: 'black', fontSize: 14, marginLeft: 10}}>
                My Profile
              </RegularText>
            </TouchableOpacity>
          )}
          {isGhost || (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('FeeDetailsStack');
              }}
              style={{
                flexDirection: 'row',
                marginTop: 40,
                width: 100,
              }}>
              <Ionicons
                style={{marginLeft: 0.5}}
                name="pricetag-outline"
                size={17}
                color={'black'}
              />
              <RegularText
                bold
                style={{color: 'black', fontSize: 14, marginLeft: 10}}>
                Fee Details
              </RegularText>
            </TouchableOpacity>
          )}

          {/* <TouchableOpacity
            onPress={() => {
              navigation.navigate('ResourcesStack');
            }}
            style={{
              flexDirection: 'row',
              marginTop: 30,
              width: 100,
            }}>
            <AntDesign color={COLORS.black} size={17} name="book" />
            <RegularText
              bold
              style={{color: 'black', fontSize: 14, marginLeft: 10}}>
              Resources
            </RegularText>
          </TouchableOpacity> */}

          {isGhost || (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SettingStack');
              }}
              style={{
                flexDirection: 'row',
                marginTop: 30,
                width: 100,
              }}>
              <AntDesign
                style={{marginLeft: 0.5}}
                name="setting"
                size={17}
                color={'black'}
              />
              <RegularText
                bold
                style={{color: 'black', fontSize: 14, marginLeft: 10}}>
                Settings
              </RegularText>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => navigation.navigate('HelpAndSupport')}
            style={{
              flexDirection: 'row',
              marginTop: 30,
              width: 130,
            }}>
            <AntDesign
              style={{marginLeft: 0.5}}
              name="adduser"
              size={17}
              color={'black'}
            />
            <RegularText
              bold
              style={{color: 'black', fontSize: 14, marginLeft: 10}}>
              Help & Support
            </RegularText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onShareCourse({courseLink: ''})}
            style={{
              flexDirection: 'row',
              marginTop: 30,
              width: 130,
            }}>
            <Feather
              style={{marginLeft: 0.5}}
              name="users"
              size={17}
              color={'black'}
            />
            <RegularText
              bold
              style={{color: 'black', fontSize: 14, marginLeft: 10}}>
              Refer
            </RegularText>
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 20,
            width: DW,
            alignItems: 'center',
          }}>
          {isGhost ? (
            <TouchableOpacity
              onPress={handleGhostLoginAndSignupPress}
              style={{
                padding: 20,
                borderRadius: 10,
                backgroundColor: '#FF7438',
                alignItems: 'center',

                // marginHorizontal: 20,
                width: '90%',
              }}>
              {/* <AntDesign
                style={{marginLeft: 0.5}}
                name="logout"
                size={17}
                color={'black'}
              /> */}
              <RegularText
                style={{color: 'black', fontSize: 14, marginLeft: 10}}>
                Sign Out
              </RegularText>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={verifyLogout}
              style={{
                padding: 20,
                width: '90%',
                borderRadius: 10,
                backgroundColor: '#FF7438',
                alignItems: 'center',
                // marginHorizontal: 20,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'normal',
                  textAlign: 'center',
                  fontSize: 13,
                }}>
                Sign Out
              </Text>

              {/*           
              <AntDesign
                style={{marginLeft: 0.5}}
                name="logout"
                size={17}
                color={'black'}
              />
              <RegularText
                bold
                style={{color: 'black', fontSize: 14, marginLeft: 10}}>
                Logout
              </RegularText> */}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default MyDrawer;

const styles = StyleSheet.create({
  itemIcon: {width: 38, height: 38, resizeMode: 'center'},
});
