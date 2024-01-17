import React, {useCallback, useEffect} from 'react';
import {ImageBackground, Linking, StatusBar} from 'react-native';

import {useTheme, useTranslation} from '../../hooks';
import {Block, Button, Image, Text} from '../../components';
import { ScrollView } from 'react-native-gesture-handler';

const Carpicker = () => {
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
        <Text></Text>
        <ImageBackground source={require('../../assets/images/gle.png')} resizeMode='cover'>
        <Block flex={0} padding={sizes.sm} marginBottom={sizes.sm}>
          <Text white h5>MPM Office</Text>
          <Block
            row
            flex={0}
            justify="space-evenly"
            marginVertical={sizes.padding}>
          </Block>
          <Button
            gradient={gradients.primary}>
            <Text white bold transform="uppercase">
              Машин захиалах
            </Text>
          </Button>
        </Block>
        </ImageBackground>
        <Text></Text>
        <ImageBackground source={require('../../assets/images/gle.png')} resizeMode='cover'>
        <Block flex={0} padding={sizes.sm} marginBottom={sizes.sm}>
          <Text white h5>TCP 1</Text>
          <Block
            row
            flex={0}
            justify="space-evenly"
            marginVertical={sizes.padding}>
          </Block>
          <Button
            gradient={gradients.primary}>
            <Text white bold transform="uppercase">
              Машин захиалах
            </Text>
          </Button>
        </Block>
        </ImageBackground> 
      </Block>
      </ScrollView>
    </Image>
  );
};

export default Carpicker;
