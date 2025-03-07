import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import {BigText, RegularText, SmallText} from '../../components/MyText';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AccordionItem} from 'react-native-accordion-list-view';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DashboardStackParams, RootStackParams} from '../../navigation/types';
import PrimaryBtn from '../../components/PrimaryBtn';
import {COLORS} from '../../constants/theme';

const data = [
  {
    body: 'asd as d as d as d as d as da sd a sd a sd as d asd ',
    title: 'My Account',
  },
  {
    body: 'asd as d as d as d as d as da sd a sd a sd as d asd ',
    title: 'My Services',
  },
  {
    body: 'asd as d as d as d as d as da sd a sd a sd as d asd ',
    title: 'Payment',
  },
  {
    body: 'asd as d as d as d as d as da sd a sd a sd as d asd ',
    title: 'Vouchers',
  },
  {
    body: 'asd as d as d as d as d as da sd a sd a sd as d asd ',
    title: 'My Support Request',
  },
];

const faq = [
  {
    body: 'To create an account, simply download the Meander app from the App Store or Google Play Store. Open the app and follow the on-screen instructions to sign up using your email address or social media accounts.',
    title: '01.  How do I create an account on the Meander e-learning app?',
  },
  {
    body: 'Once you have created an account and logged in, browse through the available courses on the app. When you find a course you are interested in, click on it to view more details. If you wish to enroll, click on the ""Enroll"" or ""Join Course"" button to access the course materials and start learning.',
    title: '02.  How do I enroll in a course?',
  },
  {
    body: 'Yes, you can access your courses on multiple devices. The Meander app is available for mobile devices and tablets. Simply download the app on your desired device and log in using your account credentials. Your course progress and materials will be synchronized across devices.',
    title: ' 03.  Can I access my courses on multiple devices?',
  },
  {
    body: 'Yes, in most cases, you can download course materials for offline access. Look for the download icon or option within the course module or lesson. Not all courses may offer downloadable content, as it depends on the course creators settings.',
    title: ' 04.  Can I download course materials for offline access?',
  },
  {
    body: 'Meander provides a progress tracking feature within each course. You can view your progress by accessing the course dashboard, which displays completed lessons, quizzes, or assignments. This helps you keep track of your learning journey and pick up where you left off.',
    title: ' 05.  How can I track my progress within a course?',
  },
  {
    body: 'Yes, Meander encourages student interaction and engagement. Depending on the course, you may have access to discussion forums, chat features, or Q&A sections where you can communicate with instructors and fellow students. These interactions provide opportunities to ask questions, seek clarification, and collaborate with others.',
    title: ' 06.  Can I interact with instructors or other students?',
  },
  {
    body: 'Upon successfully completing a course, you may be eligible to receive a certificate of completion. The availability of certificates depends on the course and the instructors settings. If a certificate is offered, you will typically find it in the courses final section or module. Simply follow the instructions to claim your certificate.',
    title: ' 07.  How do I receive a certificate of completion?',
  },
  {
    body: 'If you encounter any technical issues or require support, please reach out to our customer support team. You can contact us through the ""Support"" or ""Help"" section within the app or by emailing [support email address]. Our team will assist you in resolving any problems or answering your questions.',
    title: ' 08.  What if I face technical issues or need support?',
  },
  {
    body: 'The cost of courses on Meander varies depending on the course and instructor. Some courses may be available for free, while others may require a one-time payment or a subscription fee. The pricing details are provided on each courses page, and you will be notified of any charges before enrolling in a paid course.',
    title: ' 09.  Are there any additional fees for accessing courses?',
  },
  {
    body: 'To cancel your subscription or delete your account, please contact our customer support team. They will assist you in managing your subscription or deleting your account according to your request.',
    title: ' 10.  How can I cancel my subscription or delete my account?',
  },
];

type AIProps = {
  title: string;
  body: any;
};

const AI = ({title, body}: AIProps) => {
  const [active, setActive] = React.useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParams>>();
  return (
    <AccordionItem
      customTitle={() => <RegularText>{title}</RegularText>}
      customBody={() => {
        return (
          <View style={{marginTop: 5}}>
            <Text>{body}</Text>
          </View>
        );
      }}
      animationDuration={100}
      isOpen={false}
      onPress={isOpen => {
        if (isOpen) {
          setActive(true);
        } else {
          setActive(false);
        }
      }}
      containerStyle={{
        padding: 5,
        marginLeft: -5,
        marginBottom: 10,
      }}
      customIcon={() => (
        <>
          <Entypo name="chevron-right" size={15} color={'gray'} />
        </>
      )}
    />
  );
};
const FAQ = ({title, body}: AIProps) => {
  const [active, setActive] = React.useState(false);
  return (
    <AccordionItem
      customTitle={() => (
        <RegularText style={{width: '95%'}}>{title}</RegularText>
      )}
      customBody={() => {
        return (
          <View style={{marginTop: 5}}>
            <Text>{body}</Text>
          </View>
        );
      }}
      animationDuration={100}
      isOpen={false}
      onPress={isOpen => {
        if (isOpen) {
          setActive(true);
        } else {
          setActive(false);
        }
      }}
      containerStyle={{
        padding: 5,
        marginLeft: -5,
        marginBottom: 10,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1,
        borderRadius: 0,
      }}
      customIcon={() => (
        <>
          <Entypo name="chevron-right" size={15} color={'gray'} />
        </>
      )}
    />
  );
};
const HelpAndSupport = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackParams>>();
  const [loading, setLoading] = React.useState(false);
  return (
    <MainLayout title="Help & Support" onBack={navigation.goBack}>
      <ScrollView contentContainerStyle={{padding: 20}}>
        {/* <RegularText style={{fontSize: 16}} bold>
          How Can We Help You?
        </RegularText> */}
        {/* <View style={{marginTop: 15}}>
          {data.map((item, index) => {
            return <AI title={item.title} body={item.body} key={index} />;
          })}
        </View> */}
        <RegularText style={{fontSize: 16}} bold>
          How Can We Help You?
        </RegularText>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#FAFAFA',
            height: 40,
            marginTop: 10,
          }}>
          <RegularText style={{fontSize: 16}}>My Account</RegularText>
          <TouchableOpacity>
            <Entypo name="chevron-right" size={15} color={'gray'} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#FAFAFA',
            height: 40,
            marginTop: 10,
          }}>
          <RegularText style={{fontSize: 16}}>My Services</RegularText>
          <TouchableOpacity>
            <Entypo name="chevron-right" size={15} color={'gray'} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#FAFAFA',
            height: 40,
            marginTop: 10,
          }}>
          <RegularText style={{fontSize: 16}}>Payment</RegularText>
          <TouchableOpacity>
            <Entypo name="chevron-right" size={15} color={'gray'} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#FAFAFA',
            height: 40,
            marginTop: 10,
          }}>
          <RegularText style={{fontSize: 16}}>Vouchers</RegularText>
          <TouchableOpacity>
            <Entypo name="chevron-right" size={15} color={'gray'} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#FAFAFA',
            height: 40,
            marginTop: 10,
          }}>
          <RegularText style={{fontSize: 16}}>My Support Request</RegularText>
          <TouchableOpacity>
            <Entypo name="chevron-right" size={15} color={'gray'} />
          </TouchableOpacity>
        </View>
        <RegularText style={{fontSize: 16, marginTop: 20}} bold>
          FAQ
        </RegularText>
        <View style={{marginTop: 15}}>
          {faq.map((item, index) => {
            return <FAQ title={item.title} body={item.body} key={index} />;
          })}
        </View>
        <RegularText style={{color: COLORS.gray, marginTop: 20, fontSize: 13}}>
          If you have any further questions or need assistance, please feel free
          to reach out to us. We are here to support you throughout your
          learning journey on the Meander e-learning app."
        </RegularText>
      </ScrollView>
    </MainLayout>
  );
};

export default HelpAndSupport;
