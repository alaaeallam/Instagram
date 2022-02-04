/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import {Image, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from './src/theme/colors';

import fonts from './src/theme/fonts';
const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.post}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={{
              uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
            }}
            style={styles.userAvatar}
          />
          <Text style={styles.username}>Alaa Allam</Text>
          <Entypo name="dots-three-horizontal" size={16} style={styles.dots} />
        </View>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
          }}
          style={styles.image}
        />
        <View style={styles.footer}>
          <View style={styles.iconContainer}>
            <AntDesign
              name={'hearto'}
              size={24}
              style={styles.icons}
              color={colors.black}
            />
            <Ionicons
              name="chatbubble-outline"
              size={24}
              style={styles.icons}
              color={colors.black}
            />
            <Feather
              name="send"
              size={24}
              style={styles.icons}
              color={colors.black}
            />
            <Feather
              name="bookmark"
              size={24}
              style={{marginLeft: 'auto'}}
              color={colors.black}
            />
          </View>
          <Text style={styles.text}>
            Liked by<Text style={styles.bold}> Lolo</Text> and{' '}
            <Text style={styles.bold}> 66 others</Text>
          </Text>
          <Text style={styles.text}>
            {' '}
            <Text style={styles.bold}>Alaa Allam</Text> Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Dolorum cumque minus delectus!
            Obcaecati neque voluptate fuga laudantium aperiam natus voluptas
            saepe omnis, inventore, quam tempora sed corrupti laborum. Quaerat,
            atque.
          </Text>
          <Text>Veiw all 16 comments</Text>
          <View style={styles.comment}>
            <Text style={styles.text}>
              {' '}
              <Text style={styles.bold}>Alaa Allam</Text> Lorem ipsum dolor, sit
              amet consectetur adipisicing elit.
            </Text>
            <AntDesign
              name={'hearto'}
              size={14}
              style={styles.icon}
              color={colors.black}
            />
          </View>
          <Text>4 Feb, 2022</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {flexDirection: 'row', padding: 10, alignItems: 'center'},
  post: {},
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  dots: {
    marginLeft: 'auto',
  },
  footer: {
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icons: {
    marginHorizontal: 4,
  },
  icon: {
    marginHorizontal: 4,
    marginLeft: 'auto',
  },
  text: {
    color: colors.black,
    lineHeight: 18,
  },
  bold: {fontWeight: fonts.weight.bold},
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default App;
