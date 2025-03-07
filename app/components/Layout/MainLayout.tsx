import {View, ScrollView, Image, Dimensions} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RegularText} from '../MyText';
import {COLORS} from '../../constants/theme';

type Props = {
  children: React.ReactNode;
  title?: string;
  onBack?: () => void;
};

const {width, height} = Dimensions.get('window');
const MainLayout = ({children, title, onBack}: Props) => {
  return (
    <View style={{backgroundColor: '#9e9e9e', flex: 1}}>
      <Image
        source={require('../../../assets/images/student-use-comp-img.png')}
        style={{
          width: width,
          height: 150,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 40,
          marginHorizontal: 15,
          marginTop: 50,
        }}>
        <TouchableOpacity onPress={onBack}>
          <MaterialIcons name="arrow-back" size={20} color={COLORS.white} />
        </TouchableOpacity>
        <RegularText
          bold
          style={{color: COLORS.white, textAlign: 'center', flex: 1}}>
          {title}
        </RegularText>
      </View>

      <View
        style={{
          backgroundColor: COLORS.white,
          flex: 1,
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          padding: 10,
          marginTop: 20,
        }}>
        {/* <ScrollView
        scrollEnabled={false}
        style={{flex: 1}}
        contentContainerStyle={{
          backgroundColor: COLORS.white,
          flex: 1,
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          padding: 10,
          marginTop: 20,
        }}> */}
        {children}
        {/* </ScrollView> */}
      </View>
    </View>
  );
};

export default MainLayout;
