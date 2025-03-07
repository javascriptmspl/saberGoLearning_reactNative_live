import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import React from 'react';

import {RegularText} from '../components/MyText';

const {width, height} = Dimensions.get('screen');
type Props = {
  onHide?: () => void;
};

const AttendanceModal = ({onHide}: Props) => {
  return (
    <Modal visible={true} transparent>
      <TouchableWithoutFeedback onPress={onHide}>
        <View
          style={{
            width,
            height,
            backgroundColor: 'rgba(0,0,0,0.5)',
            // alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '80%',
              height: 300,
              borderRadius: 15,
              backgroundColor: 'white',
              alignSelf: 'center',
              marginBottom: 50,
              paddingTop: 10,
            }}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <RegularText bold style={{color: 'black', marginTop: 30}}>
                Add Attendance
              </RegularText>
            </View>
            <View
              style={{
                height: 50,
                backgroundColor: '#FAFAFA',
                borderRadius: 15,
                marginHorizontal: 10,
              }}>
              <RegularText
                style={{
                  color: 'black',
                  marginTop: 10,
                  marginLeft: 15,
                  fontSize: 14,
                }}>
                Present
              </RegularText>
              <TextInput
                style={{
                  marginLeft: 10,
                  color: 'black',
                }}
                placeholder=""
                placeholderTextColor="black"
              />
            </View>
            <View
              style={{
                height: 50,
                backgroundColor: '#FAFAFA',
                borderRadius: 15,
                marginHorizontal: 10,
                marginTop: 20,
              }}>
              <RegularText
                style={{
                  color: 'black',
                  marginTop: 10,
                  marginLeft: 15,
                  fontSize: 14,
                }}>
                Feedback
              </RegularText>
              <TextInput
                style={{
                  marginLeft: 10,
                  color: 'black',
                }}
                placeholder=""
                placeholderTextColor="black"
              />
            </View>

            <View style={styles.buttons}>
              <TouchableOpacity
                onPress={onHide}
                style={{
                  backgroundColor: 'white',
                  width: '40%',
                  borderColor: '#FF7438',
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 10,
                  // textAlign: 'center',
                }}>
                <Text
                  style={{
                    color: '#FF7438',
                    fontWeight: 'normal',
                    textAlign: 'center',
                    fontSize: 13,
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onHide}
                style={{
                  width: '40%',
                  borderColor: '#FF7438',
                  borderWidth: 1,
                  backgroundColor: '#FF7438',
                  padding: 10,

                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'normal',
                    textAlign: 'center',
                    fontSize: 13,
                  }}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default AttendanceModal;
const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    //  height: 60,
    alignItems: 'center',
    marginHorizontal: 20,
    gap: 15,
    padding: 10,
    margin: 8,
  },
});
