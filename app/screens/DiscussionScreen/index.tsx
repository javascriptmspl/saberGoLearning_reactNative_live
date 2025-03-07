import {View, Text} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DashboardStackParams} from '../../navigation/types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RegularText} from '../../components/MyText';
import DiscussionModal from '../../modal/DiscussionModal';
import {FONTS} from '../../../assets/fonts';

const faq = [
  {
    ques: 'How do I create a profile?',
    answer:
      'To create a profile, simply sign up using your email or phone number. Once registered, add your photos and information about yourself to complete your profile.',
  },
  {
    ques: 'Can I browse without signing up?',
    answer:
      'No, to ensure privacy and security for all users, you will need to sign up and create a profile to browse and interact with others on the platform.',
  },
  {
    ques: 'Are there safety measures in place?',
    answer:
      'Yes, we prioritize user safety. We have safety guidelines, profile verification options, and a reporting system for any inappropriate behavior.',
  },
  {
    ques: 'How can I start a conversation?',
    answer:
      'You can start a conversation by sending a message or a like to someone you are interested in. Make sure to personalize your message based on their profile to spark a meaningful conversation.',
  },
  {
    ques: 'Is there a way to filter matches?',
    answer:
      'Absolutely! Our app offers various filters like age range, location, interests, and more to help you find compatible matches that align with your preferences.',
  },
];
const DiscussionScreen = () => {
  const [expandedIndex, setExpandedIndex] = React.useState(null);
  const [DiscussionModalOpen, setDiscussionModalOpen] = useState(false);
  const toggleAnswer = (index: any) => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParams>>();
  return (
    <MainLayout title="Discussion" onBack={navigation.goBack}>
      <View style={{padding: 20}}>
        <TouchableOpacity
          onPress={() => setDiscussionModalOpen(true)}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 0.5,
            borderColor: 'grey',
            padding: 10,
            height: 50,
            borderRadius: 10,
            gap: 5,
            // backgroundColor: 'red',
          }}>
          {DiscussionModalOpen && (
            <DiscussionModal onHide={() => setDiscussionModalOpen(false)} />
          )}

          <AntDesign style={{}} name="form" size={16} color={'#FF7438'} />

          <Text
            style={{
              color: 'black',
              fontWeight: 'normal',
              textAlign: 'center',
              fontSize: 17,
              fontFamily: FONTS.Rajdhani.Regular,
            }}>
            Start a discussion
          </Text>
        </TouchableOpacity>
        <View style={{marginTop: 15, gap: 20}}>
          {faq.map((item, index) => (
            <TouchableOpacity
              style={{
                padding: 15,
                // marginLeft: -5,
                borderRadius: 15,
                justifyContent: 'space-between',
                // paddingBottom: 10,
                flexDirection: 'row',
                backgroundColor: 'white',
                // borderWidth: 1,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 2,
              }}
              key={index}
              onPress={() => toggleAnswer(index)}>
              <View style={{width: '90%'}}>
                <RegularText
                  style={{fontSize: 17, fontFamily: FONTS.Rajdhani.Bold}}>
                  {item.ques}
                </RegularText>
                {expandedIndex === index && (
                  <Text style={{marginTop: 5, color: 'grey'}}>
                    {item.answer}
                  </Text>
                )}
              </View>
              <AntDesign
                name={expandedIndex === index ? 'up' : 'down'}
                size={17}
                color="black"
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </MainLayout>
  );
};

export default DiscussionScreen;
