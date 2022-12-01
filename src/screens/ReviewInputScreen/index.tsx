import React, { FC, useCallback } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useForm } from 'react-hook-form';

import { Colors, Metrics } from '@src/assets';
import { DescribeForm, LoginButton } from '../components';

const ReviewInputScreen: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      productId: '',
      userId: '',
      username: '',
      desc: '',
    },
  });

  const onSubmit = useCallback(data => {
    // dispatch(loginThunk(data));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <View>
          <Text style={styles.textBody}>
            Sum up your opinion about this product in one sentence
          </Text>
          <DescribeForm
            control={control}
            secureTextEntry={false}
            rules={{
              maxLength: {
                value: 20,
                message: 'Exceeded allowed characters',
              },
              required: { value: true, message: 'Required Information' },
            }}
            name={'desc'}
            error={errors?.desc?.message}
            placeholder={'DESCRIBE'}
            autofocus={true}
          />
        </View>

        <View style={styles.bodyFooter}>
          <LoginButton
            textContent={'NEXT'}
            backgroundColor={Colors.black}
            textColor={Colors.white}
            // disabled={loading}
            icon={false}
            form={true}
            // submit={handleSubmit(onSubmit)}
            // loading={loading}
          />
        </View>
      </View>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c687d94b5654d4bb435a97f00d5a475_9366/Giay_Grand_Court_trang_F36392_01_standard.jpg',
        }}
      />
    </View>
  );
};

export default ReviewInputScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: Metrics.screen.height / 6,
    backgroundColor: 'black',
  },
  body: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: Metrics.screen.width / 25,
    justifyContent: 'space-between',
  },
  textBody: {
    width: '100%',
    height: Metrics.screen.height / 10,
    textAlign: 'center',
    fontFamily: 'NotoSans-Bold',
    color: Colors.black,
    fontSize: 20,
    marginTop: Metrics.screen.height / 13,
    marginBottom: Metrics.screen.height / 20,
  },
  bodyFooter: {
    marginBottom: Metrics.screen.height / 40,
  },
  image: {
    width: 100,
    height: 100,
    position: 'absolute',
    alignSelf: 'center',
    top: Metrics.screen.height / 10,
  },
});
