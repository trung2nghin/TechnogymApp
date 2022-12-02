import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';
import LinearGradient from 'react-native-linear-gradient';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';

import { LoginStackNavigationProp } from '@src/navigation/Stacks/login-stack';
import { Container, LoginButton } from '../components';
import { Colors, Metrics, Clips } from '@src/assets';

const ITEM_HEIGHT = Metrics.screen.height * 0.8;

const WelcomeScreen: FC<LoginStackNavigationProp> = ({ navigation }) => {
  return (
    <Container header>
      <Video
        source={Clips.sport}
        style={styles.backgroundVideo}
        muted={true}
        repeat={true}
        resizeMode={'cover'}
        rate={1.0}
        ignoreSilentSwitch={'obey'}
      />
      <LinearGradient
        colors={[Colors.black, Colors.transparentBlack]}
        style={styles.gradientHeader}>
        <TouchableOpacity>
          <IoniconsIcons
            name="settings-outline"
            size={24}
            style={{ color: Colors.white }}
          />
        </TouchableOpacity>
        <Text style={styles.textHeader}>APP SETTINGS</Text>
      </LinearGradient>
      <BottomSheet
        index={0}
        backgroundStyle={{ backgroundColor: Colors.white }}
        snapPoints={[
          Metrics.screen.height - ITEM_HEIGHT,
          Metrics.screen.height,
        ]}>
        <View style={styles.footer}></View>
      </BottomSheet>
      <View style={[styles.footer, styles.viewTrick]}>
        <LoginButton
          textContent={'LOG IN'}
          backgroundColor={Colors.white}
          textColor={Colors.black}
          navigation={() => navigation.navigate('LOGIN_INPUT')}
          disabled={false}
          icon={false}
          loading={false}
        />
        <LoginButton
          textContent={'JOIN THE CLUB'}
          backgroundColor={Colors.black}
          textColor={Colors.white}
          navigation={() => navigation.navigate('REGISTER_INPUT')}
          disabled={false}
          icon={false}
          loading={false}
        />
      </View>
    </Container>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientHeader: {
    height: Metrics.screen.height / 11,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Metrics.screen.width / 20,
  },
  textHeader: {
    fontFamily: 'NotoSans-Bold',
    color: Colors.white,
    fontSize: 13,
    letterSpacing: 1,
    marginLeft: Metrics.screen.width / 15,
  },
  backgroundVideo: {
    height: '90%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  viewTrick: { top: Metrics.screen.height - Metrics.screen.height / 3.675 },
  footer: {
    paddingHorizontal: Metrics.screen.width / 25,
    justifyContent: 'center',
    width: '100%',
    height: Metrics.screen.height / 5.6,
    backgroundColor: Colors.white,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});
