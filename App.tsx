import React, {useContext, useEffect} from 'react';
import ProfileState from 'context/Profile/ProfileState';
import {Platform, StatusBar} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Dashboard from 'screens/dashboard/Dashboard';
import CustomDrawer from 'screens/drawer/Drawer';
import Greetings from 'components/core/greetings/Greetings';
import ButtonOpenDrawer from 'components/core/buttons/openDrawer/ButtonOpenDrawer';
import ProfileSelect from 'components/core/profileSelect/ProfileSelect';
import ProfileContext from 'context/Profile/ProfileContext';
import useShowPerfilPicker from 'hooks/useShowPerfilPicker';
import ModalState from '~/context/Modal/ModalState';
import {Screens} from '~/settings/Screens';
import HeaderTitle from '~/components/core/header/HeaderTitle';
import {LifeUss} from '~/screens/miniSites/lifeUss/LifeUss';
import {SelfGestion} from '~/screens/miniSites/selfGestion/SelfGestion';
import AuthState from 'context/Auth/AuthState';
import AuthContext from '~/context/Auth/AuthContext';
import {LogIn} from '~/screens/login/Login';
import {ApolloContextProvider} from '~/context/Apollo/ApolloContextProvider';
import BottomNavBar from '~/components/core/bottom-navbar/bottomNavBar';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Library } from '~/screens/miniSites/library';
import { Theme } from '~/styles/Theme';

interface PickerState {
  showModalAndPicker: any;
  togglePerfilPicker: any;
  setTogglePerfilPicker?: any;
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

const DrawerComponent = (props: PickerState) => {
  const {getProfiles, getUserProfile, getTestEnvironment} = useContext(ProfileContext);
  const {
    isLoggedIn,
    setIsLoading,
    authorized,
    setAuthorized,
    getApiAccessToken,
    apiAccessToken,
    getAzureAccessToken,
    azureAccessToken,
  } = useContext(AuthContext);

  /* A hook that called Global Profiles and user Profile */
  useEffect(() => {
    /* A function that is called to now State of all Profiles Global */
    getProfiles();
    /* A function that is called to now State of UserProfile Global */
    getUserProfile();
    /* A function that is called to now State of Test Environment Global */
    getTestEnvironment();
    getAzureAccessToken();
    getApiAccessToken();
    setIsLoading();
    setAuthorized();
  }, [apiAccessToken, azureAccessToken, authorized, isLoggedIn]);

  
  return <Library />;

  // TODO: Deuda: Se debe crear el método isLoading = azureAccessToken = true & apiAccessToken = false
  if (!apiAccessToken) {
    AsyncStorage.clear();
    return <LogIn />;
  } else {
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <Drawer.Navigator
          drawerContent={() => <CustomDrawer />}
          screenOptions={{
            drawerPosition: 'right',
            header: () => null,
          }}
        >
          <Drawer.Screen name={Screens.Name.NavbarNavigationComponent}>
            {() => <BottomTabComponent {...props} />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </>
    );
  }
};

const BottomTabComponent = (props: PickerState) => {
  return (
    <BottomTab.Navigator
      tabBar={props => <BottomNavBar {...props} />}
      screenOptions={{
        header: () => null,
      }}
    >
      <BottomTab.Screen name={Screens.Name.DrawerNavigationComponent}>{() => <StackApp {...props} />}</BottomTab.Screen>
    </BottomTab.Navigator>
  );
};

const StackApp = (props: PickerState) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => <ButtonOpenDrawer />,
        headerLeft: () => null,
        headerTitleAlign: 'left',
        headerStyle: {},
        headerStatusBarHeight: Platform.OS === 'ios' ? 40 : 0,
      }}
    >
      <Stack.Screen
        name={Screens.Name.Home}
        component={Dashboard}
        options={{
          headerTitle: () => (
            <Greetings togglePerfilPicker={props.togglePerfilPicker} showModalAndPicker={props.showModalAndPicker} />
          ),
        }}
      />
      <Stack.Screen
        name={Screens.Name.LifeUss}
        component={LifeUss}
        options={{
          headerTitle: () => <HeaderTitle text={Screens.Name.LifeUss} />,
        }}
      />
      <Stack.Screen
        name={Screens.Name.SelfGestion}
        component={SelfGestion}
        options={{
          headerTitle: () => <HeaderTitle text={Screens.Name.SelfGestion} />,
        }}
      />
    </Stack.Navigator>
  );
};

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: `${Theme.sections.bgSections}`
  },
};

function App() {
  const [showModalAndPicker, togglePerfilPicker] = useShowPerfilPicker(false);
  return (
    <AuthState>
      <ApolloContextProvider>
        <ProfileState>
          <ModalState>
            <SafeAreaProvider>
              <NavigationContainer theme={MyTheme}>
                <ProfileSelect showModalAndPicker={showModalAndPicker} togglePerfilPicker={togglePerfilPicker} />
                <DrawerComponent showModalAndPicker={showModalAndPicker} togglePerfilPicker={togglePerfilPicker} />
              </NavigationContainer>
            </SafeAreaProvider>
          </ModalState>
        </ProfileState>
      </ApolloContextProvider>
    </AuthState>
  );
}

export default App;
