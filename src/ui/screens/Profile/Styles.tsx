import { StyleSheet, Dimensions, Platform } from 'react-native';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: width,
        height: height,
        flex: 1,
    },


    newModalHeader: {
        width: '100%', height: 'auto', paddingTop: 20, paddingBottom: 0, marginBottom: 10, paddingHorizontal: 15, backgroundColor: '#fff',
    },

    lineBottom: {
        borderBottomColor: '#ddd',
        marginBottom: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
      },

    midBg: {
        paddingBottom: Platform.OS === 'ios' ? 40 : 20, height: '100%', flex: 1, width: '100%',
    },
    Row: {
        flexDirection: 'row',
    },


    RowB: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },


    profileImg: {
        width: 70,
        height: 70,
        borderRadius: 100, 
        marginRight:20,
        marginBottom:10,
    },

    cardFollow: {
        width:'48%',
        height: 30,
        backgroundColor:'#fff',
        borderRadius:8,
        marginTop:5,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:20,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#ddd'
      },
      
      cardMessage: {
        width:'48%',
        height: 30,
        backgroundColor:'#f27415',
        borderRadius:8,
        marginTop:5,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:20,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#ddd'
      },
      
    
  textDark: {
    color: '#343434',
  },

  textCenter: {
      textAlign:'center'
  },

  textWhite: {
      color:'#fff'
  },

  /*PADDING  **/

  pt15: {
    paddingTop: 15,
  },

  mb10: {marginBottom:20},

  ph15: {
    paddingHorizontal: 15,
  },


    /*** TEXT LABEL */

    largeLabel: {
        fontSize: moderateScale(17),
        textAlign: 'left',
        color: '#343434',
        marginTop: 2,
        marginBottom: 0,
        fontFamily: 'Nunito-SemiBold',
    },

    nameLabel: {
        fontSize: moderateScale(13),
        textAlign: 'left',
        color: '#343434',
    },

    namesubLabel: {
        fontSize: moderateScale(11),
        textAlign: 'left',
        color: '#343434',
    },

    titleLabel: {
        fontSize: moderateScale(20),
        textAlign: 'left',
        marginBottom: 5,
        color: '#343434',
        fontFamily: 'Hestina',
    },

    subLabel: {
        fontSize: moderateScale(12),
        textAlign: 'left',
        color: '#343434',
        paddingLeft: 0,
        fontFamily: 'Nunito'
    },



    profileBg: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        flex: 1,
    },
});

export default styles;
