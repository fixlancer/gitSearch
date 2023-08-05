import {StyleSheet, Dimensions, Platform} from 'react-native';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
  backgroundColor: '#f3f5f9',
  width: width,
  height: height,
  flex:1,
  },
 

  header: {
    height:'auto',
    width:'100%',
    paddingTop:20,
    paddingHorizontal:10,
    backgroundColor:'#fff',
    borderBottomColor:'#ddd',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  alignCenter: {
    justifyContent: 'center', alignItems: 'center'
  },

  Row: {
    flexDirection:'row',
  },


  RowB: {
    flexDirection:'row',
    justifyContent:'space-between',
  }, 

  
  /*PADDING  **/

  pt15: {
    paddingTop: 15,
  },

  ph15: {
    paddingHorizontal: 15,
  },

  
  emptyCont: {
      height: 'auto',
      width:'100%',
      backgroundColor:'#fff',
      borderRadius:8,
      marginVertical:3,
      paddingHorizontal:9,
      paddingVertical:10,
      elevation:0,
  },


drop: {
  width:'95%',
  borderWidth: StyleSheet.hairlineWidth, 
  borderColor: '#ddd',
  borderRadius:20,alignItems:'center',
  paddingHorizontal:15,
  height:40,
  marginTop:0,
  marginBottom:0,
},

text: {
  color:'#343434',
  alignSelf:'center',
  padding:10,
  paddingLeft:15,
  fontSize: moderateScale(13),
  width:'100%'
},


  });



export default styles;
