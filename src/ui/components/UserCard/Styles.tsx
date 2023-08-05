import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {  moderateScale } from 'react-native-size-matters';
const styles = StyleSheet.create({

  img: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: 100,
    marginRight: 10,
    },


    Row: {
        flexDirection:'row',
      },
      
      RowB: {
        flexDirection:'row',
        justifyContent:'space-between',
      }, 
  
      userBox: {
        width:'100%',
        height:'auto',
        backgroundColor:'#fff',
        borderRadius:15,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#ddd'
      },

        
      cardFollow: {
        width:'auto',
        height: 'auto',
        backgroundColor:'#fff',
        borderRadius:8,
        paddingHorizontal:15,
        paddingBottom:5,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#ddd'
      },

      p15: {
        padding:10,
      },
      
      textLeft: {
        textAlign:'left',
      },

      textWhite:{
        color:'#fff',
      },
   

      textCenter : {
        textAlign:'center',
      },
    
      textDark: {
        color: '#343434'
      },
    
      point: {
        height:45, width:'auto', marginRight:15, marginTop:5, borderLeftColor:'#ddd',
        borderLeftWidth:2,  
    },

    divider: {
      height: 'auto', width: 1, backgroundColor: '#ddd', marginTop:10, marginleft:15, marginRight:15,
    },


/*** TEXT LABEL */

largeLabel: {
  fontSize: moderateScale(17),
  textAlign:'left',
  color:'#343434',
  marginBottom:0,
  fontFamily: 'Nunito-SemiBold',
},

userLabel: {
  fontSize: moderateScale(14),
  textAlign:'left',
  color:'#343434',
  fontFamily: 'Nunito-SemiBold',
},

subLabel: {
  fontSize: moderateScale(12),
  textAlign:'left',
  color:'#343434',
  marginTop:2,
  fontFamily: 'Nunito-Bold'
},



tinyLabel: {
  fontSize: moderateScale(11),
  textAlign:'left',
  color:'#808080',
  marginTop:2,
  marginBottom:5,
  fontFamily: 'Nunito-Regular',
  width: (width - 60) / 1,
},


tinyDark: {
  fontSize: moderateScale(12),
  textAlign:'left',
  color:'#343434',
  fontFamily: 'Nunito-Regular',
  width: (width - 60) / 1,
},


/** END OF TEXT LABEL */


/*PADDING & MARGN **/

  mr10: {
    marginRight:10,
},

mb45: {
  marginBottom:45,
  width:'100%',
},

mb30: {
  marginBottom:30,
  width:'100%',
},

mb20: {
  marginBottom:20,
  width:'100%',
},

mb10: {
    marginBottom:10,
    width:'100%',
},
  pt15: {
    paddingTop:15,
  },

  newPH: {
    width:width - 68
  },

  pt40: {
marginTop:40,
  },
  pt30: {
paddingTop:30,
  },

  pt5: {
paddingTop:5
  },
  pb5: {
    paddingBottom:5,
  },
  pb10: {
    paddingBottom:10,
  },
  ph15: {
    paddingHorizontal:15
},

ph25: {
paddingHorizontal:25,
},

pt10: {
  paddingTop:10,
},

pl15: {
  paddingLeft:15,
},

pl10: {
  paddingLeft: 10,
},

pl5: {
  paddingLeft: 5,
},
/* END OF PADDING **/


});

export default styles;
