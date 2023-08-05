import {View, StyleSheet, Dimensions, Platform} from 'react-native';
import React from 'react';
import MyText from '../DefaultTextComponent/MyText';
const WIDTH = Dimensions.get('screen').width;
 
const CustomToast = ({type, msg}) => {

  return (
    <View style={styles.mainToast}>
    <View style={[styles.toastBox, {backgroundColor: type === 'Success' ? '#1cc88a' : '#f27415'}]}>
      <View>
        <MyText style={styles.toatMsg}>{msg}</MyText>
      </View>
    </View>
    </View>
  );
};


export default CustomToast;
 
const styles = StyleSheet.create({
  mainToast: {
    width:WIDTH,
    paddingHorizontal:15,
    justifyContent:'center',
    alignItems:'center',
  }, 
  toastBox: {
    width: '100%',
    justifyContent:'center',
    alignSelf:'center',
    height: 'auto',
    alignItems: 'center',
    backgroundColor: '#1cc88a',
    paddingHorizontal: 10,
    borderRadius:10,
    paddingTop:5,
    paddingBottom:10,
    marginBottom:Platform.OS === 'ios' ? 50 : 20,
  },
 
  toatMsg: {
    fontSize: 13,
    fontWeight: '400',
    color: '#fff',
    textAlign:'center',
    marginTop: 3,
  },
});
