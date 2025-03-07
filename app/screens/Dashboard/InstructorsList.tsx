import {View, Text, FlatList, TouchableOpacity, Alert} from 'react-native';
import React, {useRef} from 'react';
import {BigText, RegularText, SmallText} from '../../components/MyText';
import StarRating from 'react-native-star-rating';
import {api_getPlacedStudents} from '../../api/student';
import {COLORS} from '../../constants/theme';
import {getRandomColor} from '../../utils/helper';

const Item = ({item}: any) => {
  let colorX = useRef();
  React.useEffect(() => {
    colorX.current = getRandomColor();
  }, []);
  return (
    <View
      style={{
        margin: 5,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        borderRadius: 10,
        height: 185,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 2,
        overflow: 'hidden',
      }}>
      <View
        style={{
          width: 65,
          height: 65,
          backgroundColor: colorX.current,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 65,
        }}>
        <BigText style={{fontSize: 30, color: COLORS.white}} bold>
          {item?.name[0]?.toUpperCase()}
        </BigText>
      </View>

      <View style={{flex: 1, width: '100%'}}>
        <RegularText
          bold
          style={{
            fontSize: 14,
            marginVertical: 2,
            alignSelf: 'center',
            height: 40,
          }}>
          {item.name}
        </RegularText>
        <SmallText
          style={{
            marginVertical: 2,
            alignSelf: 'center',
            marginBottom: 5,
            color: COLORS.gray,
          }}>
          {item.placementinfo}
        </SmallText>
        <View>
          <SmallText
            style={{
              marginVertical: 2,
              alignSelf: 'center',
              color: COLORS.gray,
            }}>
            {item.placement_business.name}
          </SmallText>
        </View>
      </View>
    </View>
  );
};

const InstructorsList = () => {
  const [placedStudents, setPlacedStudents] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const handleGetPlacedStudents = async () => {
    try {
      setLoading(true);
      const res = await api_getPlacedStudents(1);
      console.log(res, 'Placed Students');
      setPlacedStudents(res.items);
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    handleGetPlacedStudents();
  }, []);

  return (
    <View style={{padding: 10}}>
      <RegularText style={{fontSize: 18}} bold>
        Our Placed Students
      </RegularText>

      {loading ? (
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              height: 185,
              width: 120,
              backgroundColor: 'lightgray',
              borderRadius: 10,
              marginLeft: 5,
              margin: 5,
            }}></View>
          <View
            style={{
              height: 185,
              width: 120,
              backgroundColor: 'lightgray',
              borderRadius: 10,
              marginHorizontal: 5,
              margin: 5,
            }}></View>
          <View
            style={{
              height: 185,
              width: 120,
              backgroundColor: 'lightgray',
              borderRadius: 10,
              margin: 5,
            }}></View>
        </View>
      ) : (
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={placedStudents}
          horizontal
          renderItem={({item}: {item: any}) => {
            return <Item item={item} />;
          }}
        />
      )}
    </View>
  );
};

export default InstructorsList;
