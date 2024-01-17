import React, {useCallback, useEffect} from 'react';
import {Linking, StatusBar} from 'react-native';

import {useTheme, useTranslation} from '../hooks';
import {Block, Button, Image, Text} from '../components';
import { ScrollView } from 'react-native-gesture-handler';

const Notification = () => {
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

          <Text>Өнөөдөр</Text>
          <Text></Text>
          <Image
              source={require('../assets/images/Image.jpeg')}
              style={{height: 82, width: 82}}
            />
            <Text></Text>
            <Text>Түвшинбаяр төрсөн өдөр 🎂🎂🎂</Text>
          <Block
            row
            flex={0}
            justify="space-evenly"
            marginVertical={sizes.padding}>
          </Block>
          <Button
            gradient={gradients.primary}>
            <Text white bold transform="uppercase">
              Төрсөн өдөрийн мэнд хүргэх
            </Text>
          </Button>
        </Block>
        <Block card flex={0} padding={sizes.sm} marginBottom={sizes.sm}>

          <Text>Өнөөдөр</Text>
          <Text></Text>
          <Image
              source={require('../assets/images/Image.jpeg')}
              style={{height: 82, width: 82}}
            />
            <Text></Text>
            <Text>Түвшинбаяр төрсөн өдөр 🎂🎂🎂</Text>
          <Block
            row
            flex={0}
            justify="space-evenly"
            marginVertical={sizes.padding}>
          </Block>
          <Button
            gradient={gradients.primary}>
            <Text white bold transform="uppercase">
              Төрсөн өдөрийн мэнд хүргэх
            </Text>
          </Button>
        </Block>
        <Block card flex={0} padding={sizes.sm} marginBottom={sizes.sm}>

          <Text>Өнөөдөр</Text>
          <Text></Text>
          <Image
              source={require('../assets/images/Image.jpeg')}
              style={{height: 82, width: 82}}
            />
            <Text></Text>
            <Text>Түвшинбаяр төрсөн өдөр 🎂🎂🎂</Text>
          <Block
            row
            flex={0}
            justify="space-evenly"
            marginVertical={sizes.padding}>
          </Block>
          <Button
            gradient={gradients.primary}>
            <Text white bold transform="uppercase">
              Төрсөн өдөрийн мэнд хүргэх
            </Text>
          </Button>
        </Block>
        <Block card flex={0} padding={sizes.sm} marginBottom={sizes.sm}>

          <Text>Өнөөдөр</Text>
          <Text></Text>
          <Image
              source={require('../assets/images/Image.jpeg')}
              style={{height: 82, width: 82}}
            />
            <Text></Text>
            <Text>Түвшинбаяр төрсөн өдөр 🎂🎂🎂</Text>
          <Block
            row
            flex={0}
            justify="space-evenly"
            marginVertical={sizes.padding}>
          </Block>
          <Button
            gradient={gradients.primary}>
            <Text white bold transform="uppercase">
              Төрсөн өдөрийн мэнд хүргэх
            </Text>
          </Button>
        </Block>
      </Block>
      </ScrollView>
    </Image>
  );
};

export default Notification;
