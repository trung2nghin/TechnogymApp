import React, { FC } from 'react';
import { RootStackNavigationProp } from '@src/navigation/configs';
import { StyleSheet, View, Text } from 'react-native';
import { LoginButton } from '../components';
import { Colors, Metrics } from '@src/assets';
import { Clips } from '@src/assets';
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LoginScreen: FC<RootStackNavigationProp> = ({ navigation }) => {
  return (
    <View style={styles.container}>
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

      <View style={styles.footer}>
        <LoginButton
          textContent={'LOG IN'}
          backgroundColor={Colors.white}
          textColor={Colors.black}
          navigation={navigation}
          disabled={false}
          icon={false}
          direction={'LOGININPUT'}
          loading={false}
        />
        <LoginButton
          textContent={'JOIN THE CLUB'}
          backgroundColor={Colors.black}
          textColor={Colors.white}
          navigation={navigation}
          disabled={false}
          icon={false}
          direction={'REGISTERINPUT'}
          loading={false}
        />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  gradientHeader: {
    height: Metrics.screen.height / 11,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Metrics.screen.width / 20,
  },
  textHeader: {
    fontFamily: 'NotoSans-Medium',
    color: Colors.white,
    fontSize: 15,
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
