import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/theme';
import {BigText, RegularText, SmallText} from '../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import MainLayout from '../../components/Layout/MainLayout';
import PrimaryBtn from '../../components/PrimaryBtn';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';

const PrivacyPolicyScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <MainLayout title="Privacy & Policy" onBack={navigation.goBack}>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: 'white',
          padding: 10,
        }}>
        <RegularText style={{color: COLORS.gray, fontSize: 14}}>
          This Privacy Policy explains how our company collects, uses, and
          protects the personal information you provide when using the Meander
          e-learning application. We are committed to safeguarding your privacy
          and ensuring the security of your personal information. By using the
          App, you consent to the terms and practices described in this Policy.
        </RegularText>
        <RegularText bold style={{marginLeft: 5, marginTop: 20}}>
          Information We Collect From You :
        </RegularText>

        <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 5}}>
          <FontAwesome style={{}} name="circle" size={10} color={'#FE9539'} />
          <View style={{marginLeft: 10, marginTop: -5}}>
            <Text style={{fontSize: 13, color: COLORS.gray}}>
              Personal Information: When you sign up for an account or use
              certain features of the App, we may collect personal information
              such as your name, email address, and any other information you
              voluntarily provide.
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 5}}>
          <FontAwesome style={{}} name="circle" size={10} color={'#FE9539'} />
          <View style={{marginLeft: 10, marginTop: -5}}>
            <Text style={{fontSize: 13, color: COLORS.gray}}>
              Usage Information: We may collect information about your use of
              the App, including your interactions, preferences, and browsing
              behavior. This may include information about the courses you
              enroll in, progress, assessments, and other user-generated
              content.
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            marginLeft: 5,
            marginBottom: 15,
          }}>
          <FontAwesome style={{}} name="circle" size={10} color={'#FE9539'} />
          <View style={{marginLeft: 10, marginTop: -5}}>
            <Text style={{fontSize: 13, color: COLORS.gray}}>
              Device Information: We may collect information about the device
              you use to access the App, such as the device type, operating
              system, unique device identifiers, and mobile network information.
            </Text>
          </View>
        </View>

        <RegularText bold style={{marginLeft: 5}}>
          Use of Information:
        </RegularText>

        <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 5}}>
          <FontAwesome style={{}} name="circle" size={10} color={'#FE9539'} />
          <View style={{marginLeft: 10, marginTop: -5}}>
            <Text style={{fontSize: 13, color: COLORS.gray}}>
              We use the collected information to provide and improve the
              services offered by the App, including personalized course
              recommendations, user support, and communication.
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 5}}>
          <FontAwesome style={{}} name="circle" size={10} color={'#FE9539'} />
          <View style={{marginLeft: 10, marginTop: -5}}>
            <Text style={{fontSize: 13, color: COLORS.gray}}>
              We may use your email address to send you important updates,
              newsletters, promotional offers, or other information related to
              the App. You can opt-out of receiving marketing emails at any time
              by following the instructions provided in the email or contacting
              us directly.
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            marginLeft: 5,
            marginBottom: 15,
          }}>
          <FontAwesome style={{}} name="circle" size={10} color={'#FE9539'} />
          <View style={{marginLeft: 10, marginTop: -5}}>
            <Text style={{fontSize: 13, color: COLORS.gray}}>
              We may use aggregated and anonymized data for statistical
              analysis, research, and to enhance the effectiveness of our
              educational offerings.
            </Text>
          </View>
        </View>

        <RegularText bold style={{marginLeft: 5}}>
          Data Security:
        </RegularText>
        <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 5}}>
          <FontAwesome style={{}} name="circle" size={10} color={'#FE9539'} />
          <View style={{marginLeft: 10, marginTop: -5}}>
            <Text style={{fontSize: 13, color: COLORS.gray}}>
              We implement industry-standard security measures to protect your
              personal information from unauthorized access, alteration,
              disclosure, or destruction.
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            marginLeft: 5,
            marginBottom: 15,
          }}>
          <FontAwesome style={{}} name="circle" size={10} color={'#FE9539'} />
          <View style={{marginLeft: 10, marginTop: -5}}>
            <Text style={{fontSize: 13, color: COLORS.gray}}>
              While we strive to protect your personal information, no method of
              transmission over the internet or electronic storage is completely
              secure. Therefore, we cannot guarantee its absolute security.
            </Text>
          </View>
        </View>
        <RegularText bold style={{marginLeft: 5}}>
          Data Retention:
        </RegularText>
        <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 5}}>
          <FontAwesome style={{}} name="circle" size={10} color={'#FE9539'} />
          <View style={{marginLeft: 10, marginTop: -5}}>
            <Text style={{fontSize: 13, color: COLORS.gray}}>
              We will retain your personal information only for as long as
              necessary to fulfill the purposes outlined in this Policy or as
              required by law.
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            marginLeft: 5,
            marginBottom: 15,
          }}>
          <FontAwesome style={{}} name="circle" size={10} color={'#FE9539'} />
          <View style={{marginLeft: 10, marginTop: -5}}>
            <Text style={{fontSize: 13, color: COLORS.gray}}>
              You can request the deletion of your account and personal
              information by contacting us at [contact information]. However,
              please note that certain information may be retained for backup,
              legal, or legitimate business purposes.
            </Text>
          </View>
        </View>

        <RegularText bold style={{marginLeft: 5}}>
          Third-Party Services:
        </RegularText>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            marginLeft: 5,
            marginBottom: 15,
          }}>
          <FontAwesome style={{}} name="circle" size={10} color={'#FE9539'} />
          <View style={{marginLeft: 10, marginTop: -5}}>
            <Text style={{fontSize: 13, color: COLORS.gray}}>
              The App may include links to third-party websites, applications,
              or services that are not operated or controlled by us. This Policy
              does not cover the privacy practices of these third parties, and
              we encourage you to review their respective privacy policies.
            </Text>
          </View>
        </View>

        <RegularText bold style={{marginLeft: 5}}>
          Children's Privacy:
        </RegularText>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            marginLeft: 5,
            marginBottom: 15,
          }}>
          <FontAwesome style={{}} name="circle" size={10} color={'#FE9539'} />
          <View style={{marginLeft: 10, marginTop: -5}}>
            <Text style={{fontSize: 13, color: COLORS.gray}}>
              The App is not intended for use by individuals under the age of 18
              without parental consent. We do not knowingly collect personal
              information from children. If we become aware that we have
              inadvertently collected personal information from a child without
              parental consent, we will take steps to delete such information as
              soon as possible.
            </Text>
          </View>
        </View>

        <RegularText bold style={{marginLeft: 5}}>
          Changes to this Policy:
        </RegularText>
        <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 5}}>
          <FontAwesome style={{}} name="circle" size={10} color={'#FE9539'} />
          <View style={{marginLeft: 10, marginTop: -5}}>
            <Text style={{fontSize: 13, color: COLORS.gray}}>
              We may update this Policy from time to time to reflect changes in
              our information practices or legal requirements. Any modifications
              will be effective immediately upon posting on the App.
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            marginLeft: 5,
            marginBottom: 15,
          }}>
          <FontAwesome style={{}} name="circle" size={10} color={'#FE9539'} />
          <View style={{marginLeft: 10, marginTop: -5}}>
            <Text style={{fontSize: 13, color: COLORS.gray}}>
              We encourage you to review this Policy periodically to stay
              informed about how we collect, use, and protect your personal
              information.
            </Text>
          </View>
        </View>

        {/* {} */}
        <View style={{height: 50}}></View>
      </ScrollView>
    </MainLayout>
  );
};
export default PrivacyPolicyScreen;
