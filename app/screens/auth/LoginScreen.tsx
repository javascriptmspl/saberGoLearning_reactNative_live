import { View, Alert, TouchableOpacity, TextInput, Image } from "react-native";
import React from "react";
import { COLORS } from "../../constants/theme";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Fontisto from "react-native-vector-icons/Fontisto";
import { RegularText, SmallText } from "../../components/MyText";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigation/types";
import MainLayout from "../../components/Layout/MainLayout";
import PrimaryBtn from "../../components/PrimaryBtn";
import { Formik } from "formik";
import * as yup from "yup";
import { api_login } from "../../api/auth";
import { useDispatch } from "react-redux";
import { setAuth } from "../../redux/feature/auth/authSlice";
import CheckBox from "@react-native-community/checkbox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOCAL_KEYS } from "../../utils/helper";
import { ONBOARDED_KEY } from "../../hooks/useGetOnboardingStatus";
import TeritaryBtn from "../../components/Layout/TeritaryBtn";

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email.")
    .required("* Email address is required *"),
  password: yup.string().min(8).required("* Password is required *"),
});

const checkRememberMe = async () => {
  try {
    const res = await LOCAL_KEYS.REMEMBER_ME;
    if (res) {
      AsyncStorage.getItem;
      return JSON.parse(res);
    } else {
      return null;
    }
  } catch (error: any) {
    console.log(error);
  }
};
const saveRememberMe = async (data: { id: string; pass: string }) => {
  try {
    await AsyncStorage.setItem(LOCAL_KEYS.REMEMBER_ME, JSON.stringify(data));
  } catch (error: any) {
    console.log(error);
  }
};
const removeRememberMe = async () => {
  try {
    await AsyncStorage.removeItem(LOCAL_KEYS.REMEMBER_ME);
  } catch (error: any) {
    console.log(error);
  }
};

const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [loading, setLoading] = React.useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [termsAccepted, setTermsAccepted] = React.useState(false);

  const [defaultVal, setDefaultVal] = React.useState(null);

  const dispatch = useDispatch();

  // sukhsukhwinder614@gmail.com
  // SUKH5982

  const handleLogin = async (data: any) => {
    if (termsAccepted) {
      saveRememberMe({ id: data?.email, pass: data?.password });
    } else {
      removeRememberMe();
    }

    try {
      setLoading(true);
      const res = await api_login(data);
      dispatch(setAuth(res?.data));
      await AsyncStorage.setItem(
        LOCAL_KEYS.IS_NEWLY_INSTALLED,
        JSON.stringify(false)
      );
      await AsyncStorage.setItem(ONBOARDED_KEY, ONBOARDED_KEY);
    } catch (error: any) {
      Alert.alert("Alert", error.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    const init = async () => {
      try {
        const res = await checkRememberMe();
        if (!res) return;
        setDefaultVal(res);
      } catch (error) {
        console.log(error);
      }
    };

    init();
  }, []);

  console.log({ defaultVal });

  return (
    <MainLayout title="Sign In Your Account" onBack={navigation.goBack}>
      <Formik
        enableReinitialize={true}
        initialValues={{
          email: defaultVal ? defaultVal?.id : "",
          password: defaultVal ? defaultVal?.pass : "",
        }}
        validateOnMount={true}
        validationSchema={LoginSchema}
        onSubmit={(res) => {
          console.log(res);
          handleLogin(res);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          setFieldTouched,
          isValid,
          handleSubmit,
          handleBlur,
        }) => (
          <View
            style={{
              flex: 1,
            }}
          >
            <View
              style={{
                height: 205,
                width: "65%",
                backgroundColor: "white",
                marginTop: 25,
                marginLeft: 65,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../../assets/images/signInImg.png")}
                style={{
                  resizeMode: "contain",
                  width: 240,
                  height: 240,
                }}
              />
            </View>
            <RegularText style={{ marginTop: 15, fontSize: 14 }}>
              Email
            </RegularText>

            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                alignItems: "center",
                borderTopColor: "white",
                borderLeftColor: "transparent",
                borderRightColor: "white",
                borderBottomColor: COLORS.lightBlue,
              }}
            >
              <Fontisto
                style={{ marginLeft: 0.5 }}
                onPress={() => navigation.goBack()}
                name="email"
                size={18}
                color={COLORS.lightBlue}
              />
              <View style={{ flex: 1 }}>
                <TextInput
                  style={{
                    color: COLORS.lightBlue,
                    height: 40,
                    marginLeft: 5,
                    // backgroundColor: 'orange',
                    width: "85%",
                    marginRight: 10,
                  }}
                  placeholder="example@gmail.com"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={() => setFieldTouched("email")}
                />
              </View>
              <AntDesign
                style={{}}
                onPress={() => navigation.goBack()}
                name="checkcircle"
                size={18}
                color={COLORS.lightBlue}
              />
            </View>
            {touched.email && errors.email && (
              <SmallText
                style={{
                  color: "red",
                  marginLeft: 10,
                  marginTop: 5,
                }}
              >
                {errors.email}
              </SmallText>
            )}

            <RegularText style={{ marginTop: 15, fontSize: 14 }}>
              Password
            </RegularText>

            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                alignItems: "center",
                borderTopColor: "white",
                borderLeftColor: "transparent",
                borderRightColor: "white",
                borderBottomColor: COLORS.gray,
              }}
            >
              <AntDesign
                name={isPasswordVisible ? "unlock" : "lock1"}
                size={18}
                color={"gray"}
              />
              <View style={{ flex: 1 }}>
                <TextInput
                  style={{
                    color: COLORS.black,
                    height: 40,
                    marginLeft: 5,
                    width: "85%",
                    marginRight: 10,
                  }}
                  placeholder=""
                  secureTextEntry={!isPasswordVisible}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={() => setFieldTouched("password")}
                />
              </View>

              <Feather
                style={{}}
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                name={isPasswordVisible ? "eye-off" : "eye"}
                size={18}
                color={"gray"}
              />
            </View>
            {touched.password && errors.password && (
              <SmallText
                style={{
                  color: "red",
                  marginLeft: 10,
                  marginTop: 5,
                }}
              >
                {errors.password}
              </SmallText>
            )}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <CheckBox
                  disabled={false}
                  value={termsAccepted}
                  onValueChange={(newValue) => setTermsAccepted(newValue)}
                />
                <SmallText style={{ opacity: 0.4 }}>Remember me</SmallText>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <SmallText style={{ opacity: 0.4 }}>
                  Forgot Password ?
                </SmallText>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: "space-between",
                paddingHorizontal: 20,
                paddingVertical: 20,
                alignItems: "center",
              }}
            >
              <TeritaryBtn
                loading={loading}
                text={"Sign In"}
                onPress={() => {
                  handleSubmit();
                }}
              />
            </View>
          </View>
        )}
      </Formik>
    </MainLayout>
  );
};

export default LoginScreen;
