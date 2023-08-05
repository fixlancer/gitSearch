import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import React, { Fragment, useContext, useEffect, useMemo, useState, useRef, useCallback } from 'react';
import {
    Image,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    FlatList,
    StatusBar,
    Platform,
    TextInput,
    Animated,
    ActivityIndicator,
    RefreshControl,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyText from '../../components/DefaultTextComponent/MyText';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles';
import { ScrollView } from 'react-native-gesture-handler';
import CustomToast from '../../components/CustomToast/CustomToast';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store/store';
import { getFollowers } from '../../../redux/actions/userActions';
import { moderateScale } from 'react-native-size-matters';
import Empty from '../../components/Empty/Index';
import FetchError from '../../components/FetchError/Index';
import FollowCard from '../../components/FollowCard/Index';

const Item = ({ item, index, navigation }) => {

    return (
        <FollowCard
            username={item.login}
            avatar={item.avatar_url}
            name={item.name}
            description={item.bio}
            navigation={navigation}

        />
    )
}

const Followers = ({ route, navigation }) => {

    const { count, username } = route.params;

    const [followers, setFollowers] = useState([]);
    const [isRefreshing, setisRefreshing] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [isMiddleLoading, setisMiddleLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [endReached, setEndReached] = useState(false);
    const [retry, setRetry] = useState(0);
    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    /*  TOAST ========== */

    const [toastType, setToastType] = useState('success');
    const [toastMsg, setToastMsg] = useState('');
    const [show, setShow] = useState(0);

    const slideAnim = useRef(new Animated.Value(120)).current;

    const animateToast = () => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
        }).start();

        setTimeout(() => {
            Animated.timing(slideAnim, {
                toValue: 120,
                duration: 200,
                useNativeDriver: true,
            }).start();
            setShow(0);
        }, 3500);
    };

    const showToast = (type, msg) => {
        setToastType(type);
        setToastMsg(msg);
        setShow(1);
        animateToast();
    };

    /* TOAST ENDS ============= */



    useEffect(() => {

        if (retry != 0) {
            handleRefresh()
        }

    }, [retry])


    const handleRefresh = () => {
        setFollowers([]);
        setisMiddleLoading(true);
        fetchNewFollowers();
    }


    useEffect(() => {
        setisMiddleLoading(true);
        fetchFollowers();
    }, [])


    const fetchFollowers = async () => {
        if (endReached) {
            return;
        } else {
            fetchNewFollowers()
        }
    };

    const fetchNewFollowers = async () => {
        setisLoading(true);
        setError(false);

        const limit = 10;

        dispatch(getFollowers({ username, limit, page }))
            .then(res => {

                console.log('datata', res);

                setFollowers(followers.concat(res));
                setPage(page + 1);
                setisLoading(false);
                setisMiddleLoading(false);
                setisRefreshing(false);


                if (res?.length < limit) {
                    setEndReached(true);
                } else {
                    setEndReached(false);
                }

            })
            .catch((err) => {
                setError(true);
                setisLoading(false);
                setisRefreshing(false);
                setEndReached(false);
                setisMiddleLoading(false);

                if (err.message == 'Network Error') {
                    showToast('Warning', 'Connection Error, try again');
                }
                else {
                    showToast('Warning', err.message);
                }
            })

    }


    const renderItem = ({ item, index }) => {
        return (

            <Item item={item} index={index} navigation={navigation} />

        )
    }

    const footerLoader = () => {
        return isLoading ? (

            <View style={{ justifyContent: 'center', flexDirection: 'row', alignContent: 'center', }}>
                <ActivityIndicator color={'#343434'} style={{ paddingVertical: 15 }} />
            </View>
        ) : null
    }

    const showEmpty = () => {
        return error ? null : (
            <Empty />
        )
    }

    return (

        <View style={styles.container}>

            <SafeAreaView
                style={{
                    height: height,
                    width: width,
                    flex: 1,
                    backgroundColor: 'transparent',
                }}
                edges={['left', 'right', 'top']}>
                <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />

                <View style={[styles.newModalHeader, {}]}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack(null)}>
                        <IconM
                            name={'close-circle-outline'}
                            size={moderateScale(25)}
                            color={'#343434'}
                            style={{ marginTop: 0, }} />

                    </TouchableOpacity>
                    <Text numberOfLines={1} style={[styles.largeLabel, styles.textDark, styles.pt15]}>{count} Followers</Text>
                </View>

                <View style={styles.lineBottom} />

                <View style={[styles.midBg]}>


                    <View style={{ flex: 1, backgroundColor: '#fff', }}>


                        {error ? (

                            <FetchError setRetry={() => setRetry(retry + 1)} />

                        ) : (
                            <>

                                {isMiddleLoading ? (
                                    <ScrollView>
                                        <View style={{ flex: 1, width: '100%', backgroundColor: '#fff', paddingTop: 0, paddingHorizontal: 5, }}>
                                            <View style={styles.emptyCont}>
                                                <SkeletonPlaceholder>
                                                    <SkeletonPlaceholder.Item>
                                                        <SkeletonPlaceholder.Item flexDirection="row">
                                                            <SkeletonPlaceholder.Item height={40} width={40} borderRadius={30} />
                                                            <SkeletonPlaceholder.Item>
                                                                <SkeletonPlaceholder.Item marginLeft={8} marginBottom={5} height={20} width={200} borderRadius={10} />
                                                                <SkeletonPlaceholder.Item marginLeft={8} marginBottom={5} height={20} width={'70%'} borderRadius={10} />
                                                            </SkeletonPlaceholder.Item>
                                                        </SkeletonPlaceholder.Item>
                                                    </SkeletonPlaceholder.Item>
                                                </SkeletonPlaceholder>

                                            </View>

                                            <View style={styles.emptyCont}>
                                                <SkeletonPlaceholder>
                                                    <SkeletonPlaceholder.Item>
                                                        <SkeletonPlaceholder.Item flexDirection="row">
                                                            <SkeletonPlaceholder.Item height={40} width={40} borderRadius={30} />
                                                            <SkeletonPlaceholder.Item>
                                                                <SkeletonPlaceholder.Item marginLeft={8} marginBottom={5} height={20} width={200} borderRadius={10} />
                                                                <SkeletonPlaceholder.Item marginLeft={8} marginBottom={5} height={20} width={'70%'} borderRadius={10} />
                                                            </SkeletonPlaceholder.Item>
                                                        </SkeletonPlaceholder.Item>

                                                    </SkeletonPlaceholder.Item>
                                                </SkeletonPlaceholder>

                                            </View>

                                            <View style={styles.emptyCont}>
                                                <SkeletonPlaceholder>
                                                    <SkeletonPlaceholder.Item>
                                                        <SkeletonPlaceholder.Item flexDirection="row">
                                                            <SkeletonPlaceholder.Item height={40} width={40} borderRadius={30} />
                                                            <SkeletonPlaceholder.Item>
                                                                <SkeletonPlaceholder.Item marginLeft={8} marginBottom={5} height={20} width={200} borderRadius={10} />
                                                                <SkeletonPlaceholder.Item marginLeft={8} marginBottom={5} height={20} width={'70%'} borderRadius={10} />
                                                            </SkeletonPlaceholder.Item>
                                                        </SkeletonPlaceholder.Item>
                                                    </SkeletonPlaceholder.Item>
                                                </SkeletonPlaceholder>

                                            </View>

                                            <View style={styles.emptyCont}>
                                                <SkeletonPlaceholder>
                                                    <SkeletonPlaceholder.Item>
                                                        <SkeletonPlaceholder.Item flexDirection="row">
                                                            <SkeletonPlaceholder.Item height={40} width={40} borderRadius={30} />
                                                            <SkeletonPlaceholder.Item>
                                                                <SkeletonPlaceholder.Item marginLeft={8} marginBottom={5} height={20} width={200} borderRadius={10} />
                                                                <SkeletonPlaceholder.Item marginLeft={8} marginBottom={5} height={20} width={'70%'} borderRadius={10} />
                                                            </SkeletonPlaceholder.Item>
                                                        </SkeletonPlaceholder.Item>
                                                    </SkeletonPlaceholder.Item>
                                                </SkeletonPlaceholder>

                                            </View>

                                            <View style={styles.emptyCont}>
                                                <SkeletonPlaceholder>
                                                    <SkeletonPlaceholder.Item>
                                                        <SkeletonPlaceholder.Item flexDirection="row">
                                                            <SkeletonPlaceholder.Item height={40} width={40} borderRadius={30} />
                                                            <SkeletonPlaceholder.Item>
                                                                <SkeletonPlaceholder.Item marginLeft={8} marginBottom={5} height={20} width={200} borderRadius={10} />
                                                                <SkeletonPlaceholder.Item marginLeft={8} marginBottom={5} height={20} width={'70%'} borderRadius={10} />
                                                            </SkeletonPlaceholder.Item>
                                                        </SkeletonPlaceholder.Item>
                                                    </SkeletonPlaceholder.Item>
                                                </SkeletonPlaceholder>

                                            </View>

                                        </View>
                                    </ScrollView>
                                ) : (

                                    <FlatList
                                        refreshControl={
                                            <RefreshControl
                                                tintColor={'#343434'}
                                                refreshing={isRefreshing}
                                                onRefresh={() => handleRefresh()}
                                            />
                                        }
                                        data={followers}
                                        contentContainerStyle={{ paddingTop: 10, paddingBottom: moderateScale(10) }}
                                        renderItem={renderItem}
                                        maintainVisibleContentPosition={{
                                            autoscrollToTopThreshold: 10,
                                            minIndexForVisible: 1,
                                        }}
                                        keyExtractor={item => item.id}
                                        initialNumToRender={10}
                                        onEndReached={fetchFollowers}
                                        onEndReachedThreshold={0.1}
                                        ListFooterComponent={footerLoader}
                                        ListEmptyComponent={showEmpty}
                                    />

                                )}

                            </>
                        )}

                    </View>

                </View>

            </SafeAreaView>

            {show !== 0 ? (

                <Animated.View
                    style={{ transform: [{ translateY: slideAnim }], position: 'absolute', zIndex: 999, bottom: 0 }}>
                    <CustomToast
                        type={toastType}
                        msg={toastMsg}
                    />
                </Animated.View>
            ) : null}

        </View>

    )
}


export default Followers;

export const ItemC = React.memo(Item);