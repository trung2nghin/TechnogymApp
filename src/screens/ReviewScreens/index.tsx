import React, { FC } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Colors, Metrics } from '@src/assets';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LoginButton } from '../components';

const star = [1, 2, 3, 4, 5];
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ReviewScreen: FC<any> = ({ navigation }) => {
  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.starIcon}>
          {star.map((e, i) => (
            <Ionicons
              key={i}
              name="star-sharp"
              size={32}
              style={{ color: Colors.black, padding: 1 }}
            />
          ))}
        </View>
        <Text style={styles.textCardHeader}>NOV 28, 2022</Text>
      </View>

      <View style={styles.cardBody}>
        <Text style={styles.text01}>SO WORTH IT</Text>
        <Text style={styles.text02}>
          So comfortable and just so impressed with these shoes. Look even
          better in person
        </Text>
        <View style={styles.recommend}>
          <IoniconsIcons
            name="ios-checkmark-circle-sharp"
            size={18}
            style={{
              color: Colors.mediumseagreen,
              marginRight: Metrics.screen.width / 80.5,
            }}
          />
          <Text style={styles.text03}> RECOMMENDS THIS PRODUCT</Text>
        </View>
      </View>

      <View style={styles.cardFooter}>
        <Text style={styles.text03}>RYAN</Text>
        <Text style={styles.text04}>VERIFIED PURCHASER</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>435 REVIEWS</Text>
        <View style={styles.starIcon}>
          {star.map((e, i) => (
            <Ionicons
              key={i}
              name="star-sharp"
              size={32}
              style={{ color: Colors.black, padding: 1 }}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.closeIcon}>
          <IoniconsIcons
            name="close-outline"
            size={30}
            style={{
              color: Colors.black,
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.reviewInput}>
        <Text style={styles.reviewInputText}>Tell other what you thought</Text>
        <LoginButton
          textContent={'WRITE A REVIEW'}
          backgroundColor={Colors.black}
          textColor={Colors.white}
          // navigation={() => navigation.navigate('LOGIN_INPUT')}
          disabled={false}
          icon={false}
          loading={false}
        />
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.toString()}
        ListFooterComponent={() => <View style={{ height: 20 }} />}
      />
    </View>
  );
};

export default ReviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: Metrics.screen.height / 7.75,
    borderBottomWidth: 1,
    borderColor: Colors.gainsboro,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    fontFamily: 'NotoSans-ExtraBold',
    color: Colors.black,
    fontSize: 13,
    letterSpacing: 0.5,
  },
  starIcon: {
    flexDirection: 'row',
  },
  closeIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
    marginTop: 10,
    marginRight: 10,
  },
  reviewInput: {
    paddingHorizontal: Metrics.screen.width / 16,
    height: Metrics.screen.height / 6,
    justifyContent: 'center',
  },
  reviewInputText: {
    textAlign: 'center',
    marginBottom: Metrics.screen.height / 90,
    fontFamily: 'NotoSans-Bold',
    color: Colors.black,
    fontSize: 16,
  },
  card: {
    width: '95%',
    height: Metrics.screen.height / 3.1,
    borderColor: Colors.gainsboro,
    borderBottomWidth: 1,
    alignItems: 'center',
    alignSelf: 'center',
  },
  cardHeader: {
    width: '100%',
    height: Metrics.screen.height / 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.screen.width / 25,
    alignItems: 'center',
    marginTop: Metrics.screen.height / 28,
    marginBottom: Metrics.screen.height / 90,
  },
  textCardHeader: {
    fontFamily: 'NotoSans-Regular',
    color: Colors.black,
    fontSize: 13.5,
  },
  cardBody: {
    height: Metrics.screen.height / 6.3,
    width: '93%',
    borderColor: Colors.gainsboro,
    borderBottomWidth: 1,
  },
  recommend: {
    flexDirection: 'row',
    height: Metrics.screen.height / 30,
    alignItems: 'center',
  },
  text01: {
    fontFamily: 'NotoSans-Bold',
    color: Colors.black,
    fontSize: 14,
    marginBottom: Metrics.screen.height / 70,
  },
  text02: {
    fontFamily: 'NotoSans-Medium',
    color: Colors.grey,
    fontSize: 13,
    marginBottom: Metrics.screen.height / 70,
  },
  text03: {
    fontFamily: 'NotoSans-Bold',
    color: Colors.black,
    fontSize: 13,
    lineHeight: 18,
  },
  cardFooter: {
    width: '93%',
    height: Metrics.screen.height / 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text04: {
    fontFamily: 'NotoSans-Medium',
    color: Colors.dimGray,
    fontSize: 15,
    marginLeft: Metrics.screen.width / 20,
    lineHeight: 24,
  },
});
