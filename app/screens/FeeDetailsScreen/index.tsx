import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import ProfileLayout from '../../components/Layout/AddCardLayout';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {COLORS} from '../../constants/theme';
import {RegularText, SmallText, BigText} from '../../components/MyText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MainLayout from '../../components/Layout/MainLayout';
import {ProfileStackParams} from '../../navigation/drawer/types';
import {useDispatch, useSelector} from 'react-redux';
import {authSelector, tokenSelector} from '../../redux/feature/auth/authSlice';
import {Alert} from 'react-native';
import {api_userById} from '../../api/user';
import {updateUser} from '../../redux/feature/auth/authSlice';
import FullScreenLoader from '../../components/FullScreenLoader';
import {getImageUrl} from '../../api';
import ToggleSwitch from 'toggle-switch-react-native';
import {api_getTransaction} from '../../api/transaction';

// const userID = '642d12dd7e6ed2407d4c2afa';

const FeeDetailsScreen = () => {
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
      <MainLayout title="Fee Details" onBack={navigation.goBack}>
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

          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                height: 110,
                width: '48%',
                backgroundColor: '#E6F3F1',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <RegularText>Net Fees</RegularText>
              <BigText bold style={{color: '#078C73'}}>
                ₹{data[0]?.net_amount}
              </BigText>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 110,
                width: '48%',
                backgroundColor: '#FFF8E6',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <RegularText>Pending Fees</RegularText>
              <BigText bold style={{color: '#FF7438'}}>
                ₹{data[0]?.pendingAmount}
              </BigText>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: COLORS.gray,
              marginTop: 20,
              height: 35,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <RegularText bold> Transaction</RegularText>
            <RegularText bold> Date</RegularText>
            <RegularText bold> Mode</RegularText>
            <RegularText bold> Status</RegularText>
          </View>

          <FlatList
            style={{height: 225}}
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({item}: {item: any}) => {
              const status = item.payment_status === 'received' ? true : false;
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderBottomColor: COLORS.gray,
                    marginTop: 20,
                    height: 35,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <RegularText
                    style={{color: status ? COLORS.gray : '#FF7438'}}>
                    {item.paid_amount}
                  </RegularText>
                  <RegularText
                    style={{color: status ? COLORS.gray : '#FF7438'}}>
                    {/* { 25 May 2023} */}
                    {item.created_at.slice(0, 10)}
                  </RegularText>
                  <RegularText
                    style={{color: status ? COLORS.gray : '#FF7438'}}>
                    {item.mode.displayname}
                  </RegularText>
                  <ToggleSwitch
                    disabled
                    isOn={status}
                    offColor={'#FF7438'}
                    onColor={'#078C73'}
                    size="small"
                  />
                </View>
              );
            }}
          />
          <View style={{marginTop: 10}}>
            <SmallText
              style={{alignSelf: 'center', fontSize: 12, color: COLORS.gray}}>
              If you have any query or need any clarification, please call at
            </SmallText>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 3,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesome
                style={{marginRight: 5}}
                name="phone"
                size={20}
                color={COLORS.black}
              />
              <SmallText bold style={{fontSize: 13}}>
                +91-8090429042
              </SmallText>
            </View>
          </View>
        </View>
      </MainLayout>
    </>
  );
};

export default FeeDetailsScreen;
