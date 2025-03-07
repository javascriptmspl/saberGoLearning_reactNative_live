import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ONBOARDED_KEY = '@user_onboarded';
async function checkIfFirstLaunch() {
  try {
    const hasFirstLaunched = await AsyncStorage.getItem(ONBOARDED_KEY);
    if (hasFirstLaunched === null) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}

const useGetOnboardingStatus = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);
  const [isFirstLaunchIsLoading, setIsFirstLaunchIsLoading] = useState(true);

  React.useEffect(() => {
    const init = async () => {
      const firstLaunch = await checkIfFirstLaunch();
      setIsFirstLaunch(firstLaunch);
      setIsFirstLaunchIsLoading(false);
    };
    init();
  }, []);

  return {
    isFirstLaunch: isFirstLaunch,
    isLoading: isFirstLaunchIsLoading,
  };
};

export default useGetOnboardingStatus;
