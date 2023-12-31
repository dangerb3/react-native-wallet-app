import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Welcome from './screens/Welcome';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
// import Entypo from '@expo/vector-icons/Entypo';


import React, { useCallback, useEffect, useState } from 'react';
import RootStack from './navigators/RootStack';


// export default function App() {
//   const [appIsReady, setAppIsReady] = useState(false);

//   useEffect(() => {
//     async function prepare() {
//       try {
//         // Keep the splash screen visible while we fetch resources
//         await SplashScreen.preventAutoHideAsync();
//         // Pre-load fonts, make any API calls you need to do here
//         await Font.loadAsync({
//           'Lato-Bold': require("./assets/fonts/Lato-Bold.ttf"),
//           'Lato-Regular': require("./assets/fonts/Lato-Regular.ttf")
//         });
//         // Artificially delay for two seconds to simulate a slow loading
//         // experience. Please remove this if you copy and paste the code!
//         // await new Promise(resolve => setTimeout(resolve, 2000));
//       } catch (e) {
//         console.warn(e);
//       } finally {

//         setAppIsReady(true);
//       }
//     }

//     prepare();
//   }, []);

//   const onLayoutRootView = useCallback(async () => {
//     if (appIsReady) {
//       console.log(232)
//       // This tells the splash screen to hide immediately! If we call this after
//       // `setAppIsReady`, then we may see a blank screen while the app is
//       // loading its initial state and rendering its first pixels. So instead,
//       // we hide the splash screen once we know the root view has already
//       // performed layout.
//       await SplashScreen.hideAsync();
//     }
//   }, [appIsReady]);

//   if (!appIsReady) {
//     return null;
//   }

//   return (
//     <View onLayout={onLayoutRootView}>
//       <Text>SplashScreen Demo! 👋</Text>
//       {/* <Entypo name="rocket" size={30} /> */}
//       <Welcome />
//     </View>
//   );
// }



// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          'Lato-Bold': require("./assets/fonts/Lato-Bold.ttf"),
          'Lato-Regular': require("./assets/fonts/Lato-Regular.ttf")
        });


        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  console.log(appIsReady)

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return <Text>Loading</Text>;
  }

  return (
    // <View onLayout={onLayoutRootView}>
    // <Welcome />

    <RootStack />
  );
}