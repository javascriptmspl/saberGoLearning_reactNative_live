import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import ProfileLayout from '../../components/Layout/AddCardLayout';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {COLORS} from '../../constants/theme';
import {RegularText, SmallText, BigText} from '../../components/MyText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MainLayout from '../../components/Layout/MainLayout';
import {ProfileStackParams} from '../../navigation/drawer/types';
import {useDispatch, useSelector} from 'react-redux';
import {authSelector, tokenSelector} from '../../redux/feature/auth/authSlice';
import {Alert} from 'react-native';
import {api_userById} from '../../api/user';
import {updateUser} from '../../redux/feature/auth/authSlice';
import FullScreenLoader from '../../components/FullScreenLoader';
import {getImageUrl} from '../../api';
import {api_getTransaction} from '../../api/transaction';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Entypo from 'react-native-vector-icons/Entypo';
const ProfileScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<any>([]);
  const auth = useSelector(authSelector);
  const token = useSelector(tokenSelector);
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  React.useEffect(() => {
    const getUserDetails = async () => {
      try {
        setLoading(true);
        const res = await api_userById(token, auth.id);
        const payload = res.data;
        console.log(res.data, '_________');
        dispatch(updateUser(payload));
      } catch (error: any) {
        console.log(error);
        Alert.alert('Alert', error.message);
      } finally {
        setLoading(false);
      }
    };

    getUserDetails();
  }, [isFocused]);

  const handleGetTransaction = async () => {
    try {
      setLoading(true);
      const res = await api_getTransaction(token, auth.id);
      console.log(res, 'All Transactions');
      setData(res.data);
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error.message);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    handleGetTransaction();
  }, []);

  return (
    <>
      {loading && <FullScreenLoader />}
      <MainLayout title="My Profile" onBack={navigation.goBack}>
        <View>
          <View style={{flexDirection: 'row', marginTop: 30}}>
            <View
              style={{
                height: 80,
                width: 80,
                borderRadius: 50,
                backgroundColor: '#757575',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {auth?.image ? (
                <Image
                  source={{
                    uri: getImageUrl(auth?.image),
                  }}
                  style={{
                    resizeMode: 'contain',
                    width: 80,
                    height: 80,
                    borderRadius: 50,
                  }}
                />
              ) : (
                <Image
                  source={require('../../../assets/images/ProfilePicImg.png')}
                  style={{
                    resizeMode: 'contain',
                    width: 80,
                    height: 80,
                    borderRadius: 50,
                  }}
                />
              )}
            </View>
            <View
              style={{
                backgroundColor: COLORS.white,
                height: 28,
                width: 28,
                borderRadius: 28,
                marginTop: 48,
                marginLeft: -23,
              }}></View>
            <TouchableOpacity
              onPress={() => navigation.navigate('EditProfile')}
              style={{
                backgroundColor: COLORS.blue,
                height: 22,
                width: 22,
                borderRadius: 22,
                marginTop: 51,
                marginLeft: -25,
              }}>
              <MaterialIcons
                style={{marginLeft: 2, marginTop: 1}}
                onPress={() => navigation.navigate('EditProfile')}
                name="edit"
                size={18}
                color={COLORS.white}
              />
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  marginLeft: 20,
                  fontSize: 18,
                }}>
                {auth.name}
              </Text>
              <SmallText
                style={{
                  marginLeft: 20,
                  color: 'gray',
                }}>
                {data[0]?.course_id?.title}
              </SmallText>
              <SmallText
                style={{
                  marginLeft: 20,
                  color: 'gray',
                }}>
                {auth.phone}
              </SmallText>
            </View>
          </View>
          {/* <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              //@ts-ignore
              onPress={() => navigation.navigate('FeeDetailsStack')}
              style={{
                height: 110,
                width: '48%',
                backgroundColor: '#FFF8E6',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <RegularText>Net Fees</RegularText>
              <BigText bold style={{color: '#FF7438'}}>
                ₹{data[0]?.net_amount}
              </BigText>
            </TouchableOpacity>
            <TouchableOpacity
              //@ts-ignore
              onPress={() => navigation.navigate('FeeDetailsStack')}
              style={{
                height: 110,
                width: '48%',
                backgroundColor: '#E6F3F1',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <RegularText>Pending Fees</RegularText>
              <BigText bold style={{color: '#078C73'}}>
                ₹{data[0]?.pendingAmount}
              </BigText>
            </TouchableOpacity>
          </View> */}

          {/* <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderTopColor: 'white',
              borderLeftColor: 'transparent',
              borderRightColor: 'white',
              borderBottomColor: COLORS.gray,
              // backgroundColor: 'red',
              height: 35,
              marginTop: 20,
              justifyContent: 'space-between',
            }}>
            <RegularText style={{}}>Name</RegularText>
            <RegularText style={{opacity: 0.5}}>{auth.name}</RegularText>
          </View>
          <View
            style={{
              // flexDirection: 'row',
              // borderWidth: 1,
              // borderTopColor: 'white',
              // borderLeftColor: 'transparent',
              // borderRightColor: 'white',
              // borderBottomColor: COLORS.gray,
              // backgroundColor: 'red',
              height: 35,
              marginTop: 20,
              justifyContent: 'space-between',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              elevation: 3,




            }}>
            <RegularText style={{}}>Mobile Number</RegularText>
            <RegularText style={{opacity: 0.5}}>{auth.phone}</RegularText>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderTopColor: 'white',
              borderLeftColor: 'transparent',
              borderRightColor: 'white',
              borderBottomColor: COLORS.gray,
              // backgroundColor: 'red',
              height: 35,
              marginTop: 20,
              justifyContent: 'space-between',
            }}>
            <RegularText style={{}}>Email</RegularText>
            <RegularText style={{opacity: 0.5}}>{auth.email}</RegularText>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderTopColor: 'white',
              borderLeftColor: 'transparent',
              borderRightColor: 'white',
              borderBottomColor: COLORS.gray,
              height: 35,
              marginTop: 20,
              justifyContent: 'space-between',
            }}>
            <RegularText style={{}}>Date Of Birth</RegularText>
            <RegularText style={{opacity: 0.5}}>{auth.dob}</RegularText>
          </View>
          {auth?.sex && (
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                borderTopColor: 'white',
                borderLeftColor: 'transparent',
                borderRightColor: 'white',
                borderBottomColor: COLORS.gray,
                // backgroundColor: 'red',
                height: 35,
                marginTop: 20,
                justifyContent: 'space-between',
              }}>
              <RegularText style={{}}>Gender</RegularText>
              <RegularText style={{opacity: 0.5}}>{auth.sex}</RegularText>
            </View>
          )} */}
          {/* <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderTopColor: 'white',
              borderLeftColor: 'transparent',
              borderRightColor: 'white',
              borderBottomColor: COLORS.gray,

              height: 35,
              marginTop: 20,
              justifyContent: 'space-between',
            }}>
            <RegularText style={{}}>Country</RegularText>
            <RegularText style={{opacity: 0.5}}>India</RegularText>
          </View> */}
        </View>
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
            height: 220,
            backgroundColor: 'white',
            marginTop: 20,
            borderRadius: 25,
          }}>
          <RegularText style={{padding: 10}}>Name</RegularText>
          <RegularText bold style={{marginLeft: 10}}>
            James Williams
          </RegularText>
          <RegularText style={{padding: 10}}>Email</RegularText>
          <RegularText bold style={{marginLeft: 10}}>
            jameswilliams@gmail.com
          </RegularText>
          <RegularText style={{padding: 10}}>Phone</RegularText>
          <RegularText bold style={{marginLeft: 10}}>
            +123456789
          </RegularText>
          <View
            style={{
              backgroundColor: 'white',

              height: 180,
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
              marginTop: 50,
            }}>
            <View
              style={{
                width: 140,
                height: 140,
                backgroundColor: COLORS.white,
                borderTopLeftRadius: 5,
                borderBottomRightRadius: 5,
                marginTop: 10,
                marginLeft: 10,
              }}>
              <Image
                source={require('../../../assets/images/computer.png')}
                style={{
                  width: 140,
                  height: 140,
                  borderTopLeftRadius: 5,
                  borderBottomRightRadius: 5,
                  resizeMode: 'cover',
                  borderRadius: 10,
                }}
              />
            </View>
            <View style={{marginLeft: 10, marginTop: 20, flex: 1}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  // gap: 90,
                }}>
                <Text
                  style={{
                    color: '#FF7438',
                    fontSize: 14,
                  }}>
                  Web Full Stack
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 14,
                    marginRight: 10,
                  }}>
                  $6K
                </Text>
              </View>
              <TouchableOpacity
                style={{flex: 1}}
                onPress={() => {
                  //@ts-ignore
                  navigation.navigate('MeanStack');
                }}>
                <RegularText bold style={{marginBottom: 2, color: 'black'}}>
                  Mean Stack-Quick
                </RegularText>
              </TouchableOpacity>
              <RegularText>
                Web Full Stack 6k MEAN STACK - Mastery "- Practical - Live
                Project - College Docs - Test - Learning Materials - Our Company
                Info - PD Classes + Interview - Placement Support"
              </RegularText>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'white',

              height: 180,
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
              marginTop: 20,
            }}>
            <View
              style={{
                width: 140,
                height: 140,
                backgroundColor: COLORS.white,
                borderTopLeftRadius: 5,
                borderBottomRightRadius: 5,
                marginTop: 10,
                marginLeft: 10,
              }}>
              <Image
                source={require('../../../assets/images/computer.png')}
                style={{
                  width: 140,
                  height: 140,
                  borderTopLeftRadius: 5,
                  borderBottomRightRadius: 5,
                  resizeMode: 'cover',
                  borderRadius: 10,
                }}
              />
            </View>
            <View style={{marginLeft: 10, marginTop: 20, flex: 1}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  // gap: 90,
                }}>
                <Text
                  style={{
                    color: '#FF7438',
                    fontSize: 14,
                  }}>
                  Web Full Stack
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 14,
                    marginRight: 10,
                  }}>
                  $6K
                </Text>
              </View>
              <TouchableOpacity
                style={{flex: 1}}
                onPress={() => {
                  //@ts-ignore
                  navigation.navigate('MeanStack');
                }}>
                <RegularText bold style={{marginBottom: 2, color: 'black'}}>
                  Mean Stack-Quick
                </RegularText>
              </TouchableOpacity>
              <RegularText>
                Web Full Stack 6k MEAN STACK - Mastery "- Practical - Live
                Project - College Docs - Test - Learning Materials - Our Company
                Info - PD Classes + Interview - Placement Support"
              </RegularText>
            </View>
          </View>
        </View>
      </MainLayout>
    </>
  );
};

export default ProfileScreen;
