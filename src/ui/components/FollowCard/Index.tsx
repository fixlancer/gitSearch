import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MyText from '../DefaultTextComponent/MyText'
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import styles from './Styles';
import { moderateScale } from 'react-native-size-matters';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
    username: any;
    avatar: any;
    name: any;
    description: any;
    navigation: any;
}

const FollowCard: React.FC<Props> = props => {

    const {avatar, name, username, description, navigation} = props;
 
    return (
        <>

            <TouchableOpacity
            onPress={() => navigation.navigate('Profile', {name: name, avatar: avatar, bio: description, username: username })}
                style={[styles.followBox, styles.ph15, styles.pb10, styles.mb10]}
            >
                 <View style={styles.RowB}>

                     <View style={[styles.Row, {width:'70%'}]}>

                    <Image
                        source={{ uri: props.avatar }}
                        style={styles.img}
                        imageStyle={{ borderRadius: 0 }}
                    />
                    
                    <MyText style={[styles.userLabel, styles.pt8]}>{props.username}</MyText>
                    </View>

                <View style={styles.cardFollow}>
                    <MyText style={[styles.subLabel, styles.textCenter]}>View</MyText>
                    </View>

                </View>


            </TouchableOpacity>

        </>
    )
}


export default FollowCard;
