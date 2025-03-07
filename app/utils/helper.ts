import AsyncStorage from '@react-native-async-storage/async-storage';
import {Share} from 'react-native';

export const LOCAL_KEYS = {
  AUTH: 'AUTH',
  IS_NEWLY_INSTALLED: 'IS_NEWLY_INSTALLED',
  REMEMBER_ME: 'REMEMBER_ME',
};

const setLocalUser = async (value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(LOCAL_KEYS.AUTH, jsonValue);
    console.log('local user set');
  } catch (e: any) {
    throw new Error(e.message);
  }
};
const getLocalUser = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(LOCAL_KEYS.AUTH);
    if (jsonValue === null) return null;
    return JSON.parse(jsonValue);
  } catch (e: any) {
    throw new Error(e?.message);
  }
};
const destroyLocalStorage = async () => {
  try {
    
    await AsyncStorage.removeItem(LOCAL_KEYS.AUTH);
    await AsyncStorage.setItem(
      LOCAL_KEYS.IS_NEWLY_INSTALLED,
      JSON.stringify(false),
    );
  } catch (e: any) {
    throw new Error(e?.message);
  }
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export {setLocalUser, getLocalUser, destroyLocalStorage, getRandomColor};

export const onShareCourse = async ({courseLink}: {courseLink: string}) => {
  try {
    const result = await Share.share({
      title: 'Meander Live',
      message: 'https://meander.live:1000/specs',
    });
    console.log('onShare', result);
  } catch (error: any) {
    console.log('onShare', error);
  }
};
