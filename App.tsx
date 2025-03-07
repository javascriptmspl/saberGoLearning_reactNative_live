import React from 'react';
import {View, StatusBar, Alert} from 'react-native';
import RootNavigator from './app/navigation/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {SheetProvider} from 'react-native-actions-sheet';
import NetInfo from '@react-native-community/netinfo';
import {Provider} from 'react-redux';
import {store} from './app/redux';
import './app/sheets/sheets';
// =======> LOG BOX
import './app/utils/ignoreWarnings';
import NetworkModal from './app/components/NetworkModal';
const App = () => {
  const [isNetwork, setIsNetwork] = React.useState<boolean | null>(true);
  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      NetInfo.fetch().then(state => {
        // set(state.isInternetReachable)
        setIsNetwork(state.isInternetReachable);
      });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  console.log({isNetwork}, '----------');

  return (
    <Provider store={store}>
      {isNetwork || <NetworkModal />}
      <SheetProvider>
        <View style={{flex: 1}}>
          <StatusBar translucent backgroundColor="transparent" />
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </View>
      </SheetProvider>
    </Provider>
  );
};
export default App;
