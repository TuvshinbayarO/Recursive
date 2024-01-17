import React, {useCallback, useState} from 'react';
import {Platform, Linking} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/core';

import {Block, Button, Image, Input, Text} from '../components/';
import {useData, useTheme, useTranslation} from '../hooks/';

const isAndroid = Platform.OS === 'android';

const Profile = () => {
  const {user} = useData();
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {assets, colors, sizes} = useTheme();
  const IMAGE_SIZE = (sizes.width - (sizes.padding + sizes.sm) * 2) / 3;
  const IMAGE_VERTICAL_SIZE =
    (sizes.width - (sizes.padding + sizes.sm) * 2) / 2;
  const IMAGE_MARGIN = (sizes.width - IMAGE_SIZE * 3 - sizes.padding * 2) / 2;
  const IMAGE_VERTICAL_MARGIN =
    (sizes.width - (IMAGE_VERTICAL_SIZE + sizes.sm) * 2) / 2;

  const handleSocialLink = useCallback(
    (type: 'twitter' | 'dribbble') => {
      const url =
        type === 'twitter'
          ? `https://twitter.com/${user?.social?.twitter}`
          : `https://dribbble.com/${user?.social?.dribbble}`;

      try {
        Linking.openURL(url);
      } catch (error) {
        alert(`Cannot open URL: ${url}`);
      }
    },
    [user],
  );

  return (
    <Block safe marginTop={sizes.md}>
      <Block
        scroll
        paddingHorizontal={sizes.s}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: sizes.padding}}>
        <Block flex={0}>
          <Image
            background
            resizeMode="cover"
            padding={sizes.sm}
            paddingBottom={sizes.l}
            radius={sizes.cardRadius}
            source={assets.background}>
            <Button
              row
              flex={0}
              justify="flex-start"
              onPress={() => navigation.goBack()}>
              <Image
                radius={0}
                width={10}
                height={18}
                color={colors.white}
                source={assets.arrow}
                transform={[{rotate: '180deg'}]}
              />
              <Text p white marginLeft={sizes.s}>
                {t('profile.title')}
              </Text>
            </Button>
            <Block flex={0} align="center">
              <Image
                width={64}
                height={64}
                marginBottom={sizes.sm}
                source={{uri: user?.avatar}}
              />
              <Text h5 white semibold marginBottom={sizes.s} marginTop={sizes.sm}>
              ITS DPDED Software engineer 
            </Text>
            <Image style={{width: 150, height: 150, borderRadius: 300}} source={require('../assets/images/Image.jpeg')} />
            <Text></Text>
              <Text p center white>
                О. Түвшинбаяр
              </Text>
              <Block row marginVertical={sizes.m}>
              </Block>
            </Block>
          </Image>

          {/* profile: stats */}
          <Block
            flex={0}
            radius={sizes.sm}
            shadow={!isAndroid} // disabled shadow on Android due to blur overlay + elevation issue
            marginTop={-sizes.l}
            marginHorizontal="8%"
            color="rgba(255,255,255,0.2)">
            <Block
              row
              blur
              flex={0}
              intensity={100}
              radius={sizes.sm}
              overflow="hidden"
              tint={colors.blurTint}
              justify="space-evenly"
              paddingVertical={sizes.sm}
              renderToHardwareTextureAndroid>
              <Block align="center">
                <Text h5>{user?.stats?.posts}</Text>
                <Text>Зааварчилгаа</Text>
              </Block>
              <Block align="center">
                <Text h5>{(user?.stats?.followers || 0) / 1000}k</Text>
                <Text>Идвэхи</Text>
              </Block>
              <Block align="center">
                <Text h5>{(user?.stats?.following || 0) / 1000}k</Text>
                <Text>Сэтгэгдэл</Text>
              </Block>
            </Block>
          </Block>

          {/* profile: about me */}
          <Block paddingHorizontal={sizes.sm}>
            {/* <Text p lineHeight={26}>
              {user?.about}
            </Text> */}
          </Block>

          {/* profile: photo album */}
          <Block paddingHorizontal={sizes.sm} marginTop={sizes.s}>
            <Block row align="center" justify="space-between">
              <Text h5 semibold>
                Edit Profile
              </Text>
              {/* <Button>
                <Text p primary semibold>
                  {t('common.viewall')}
                </Text>
              </Button> */}
            </Block>
            <Block row justify="space-between" wrap="wrap">
              <Input style={{width: 180}} success placeholder="Нэр" marginBottom={sizes.sm} marginTop={sizes.sm} />
              <Input style={{width: 180}} success placeholder="Овог" marginBottom={sizes.sm} marginTop={sizes.sm} />
              <Input style={{width: 180}} success placeholder="Төрсөн он сар" marginBottom={sizes.sm} />
              <Input keyboardType='numeric' style={{width: 180}} numberOfLines={8} success placeholder="Утас" marginBottom={sizes.sm} />
              <Input style={{width: 180}} success placeholder="Гэрийн хаяг" marginBottom={sizes.sm} />
              <Input style={{width: 180}} success placeholder="Ажил үүрэг" marginBottom={sizes.sm} />
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default Profile;
