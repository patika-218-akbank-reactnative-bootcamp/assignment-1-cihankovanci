import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const ButtonContent = (props) => {
    return(
        <View>
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
            <View style={styles.likes}>
                <Image style={styles.storyCircle1} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}  />
                <Image style={styles.storyCircle2} source={{ uri: 'https://yourwikis.com/wp-content/uploads/2020/01/mark-zuck-img.jpg', }}  />
                <Image style={styles.storyCircle3} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}  />
                <Text style={styles.likesWriting1}> Liked by </Text>
                <Text style={styles.likesWriting2}>zuck </Text>
                <Text style={styles.likesWriting3}>and</Text>
                <Text style={styles.likesWriting4}> others</Text>
                </View>
            
            
            <View style={styles.commentStyle}>
                <Text style={styles.usernameStyle}>{props.commentOwner}</Text>
                <Text style={styles.commentTextStyle}>{props.comment}</Text>
            </View>
        </View>
    );
};

export default ButtonContent;


const styles = StyleSheet.create({

    topButton: {
        width: 30,
        height: 30,
        marginLeft: 15,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 7,
        justifyContent: 'space-between'
    },
    button: {
        
        
        flexDirection: 'row', 
       
        
        marginVertical: 10,


    },

    storyCircle1: {
        width: 25,
        height: 25,
        borderRadius: 50,
        marginLeft: 15,
        
        
      },
      storyCircle2: {
        width: 25,
        height: 25,
        borderRadius: 50,
        marginLeft: -10,
        
        
      },
      storyCircle3: {
        width: 25,
        height: 25,
        borderRadius: 50,
        marginLeft: -10,
        
        
      },

      likes: {
        flexDirection: 'row',
        marginLeft:3
        
      },

      likesWriting1: {
        marginLeft:10,
        
        color: 'black',
        
        
      },
      likesWriting2: {
        
        fontWeight: 'bold',
        color: 'black',
        
        
      },
      likesWriting3: {
        
        
        color: 'black',
        
        
      },
      likesWriting4: {
        
        fontWeight: 'bold',
        color: 'black',
        
        
      },
      commentStyle: {
        flexDirection: 'row'
        
      },
      commentTextStyle: {
        fontWeight: 'bold',
        
        marginLeft: 15,
        
      },
      usernameStyle: {
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 15,
        
      }

});