import React, {useCallback, useEffect} from 'react';
import {Linking, StatusBar} from 'react-native';

import {useTheme, useTranslation} from '../../hooks';
import {Block, Button, Image, Text} from '../../components';
import { ScrollView } from 'react-native-gesture-handler';

const Approvals = () => {
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
        <Block card flex={0} padding={sizes.sm} marginBottom={sizes.sm}>
          <Text h5>Цалингийн тодорхойлолт</Text>
          <Block
            row
            flex={0}
            justify="space-evenly"
            marginVertical={sizes.padding}>
          </Block>
          <Button
            gradient={gradients.primary}>
            <Text white bold transform="uppercase">
              тодорхойлолт хүсэх
            </Text>
          </Button>
        </Block>
        <Block card flex={0} padding={sizes.sm} marginBottom={sizes.sm}>

          <Text h5>Кард алга болгосон</Text>
          <Block
            row
            flex={0}
            justify="space-evenly"
            marginVertical={sizes.padding}>
          </Block>
          <Button
            gradient={gradients.primary}>
            <Text white bold transform="uppercase">
              Кард захиалах
            </Text>
          </Button>
        </Block>
        <Block card flex={0} padding={sizes.sm} marginBottom={sizes.sm}>

          <Text h5>Ажилын тодорхойлолт</Text>
          <Block
            row
            flex={0}
            justify="space-evenly"
            marginVertical={sizes.padding}>
          </Block>
          <Button
            gradient={gradients.primary}>
            <Text white bold transform="uppercase">
              тодорхойлолт хүсэх
            </Text>
          </Button>
        </Block>
        <Block card flex={0} padding={sizes.sm} marginBottom={sizes.sm}>
          <Text h5>Ажилаас гарах хүсэлт</Text>
          <Block
            row
            flex={0}
            justify="space-evenly"
            marginVertical={sizes.padding}>
          </Block>
          <Button
            gradient={gradients.primary}>
            <Text white bold transform="uppercase">
              хүсэлт хүсэх
            </Text>
          </Button>
        </Block>
      </Block>
      </ScrollView>
    </Image>
  );
};

export default Approvals;
