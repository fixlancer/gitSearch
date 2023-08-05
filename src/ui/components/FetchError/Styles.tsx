import {StyleSheet} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
const styles = StyleSheet.create({

      alignCenter: {
        justifyContent:'center', alignItems:'center'
      },


  textCenter: {
    textAlign: 'center',
  },


/*** TEXT LABEL */

tinyLabel: {
  fontSize: moderateScale(12),
  textAlign:'center',
  color:'#808080',
  fontFamily: 'Nunito-Regular',
},

/** END OF TEXT LABEL */


/*PADDING & MARGN **/

  pt20: {
paddingTop:20
  },

/* END OF PADDING **/


});

export default styles;
