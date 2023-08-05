import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {  moderateScale } from 'react-native-size-matters';
const styles = StyleSheet.create({

  img: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: 100,
    marginRight: 10,
    },


    Row: {
        flexDirection:'row',
        width:'100%'
      },
      
      RowB: {
        flexDirection:'row',
        justifyContent:'space-between',
        
      }, 
  
      followBox: {
        width:'100%',
        height:'auto',
        backgroundColor:'#fff',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#ddd'
      },

      cardFollow: {
        width:'auto',
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

/*** TEXT LABEL */



userLabel: {
  fontSize: moderateScale(13),
  textAlign:'left',
  color:'#343434',
  fontFamily: 'Nunito-SemiBold',
},


subLabel: {
  fontSize: moderateScale(11),
  textAlign:'center',
  color:'#343434',
  fontFamily: 'Nunito-Regular'
},
/** END OF TEXT LABEL */


/*PADDING & MARGN **/

  mb40: {
    marginBottom:40,
    width:'100%',
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

  pt8: {
paddingTop:8
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
