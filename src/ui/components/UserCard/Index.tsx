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
    followerCount: any;
    followingCount: any,
    navigation: any;
}

const UserCard: React.FC<Props> = props => {

    const {username} = props;

 
    return (
        <>

            <View
                style={[styles.userBox, styles.p15, styles.mb10]}
            >
                <View style={styles.Row}>

                    <Image
                        source={{ uri: props.avatar }}
                        style={styles.img}
                        imageStyle={{ borderRadius: 0, }}
                    />
                    
                    <View>
                    <MyText style={styles.userLabel}>{props.name}</MyText>
                    <MyText style={[styles.tinyLabel, styles.mb10]}>@{props.username}</MyText>
                    
                    <View style={styles.Row}>
                    <TouchableOpacity 
                    activeOpacity={0.7}
                    onPress={() => props.navigation.navigate('Followers', {count: props.followerCount, username: username })}
                    style={[styles.cardFollow, styles.mr10]}>
                    <MyText style={[styles.subLabel,  styles.textCenter]}>{props.followerCount} followers</MyText>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                    activeOpacity={0.7}
                    onPress={() => props.navigation.navigate('Following', {count: props.followingCount, username: username })}
                    style={styles.cardFollow}>
                    <MyText style={[styles.subLabel, styles.textCenter]}>{props.followingCount} following</MyText>
                    </TouchableOpacity>
                    </View>
                    </View>


                </View>


            </View>

        </>
    )
}


export default UserCard;
