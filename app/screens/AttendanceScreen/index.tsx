import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AttendanceStackParams} from '../../navigation/types';
import MainLayout from '../../components/Layout/MainLayout';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ScrollView} from 'react-native-gesture-handler';
import AttendanceModal from '../../modal/AttendanceModal';
import {FONTS} from '../../../assets/fonts';
import {RegularText} from '../../components/MyText';
import DatePicker from 'react-native-date-picker';
type Props = {
  fromDate: string;
  toDate: string;
  isCompleted: boolean;
};

const data = [
  {
    fromDate: ' Jan 5,2024',
    toDate: '10:00-7:00',
    isCompleted: true,
  },
  {
    fromDate: ' Jan 5,2024',
    toDate: '10:00-7:00',
    isCompleted: true,
  },
  {
    fromDate: ' Jan 5,2024',
    toDate: '10:00-7:00',
    isCompleted: true,
  },
  {
    fromDate: ' Jan 5,2024',
    toDate: '10:00-7:00',
    isCompleted: false,
  },
  {
    fromDate: ' Jan 5,2024',
    toDate: '10:00-7:00',
    isCompleted: true,
  },
  {
    fromDate: ' Jan 5,2024',
    toDate: '10:00-7:00',
    isCompleted: true,
  },
  {
    fromDate: ' Jan 5,2024',
    toDate: '10:00-7:00',
    isCompleted: true,
  },
  {
    fromDate: ' Jan 5,2024',
    toDate: '10:00-7:00',
    isCompleted: true,
  },
  {
    fromDate: ' Jan 5,2024',
    toDate: '10:00-7:00',
    isCompleted: true,
  },
  {
    fromDate: ' Jan 5,2024',
    toDate: '10:00-7:00',
    isCompleted: true,
  },
];
const AttendanceItem = ({fromDate, toDate, isCompleted}: Props) => {
  return (
    <React.Fragment>
      <View
        style={{
          backgroundColor: 'white',
          height: 120,
          marginHorizontal: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
          borderRadius: 15,
          marginBottom: 20,
        }}>
        <TouchableOpacity
          style={{
            padding: 10,
            marginTop: 10,
            marginLeft: 10,
            alignSelf: 'flex-start',
            borderRadius: 10,
            backgroundColor: '#E0FBDA',
          }}>
          <Text
            style={{
              color: '#65CE75',
              fontWeight: 'normal',
              textAlign: 'center',
              fontSize: 13,
            }}>
            Full Day
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 8,
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: FONTS.Rajdhani.Bold,
              color: 'black',
              marginLeft: 5,
            }}>
            {fromDate}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <AntDesign
              style={{}}
              name="clockcircleo"
              size={14}
              color={'grey'}
            />

            <Text
              style={{
                fontSize: 18,
                fontFamily: FONTS.Rajdhani.Bold,
                color: 'black',
                marginLeft: 5,
              }}>
              {toDate}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              borderRadius: 12,

              backgroundColor: isCompleted ? '#E0FBDA' : 'pink',
              marginRight: 5,
              padding: 10,
              marginLeft: 5,
            }}>
            <Text
              style={{
                color: isCompleted ? '#65CE75' : '#EE2B00',
                fontWeight: 'normal',
                textAlign: 'center',
                fontSize: 13,
                fontFamily: FONTS.Rajdhani.Bold,
              }}>
              {isCompleted ? 'Yes' : 'No'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  );
};
const AttendanceScreen = () => {
  const [AttendanceModalOpen, setAttendanceModalOpen] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = React.useState(false);
  const [dob, setDob] = React.useState<any>('');
  const [isDatePickOpen, setIsDatePickOpen] = React.useState(false);
  const [isdob, issetDob] = React.useState<any>('');

  const navigation =
    useNavigation<NativeStackNavigationProp<AttendanceStackParams>>();
  return (
    <MainLayout
      title="Attendance"
      //@ts-ignore
      onBack={() => navigation.navigate('Dashboard')}>
      <ScrollView>
        <View>
          <TouchableOpacity
            onPress={() => setAttendanceModalOpen(true)}
            style={{
              padding: 10,
              marginTop: 20,
              alignSelf: 'flex-start',
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#FF7438',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
            }}>
            {AttendanceModalOpen && (
              <AttendanceModal onHide={() => setAttendanceModalOpen(false)} />
            )}

            <AntDesign style={{}} name="plus" size={14} color={'#FF7438'} />

            <Text
              style={{
                color: '#FF7438',
                fontWeight: 'normal',
                textAlign: 'center',
                fontSize: 13,
                fontFamily: FONTS.Rajdhani.Bold,
              }}>
              Add Attendance
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              gap: 130,
              marginHorizontal: 20,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: FONTS.Rajdhani.Bold,
                color: 'black',
              }}>
              From Date
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontFamily: FONTS.Rajdhani.Bold,
                color: 'black',
              }}>
              To Date
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            {/* <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#FAFAFA',
                width: '48%',
                height: 50,
                gap: 50,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: FONTS.Rajdhani.Bold,
                  color: 'black',
                  marginLeft: 5,
                }}>
                05-12-2023
              </Text>
              <AntDesign style={{}} name="calendar" size={20} color={'black'} />
            </View> */}
            <TouchableOpacity
              onPress={() => setIsDatePickOpen(true)}
              style={{
                flexDirection: 'row',
                // gap: 40,
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#FAFAFA',
                borderRadius: 10,
                width: '48%',
                height: 50,
                padding: 5,
              }}>
              <RegularText>
                {isdob ? isdob.toISOString().slice(0, 10) : 'From Date'}
              </RegularText>
              <AntDesign name={'calendar'} size={18} color={'black'} />
            </TouchableOpacity>

            {/* Date Picker */}
            {isDatePickOpen && (
              <DatePicker
                modal
                mode="date"
                open={isDatePickOpen}
                date={isdob || new Date()}
                onConfirm={selectedDate => {
                  setIsDatePickOpen(false);
                  issetDob(selectedDate);
                }}
                onCancel={() => {
                  setIsDatePickOpen(false);
                }}
              />
            )}

            <TouchableOpacity
              onPress={() => setIsDatePickerOpen(true)}
              style={{
                flexDirection: 'row',
                // gap: 40,
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#FAFAFA',
                borderRadius: 10,
                width: '48%',
                height: 50,
                padding: 5,
              }}>
              <RegularText>
                {dob ? dob.toISOString().slice(0, 10) : 'To Date'}
              </RegularText>
              <AntDesign name={'calendar'} size={18} color={'black'} />
            </TouchableOpacity>

            {/* Date Picker */}
            {isDatePickerOpen && (
              <DatePicker
                modal
                mode="date"
                open={isDatePickerOpen}
                date={dob || new Date()}
                onConfirm={selectedDate => {
                  setIsDatePickerOpen(false);
                  setDob(selectedDate);
                }}
                onCancel={() => {
                  setIsDatePickerOpen(false);
                }}
              />
            )}
          </View>
          {/*  */}
          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <AttendanceItem
                  fromDate={item.fromDate}
                  isCompleted={item.isCompleted}
                  toDate={item.toDate}
                />
              );
            }}
          />
          <View style={{marginBottom: 80}}></View>
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default AttendanceScreen;
