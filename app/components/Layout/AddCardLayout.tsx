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
const AddCardLayout = ({children, title, onBack}: Props) => {
  return (
    <View style={{backgroundColor: '#9e9e9e', flex: 1}}>
      <Image
        source={require('../../../assets/images/MyCardImg/bgImg.png')}
        style={{
          position: 'absolute',
          width: width,
          height: 255,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 40,
          marginHorizontal: 15,
          marginTop: 40,
        }}>
        <TouchableOpacity onPress={onBack}>
          <MaterialIcons name="arrow-back" size={20} color={COLORS.white} />
        </TouchableOpacity>
        <RegularText bold style={{marginLeft: 10, color: COLORS.white}}>
          {title}
        </RegularText>
      </View>

      <ScrollView
        scrollEnabled={false}
        style={{flex: 1}}
        contentContainerStyle={{
          backgroundColor: COLORS.white,
          flex: 1,
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          padding: 10,
          marginTop: 135,
        }}>
        {children}
      </ScrollView>
    </View>
  );
};

export default AddCardLayout;
