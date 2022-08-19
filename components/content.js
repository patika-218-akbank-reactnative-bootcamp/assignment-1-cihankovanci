import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import TopContent from './topContent';
import ButtonContent from './buttonContent';

const Content = props => {
  return (
    <View>
      <TopContent username={props.name} profilepic={props.profilePictures} />
      <View style={styles.image_container}>
        <Image style={styles.imageStyle} source={{uri: props.contentPhoto}} />
      </View>
      <ButtonContent
        comment={props.comment}
        commentOwner={props.commentOwner}
      />
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  top_container: {
    width: '100%',
    height: 50,

    flexDirection: 'row',
  },
  image_container: {
    width: '100%',
    height: 400,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  text_container: {
    width: '100%',
    marginTop: 15,
    flexDirection: 'row',
  },
  dot_container: {
    width: '100%',
    marginLeft: 265,
    marginBottom: 15,
  },
  text_style: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 13,
  },
  dot_style: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
  },
  storyCircle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 4,
    margin: 5,
  },
});
