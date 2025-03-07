import {View, Modal} from 'react-native';
import React from 'react';
import {BigText, RegularText, SmallText} from './MyText';
import {COLORS} from '../constants/theme';
import PrimaryBtn from './PrimaryBtn';

const SignUpAlertModal = ({
  id,
  pass,
  action,
}: {
  id: string;
  pass: string;
  action: any;
}) => {
  return (
    <Modal visible={true} transparent={true}>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: COLORS.white,
            width: '90%',
            justifyContent: 'center',
            borderRadius: 10,
            padding: 15,
          }}>
          <BigText
            style={{
              textAlign: 'center',
              marginBottom: 20,
              marginTop: 10,
              fontSize: 22,
            }}
            bold>
            Thanks for the enrollment!
          </BigText>
          <SmallText
            style={{
              marginVertical: 10,
            }}>
            Here is your temporary Enrollment ID & Password.
          </SmallText>

          <RegularText>
            Enrollment ID: {id ? id : `[Insert Enrollment ID]`}
          </RegularText>
          <RegularText>
            Password: {pass ? pass : `[Insert Password]`}
          </RegularText>
          <SmallText style={{alignItems: 'center', marginVertical: 10}}>
            Please make sure to change your password upon your first login for
            security purposes.
          </SmallText>
          <View style={{alignItems: 'center'}}>
            <PrimaryBtn title="Login" onPress={action} />
          </View>
          <SmallText
            style={{
              marginTop: 10,
              marginBottom: 20,
              textAlign: 'center',
            }}>
            Happy learning with Meander E-Learning App!
          </SmallText>
        </View>
      </View>
    </Modal>
  );
};

export default SignUpAlertModal;
