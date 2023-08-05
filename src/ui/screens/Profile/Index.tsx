import {
    Image,
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyText from '../../components/DefaultTextComponent/MyText';
import IconM from 'react-native-vector-icons/Ionicons';
import styles from './Styles';
import { moderateScale } from 'react-native-size-matters';
import Empty from '../../components/Empty/Index';

const Profile = ({ route, navigation }) => {

    const {name, username, avatar, bio} = route.params;


    return (

        <View style={styles.container}>
            <SafeAreaView
                style={{
                    flex: 1,
                    backgroundColor: '#fff',
                }}
                edges={['left', 'right', 'top']}>
                <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />

                <View style={[styles.newModalHeader, styles.RowB, {}]}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack(null)}>
                        <IconM
                            name={'chevron-back-outline'}
                            size={moderateScale(25)}
                            color={'#343434'}
                            style={{ marginTop: 0, }} />

                    </TouchableOpacity>
                    <Text numberOfLines={1} style={[styles.largeLabel, styles.textDark, ]}>{username}</Text>
                    <Text></Text>
                </View>


                <View style={[styles.profileBg, styles.ph15]}>
                    <View style={styles.RowB}>
                    <View>
                    <Image
                        source={{ uri: avatar }}
                        style={styles.profileImg}
                        imageStyle={{ borderRadius: 100,}}
                    />
                    
                    <MyText style={styles.nameLabel}>{username}</MyText>
                    </View>


                    <View style={styles.pt15}>
                    <MyText style={[styles.nameLabel, styles.textCenter]}>4</MyText>
                    <MyText style={styles.namesubLabel}>Post</MyText>
                    </View>

                    <View style={styles.pt15}>
                    <MyText style={[styles.nameLabel, styles.textCenter]}>50</MyText>
                    <MyText style={styles.namesubLabel}>Followers</MyText>
                    </View>

                    <View style={styles.pt15}>
                        <MyText style={[styles.nameLabel, styles.textCenter]}>30</MyText>
                    <MyText style={styles.namesubLabel}>Following</MyText>
                    </View>

                    </View>

                    <View style={[styles.midBg, styles.pt15]}>
                    <View style={styles.RowB}>
                       <View style={styles.cardFollow}>
                    <MyText style={[styles.subLabel, styles.textCenter]}>Follow</MyText>
                    </View>
                    
                    <View style={styles.cardMessage}>
                    <MyText style={[styles.subLabel, styles.textWhite, styles.textCenter]}>Message</MyText>
                    </View>
                    </View> 

                    <Empty />

                    </View>

                </View>

            </SafeAreaView>

        </View>

    )
}

export default Profile;