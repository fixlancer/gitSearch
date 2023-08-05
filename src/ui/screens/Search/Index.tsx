import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  StatusBar,
  TextInput,
  Animated,
  RefreshControl,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconM from 'react-native-vector-icons/Ionicons';
import styles from './Styles';
import { ScrollView } from 'react-native-gesture-handler';
import CustomToast from '../../components/CustomToast/CustomToast';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store/store';
import { getUserbyName } from '../../../redux/actions/userActions';
import { moderateScale } from 'react-native-size-matters';
import Empty from '../../components/Empty/Index';
import FetchError from '../../components/FetchError/Index';
import UserCard from '../../components/UserCard/Index';
import SearchCard from '../../components/SearchCard/Index';

const Item = ({ item, index, navigation }) => {

  return (
    <View style={styles.ph15}>
      <UserCard
        username={item.login}
        name={item.name}
        avatar={item.avatar_url}
        description={item.bio}
        followerCount={item.followers}
        followingCount={item.following}
        navigation={navigation}

      />
    </View>
  )
}

const Search = ({ route, navigation }) => {


  const [users, setUsers] = React.useState([]);
  const [username, setUsername] = useState('');
  const [isRefreshing, setisRefreshing] = useState(false);
  const [isMiddleLoading, setisMiddleLoading] = useState(false);
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

    if (retry !== 0) {
      handleRefresh();
    }

  }, [retry])


  const handleRefresh = () => {
    setisMiddleLoading(true);
    fetchUser();
  }


  const fetchUser = async () => {

    setError(false);

    dispatch(getUserbyName({ username }))
      .then(res => {

        setUsers(users.concat(res));
        setisMiddleLoading(false);
        setisRefreshing(false);

      })
      .catch((err) => {
        setError(true);
        setisRefreshing(false);
        setisMiddleLoading(false);

        if (err.status == 'Network Error') {
          showToast('Warning', 'Connection Error, try again');
        }
        else {
          showToast('Warning', err.message);
        }
      })

  };


  const renderItem = ({ item, index }) => {
    return (

      <Item item={item} index={index} navigation={navigation} />

    )
  }


  const showEmpty = () => {
    return error ? null : (
      <Empty />
    )
  }

  useEffect(() => {

  }, [users])


  return (

    <View style={styles.container}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}
        edges={['left', 'right', 'top']}>
        <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />


        <View style={[styles.header]}>

          <View style={[styles.Row, styles.alignCenter, { paddingBottom: 10 }]}>

            <View style={[styles.drop, styles.Row]}>

              <IconM
                name={'ios-search-outline'}
                size={moderateScale(20)}
                color={'#343434'}
                style={{ marginTop: 0, }} />
              <TextInput
                style={styles.text}
                placeholder="Search by username"
                placeholderTextColor={'#343434'}
                value={username}
                onChangeText={(text) => {
                  setUsers([]);
                  setUsername(text)}
              }
                onSubmitEditing={() => handleRefresh()}
              />
            </View>

          </View>

        </View>


        <View style={[{ flex: 1, backgroundColor: '#f3f5f9', }]}>
          {username === '' ? (
            <SearchCard />

          ) : (
            <>

              {error ? (

                <FetchError setRetry={() => setRetry(retry + 1)} />

              ) : (
                <>

                  {isMiddleLoading ? (
                    <ScrollView>
                      <View style={{ flex: 1, width: '100%', backgroundColor: '#f3f5f9', paddingTop: 0, paddingHorizontal: 5, }}>
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
                      data={users}
                      contentContainerStyle={{ paddingTop: 10, paddingBottom: moderateScale(10) }}
                      renderItem={renderItem}
                      keyExtractor={item => item.id}
                      ListEmptyComponent={showEmpty}
                    />

                  )}

                </>
              )}
            </>
          )}

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

  );
};

export default Search;

export const ItemC = React.memo(Item);
