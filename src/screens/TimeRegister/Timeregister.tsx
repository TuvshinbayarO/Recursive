import React, {useCallback, useEffect} from 'react';
import {ImageBackground, Linking, StatusBar} from 'react-native';

import {useTheme, useTranslation} from '../../hooks';
import {Block, Button, Image, Text} from '../../components';
import { ScrollView } from 'react-native-gesture-handler';

const Timeregister = () => {
  const {t} = useTranslation();
  const {assets, colors, gradients, sizes} = useTheme();

  useEffect(() => {
    StatusBar.setBarStyle('light-content');
    return () => {
      StatusBar.setBarStyle('dark-content');
    };
  }, []);

  return (
    <Image
      background
      source={assets.background}
      padding={sizes.padding}
      style={{flex: 1}}>
      <ScrollView>
        <Block safe justify="center">
        <Block flex={0} padding={sizes.sm} marginBottom={sizes.sm}>
          <Text white h3>Цаг бүртгэл</Text>
          <Block
            row
            flex={1}
            justify="space-evenly"
            marginVertical={sizes.padding}>
          </Block>
          <Image style={{width: 350, height: 350}} source={require('../../assets/images/nfc.png')} />
        </Block>
      </Block>
      </ScrollView>
    </Image>
  );
};

export default Timeregister;
