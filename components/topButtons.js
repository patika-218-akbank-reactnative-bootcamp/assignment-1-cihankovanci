import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const TopButtons = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          style={styles.writingStyle}
          source={{uri: 'https://fontmeme.com/images/instagram-new-logo.png'}}
        />

        <View style={styles.button}>
          <TouchableOpacity>
            <Image style={styles.topButton} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.topButton} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.topButton} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TopButtons;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
  },
  writingStyle: {
    width: 150,
    height: 50,
    marginLeft: 5,
  },
  topButton: {
    width: 35,
    height: 35,
    marginLeft: 15,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 7,
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginLeft: 75,
    marginVertical: 10,
  },
});
