import {StyleSheet, Dimensions} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
const styles = StyleSheet.create({


    Row: {
        flexDirection:'row',
      },
      
      RowB: {
        flexDirection:'row',
        justifyContent:'space-between',
      }, 
  
      alignCenter: {
        justifyContent:'center', alignItems:'center'
      },

      textLeft: {
        textAlign:'left',
      },   
      
  textCenter: {
    textAlign: 'center',
  },


/*** TEXT LABEL */


largeLabel:  {
  fontSize: moderateScale(15),
  textAlign:'center',
  color:'#343434',
  fontFamily: 'Nunito-Medium',
}, 



/** END OF TEXT LABEL */


/*PADDING & MARGN **/
  pt15: {
    paddingTop:15,
  },

  pt30: {
paddingTop:30,
  },


/* END OF PADDING **/

circleBg: {
  width: moderateScale(60),
  height: moderateScale(60),
  padding: 0,
  marginHorizontal: 1,
  justifyContent: 'center',   
  alignItems:'center',
  borderRadius: 100,
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: '#343434',
},



});

export default styles;
