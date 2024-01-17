import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Articles, Components, Home, Profile, Register, Pro, Carpicker, Tablepicker, Timeregister} from '../screens';
import {useScreenOptions, useTranslation} from '../hooks';
import Notification from '../components/Notification';
import Approvals from '../screens/Approvals/Approvals';

const Stack = createStackNavigator();

export default () => {
  const {t} = useTranslation();
  const screenOptions = useScreenOptions();

  return (
    <Stack.Navigator screenOptions={screenOptions.stack}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: t('navigation.home')}}
      />

      <Stack.Screen
        name="Components"
        component={Components}
        options={screenOptions.components}
      />

      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{title: t('navigation.articles')}}
      />

      <Stack.Screen name="Pro" component={Pro} options={screenOptions.pro} />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name="Notifications"
        component={Notification}
      />
      <Stack.Screen 
        name='Approvals'
        component={Approvals}
      />
      <Stack.Screen 
        name='Машин захиалах'
        component={Carpicker}
      />
      <Stack.Screen 
        name='Ширээ захиалах'
        component={Tablepicker}
      />
      <Stack.Screen 
        name='Timeregister'
        component={Timeregister}
      />
    </Stack.Navigator>
  );
};
